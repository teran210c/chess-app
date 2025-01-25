import React from 'react';
import Image from 'next/image';

function HeroSection() {
  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16"
      style={{ backgroundColor: '#ead4b1', minHeight: '60vh' }}
    >
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#503526' }}>
          Descubre el Arte del Ajedrez: Aprende y Mejora
        </h1>
        <p className="text-lg md:text-xl mb-8" style={{ color: '#503526' }}>
          Tu aventura en el ajedrez comienza aquí.
        </p>
        <div className="space-x-4">
          <button
            className="px-8 py-3 rounded-lg font-semibold hover:opacity-90"
            style={{ backgroundColor: '#503526', color: '#ead4b1' }}
          >
            Inicia sesión
          </button>
          <button
            className="border px-8 py-3 rounded-lg font-semibold hover:opacity-90"
            style={{ borderColor: '#503526', color: '#503526', backgroundColor: '#d2b38f' }}
          >
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
          height={700} // Cambia la altura según sea necesario
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
