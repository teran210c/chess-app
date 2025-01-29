import React from 'react';
import Image from 'next/image';
import { useSession, signIn, signOut } from "next-auth/react"; // Importa useSession, signIn y signOut

function HeroSection() {
  const { data: session } = useSession(); // Obtén la sesión del usuario

  return (
    <section
      className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-16 md:px-12 lg:px-24"
      style={{ backgroundColor: '#f3e9d2', minHeight: '70vh' }}
    >
      {/* Left Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold" style={{ color: '#2c3e50' }}>
          Descubre el Arte del Ajedrez: Aprende y Mejora
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl" style={{ color: '#34495e' }}>
          Tu aventura en el ajedrez comienza aquí.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {/* Botón de Iniciar sesión o Cerrar sesión */}
          {session ? (
            <button
              onClick={() => signOut()}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              style={{ backgroundColor: '#3498db', color: '#ffffff' }}
            >
              Cerrar sesión
            </button>
          ) : (
            <button
              onClick={() => signIn("google")}
              className="px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
              style={{ backgroundColor: '#3498db', color: '#ffffff' }}
            >
              Iniciar sesión
            </button>
          )}

          {/* Botón "Aprende más" */}
          <button
            onClick={() => {
              if (!session) {
                signIn("google"); // Si no hay sesión, inicia sesión con Google
              } else {
                window.location.href = "/aprende"; // Si hay sesión, redirige a /aprende
              }
            }}
            className="border px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition duration-300"
            style={{ borderColor: '#3498db', color: '#3498db', backgroundColor: '#ffffff' }}
          >
            Aprende más
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <Image
          src="/mano.jpeg"
          alt="Hero section illustration"
          width={500}
          height={700}
          className="rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
        />
      </div>
    </section>
  );
}

export default HeroSection;