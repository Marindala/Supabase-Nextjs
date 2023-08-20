/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['scontent.feze11-1.fna.fbcdn.net', 'facebook.com', 'scontent.fepa10-1.fna.fbcdn.net'],
  },
};

/* El error "URL signature expired" suele ocurrir cuando se utiliza un enlace (URL) firmado con un token de acceso temporal, y ese token ha caducado. Supongo que estás utilizando Supabase para generar enlaces firmados que permiten acceder a imágenes almacenadas en algún lugar, y estos enlaces tienen un tiempo limitado de validez para aumentar la seguridad. */