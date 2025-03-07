import React from 'react';

export const About = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Título principal */}
                <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
                    Acerca de Nosotros
                </h1>

                {/* Descripción */}
                <p className="text-xl text-gray-700 text-center mb-12">
                    Somos una comunidad apasionada por el ajedrez, dedicada a proporcionar
                    herramientas y recursos para jugadores de todos los niveles. Desde
                    principiantes hasta expertos, creemos en el poder del aprendizaje y el
                    desarrollo continuo.
                </p>

                {/* Sección de Misión */}
                <section className="bg-white p-8 rounded-lg shadow-lg mb-12">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-4">Nuestra Misión</h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                        Inspirar y empoderar a los amantes del ajedrez mediante contenido educativo,
                        desafíos interactivos y una comunidad solidaria.
                    </p>
                </section>

                {/* Sección de "¿Por qué elegirnos?" */}
                <section className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6">¿Por qué elegirnos?</h2>
                    <ul className="list-disc list-inside space-y-4 pl-5">
                        <li className="text-lg text-gray-700">
                            Clases y recursos diseñados por expertos.
                        </li>
                        <li className="text-lg text-gray-700">
                            Prácticas interactivas para mejorar tus habilidades.
                        </li>
                        <li className="text-lg text-gray-700">
                            Una comunidad activa y colaborativa.
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default About;