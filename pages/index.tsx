import Image from 'next/image'
import { useState } from 'react'
import { createClient } from '@supabase/supabase-js'

/* export async function getStaticProps() {
  const supabaseAdmin = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || '',
    process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  )

  const { data } = await supabaseAdmin.from('images').select('*').order('id')
  return {
    props: {
      images: data,
    },
  }
} */

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

type Image = {
  id: number
  href: string
  imageSrc: string
  name: string
  username: string
}

export default function Gallery({ images }: { images: Image[] }) {
  //const [isLoading, setLoading] = useState(true)
  return (
    <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      <BlurImage/>
     


      </div>
    </div>
  )
}

function BlurImage() {
  const [isLoading, setLoading] = useState(true)

  return (
    <a href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
        <img
          alt=""
          src="https://scontent.feze11-1.fna.fbcdn.net/v/t39.30808-6/339136257_917559112721773_1741361305998165288_n.jpg?stp=dst-jpg_p600x600&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHI4Rirrp6I3Uz_q3NMGtY3IKSXKwIJ7xogpJcrAgnvGrRXz7l-blGD0pKxH4M0Y77wQ0BSgQ6-zVGkLiQlaKR-&_nc_ohc=8yWyDbHswBQAX9CHWVW&_nc_ht=scontent.feze11-1.fna&oh=00_AfCv-uBHVeeWqgWFaRXs0q-CT8ijCmnU4e_qPJe-Aul-rQ&oe=64E11CAB"
          style={{ objectFit: 'cover',
          width: '50%',
          height: '50%',
          
        
          transition: 'transform 0.7s ease-in-out',
          transform: isLoading ? 'scale(1.1) blur(2px) grayscale(1)' : 'scale(1) blur(0) grayscale(0)',
        }}
        onLoad={() => setLoading(false)}
        /> 
      </div>
      <h3 className="mt-4 text-sm text-gray-700">Nombre</h3>
      <p className="mt-1 text-lg font-medium text-gray-900">@tanto</p>
    </a>
  )
}