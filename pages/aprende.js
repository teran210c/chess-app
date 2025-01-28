import React from 'react'

export const aprende = () => {
    return (
        <>
            <section className="px-6 py-16 bg-gray-100 dark:bg-gray-900">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
                        Aprende Más sobre Ajedrez
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        Esta aplicación web tiene como objetivo presentar el ajedrez a los principiantes, guiándolos desde el conocimiento de sus orígenes e historia hasta aprender a jugar. Aquí no solo aprenderás las reglas básicas, sino que también te ayudaremos a mejorar, evitando que te estanques o te pierdas entre la gran cantidad de recursos disponibles. A través de esta plataforma, podrás avanzar fácilmente en tu aprendizaje sin confusión.
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                        El ajedrez no solo es un juego, es una experiencia que estimula la mente, mejora tu memoria y desarrolla habilidades estratégicas. Aquí exploraremos más sobre cómo puedes comenzar tu aprendizaje y avanzar en este apasionante mundo.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                Inicia con lo Básico
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Aprende las reglas del ajedrez, las posiciones iniciales de las piezas y cómo moverse en el tablero. Con una base sólida, estarás listo para progresar rápidamente.
                            </p>
                        </div>
                        <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md">
                            <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                                Mejora tus Tácticas
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300">
                                Descubre técnicas avanzadas como las clavadas, los ataques dobles y los sacrificios. Estas habilidades te ayudarán a anticipar y superar a tus oponentes.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12">
                        <button
                            onClick={() => window.history.back()}
                            className="px-8 py-3 rounded-lg font-semibold text-white bg-blue-600 hover:bg-blue-500"
                        >
                            Volver
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default aprende;