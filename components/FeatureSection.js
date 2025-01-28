import React from "react";

const FeatureSection = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
          Características Clave
          </h1>

          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Descubre los elementos esenciales que mejorarán tu experiencia de aprendizaje y juego.
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl h-96 max-w-[18rem]">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Estrategias Básicas
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Domina los fundamentos del ajedrez con tácticas iniciales claras y movimientos esenciales que te preparan para los desafíos del tablero. Ideal para quienes buscan construir una base sólida.
              </p>
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl h-96 max-w-[18rem]">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Técnicas Avanzadas
              </h1>

                <p className="text-gray-500 dark:text-gray-300">
                  Aprende aperturas estratégicas, finales complejos y tácticas avanzadas para sorprender a tus oponentes y dominar cada partida con confianza.
                </p>     
            </div>

            <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl h-96 max-w-[18rem]">
              <span className="inline-block text-blue-500 dark:text-blue-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                Práctica Interactiva
              </h1>

              <p className="text-gray-500 dark:text-gray-300">
                Mejora tus habilidades a través de ejercicios prácticos y partidas interactivas diseñadas para simular situaciones reales de juego.
              </p>             
            </div>
          </div>
        </div>
      </section>

      
    </div>
  );
};

export default FeatureSection;
