import React from 'react'

export const about = () => {
    return (
        <>
                <h1 className="text-4xl font-bold mb-4 text-center">Acerca de Nosotros</h1>
                <p className="text-lg leading-7 text-gray-700 mb-6">
                    Somos una comunidad apasionada por el ajedrez, dedicada a proporcionar
                    herramientas y recursos para jugadores de todos los niveles. Desde
                    principiantes hasta expertos, creemos en el poder del aprendizaje y el
                    desarrollo continuo.
                </p>
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">Nuestra Misión</h2>
                    <p className="text-gray-700 leading-6">
                        Inspirar y empoderar a los amantes del ajedrez mediante contenido educativo,
                        desafíos interactivos y una comunidad solidaria.
                    </p>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-2">¿Por qué elegirnos?</h2>
                    <ul className="list-disc list-inside text-gray-700 leading-6">
                        <li>Clases y recursos diseñados por expertos.</li>
                        <li>Prácticas interactivas para mejorar tus habilidades.</li>
                        <li>Una comunidad activa y colaborativa.</li>
                    </ul>
                </section>
        </>
    )
}

export default about;