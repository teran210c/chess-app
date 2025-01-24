import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 bg-teal-100">
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Descubre el Arte del Ajedrez: Aprende y Mejora
        </h1>
        <p className="text-gray-600 mb-6">
          Tu aventura en el ajedrez comienza aquí.
        </p>
        <div className="space-x-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-500">
            Inicia sesion
          </button>
          <button className="border border-green-600 text-green-600 px-6 py-2 rounded hover:bg-green-100">
          Aprende más
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <Image
          src="/mano.jpeg"
          alt="Hero section illustration"
          width={500}  // Cambia el ancho según sea necesario
          height={400} // Cambia la altura según sea necesario
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;