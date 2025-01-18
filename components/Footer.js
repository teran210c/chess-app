import React from 'react';
import Link from 'next/link';


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
        {/* Logo y Descripción */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-8">
          <div>
            <h2 className="text-2xl font-bold">MiLogo</h2>
            <p className="mt-2 text-gray-400">
              Creando las mejores experiencias digitales para todos.
            </p>
          </div>

          {/* Enlaces de Navegación */}
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link href="#" className="hover:underline">Inicio</Link>
            <Link href="#" className="hover:underline">Acerca de</Link>
            <Link href="#" className="hover:underline">Servicios</Link>
            <Link href="#" className="hover:underline">Contacto</Link>
          </div>
        </div>

        {/* Línea Divisora */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Información de Copyright */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} MiLogo. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
