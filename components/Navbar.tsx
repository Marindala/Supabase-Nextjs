//import Link from 'next/link';
import { useState } from 'react'
import { FaShoppingCart } from 'react-icons/fa'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-violet-200 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-2 py-4">
        <div className="flex items-center mb-2">
          <img
            className="h-8 w-8 md:h-12 md:w-12 rounded-full cursor-pointer transition  hover:opacity-75 "
            src="/logo.jpg"
            alt="Logo"
            style={{ width: '60px', height: '60px' }}
          />
        </div>

        <div className="hidden space-x-8 md:flex">
          <a href="/" className="text-white hover:text-gray-900">
            Inicio
          </a>

          <a href="/about" className="text-white hover:text-gray-900">
            Sobre Nosotros
          </a>

          <a href="/contact" className="text-white hover:text-gray-900">
            Contacto
          </a>
        </div>

        {/* Icono de carrito */}
        <div className="hidden items-center md:flex">
          <a
            href="/cart"
            className="relative text-gray-600 hover:text-gray-900"
          >
            <FaShoppingCart className="text-2xl" />{' '}
          </a>
        </div>

        {/* Menú hamburguesa para móvil */}
        <button
          className="text-white focus:outline-none md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Menú para móvil */}
      {isOpen && (
        <div className="bg-white shadow-md md:hidden">
          <div className="flex flex-col space-y-4 p-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Inicio
            </a>
            {/*   <a href="/products" className="text-gray-600 hover:text-gray-900">Productos</a> */}
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              Sobre Nosotros
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">
              Contacto
            </a>

            {/* Icono de carrito en versión móvil */}
            <a
              href="/cart"
              className="relative flex items-center text-gray-600 hover:text-gray-900"
            >
              <FaShoppingCart className="text-2xl" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
