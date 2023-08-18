import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin.from('images').select('*').order('id')
  //console.log(data)
  return {
    props: {
      images: data,
    },
  }
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
  image: string
}

export default function Gallery({ images }: { images: Image[] }) {
  return (
    <div>
      <div className="-mb-6 p-4 text-center sm:flex sm:items-center sm:justify-center sm:text-center">
        {' '}
        {/* -mt-4 */}
        <img
          className="mb-8 navbar-img screen-reader-text duration-1500 cursor-pointer rounded-full transition  hover:opacity-75 sm:mb-4 sm:mt-4"
          src="https://scontent.fepa10-2.fna.fbcdn.net/v/t39.30808-6/326744154_1320260588541155_4589715700627039442_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEDATq-WpVI0G3p84v9iUqL_kuTf7IB3QD-S5N_sgHdAKjf3gQ9vn06MKCwG7bePegycFHY6KPYmre_OLXqLKjS&_nc_ohc=9lJ3SVNOUpIAX8hQG5t&_nc_oc=AQlqtXco7cebtdJzM7szvwodvO0ZQbU6ajsHn9bM-r5i8B4JxyCJo3h5g6qF7iqGge4&_nc_ht=scontent.fepa10-2.fna&oh=00_AfBt9jaY_JQEJiSnWwCp74LoUMYuvc_0qNSQN-Sit6tL7w&oe=64E1DCBC"
          alt="Logo"
          style={{ width: '90px', height: '90px' }}
        />
      </div>

      <div className="mx-auto max-w-2xl  px-4 py-6 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h1 className="mb-8 text-center text-5xl  font-bold text-gray-500 xl:text-7xl xl:leading-[7.5rem]">
          Galeria de Arte{' '}
        </h1>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {images.map((image) => (
            <BlurImage key={image.id} image={image} />
          ))}
        </div>
      </div>
    </div>
  )
}

function BlurImage({ image }: { image: Image }) {
  const [isLoading, setLoading] = useState(false)

  return (
    <a href={image.href} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img
          alt=""
          src={image.imageSrc}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          className={cn(
            'duration-500 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoad={() => setLoading(false)}
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700 font-bold">{image.name}</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">{image.username}</p>
    </a>
  )
}
