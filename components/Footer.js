import React from 'react';
import Link from 'next/link';


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-6">
       
        {/* Línea Divisora */}
        <div className="border-t border-gray-600 my-6"></div>

        {/* Información de Copyright */}
        <div className="text-center text-sm text-gray-400">
           <img
              src="/chess-circle.png"
              class="h-24"
              alt="Flowbite Logo"
            />
            &copy; {new Date().getFullYear()} <Link href="/"></Link>. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
