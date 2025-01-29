import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export const Contacto = () => {
    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                {/* Título principal */}
                <h1 className="text-5xl font-bold text-center text-gray-900 mb-8">
                    Contáctanos
                </h1>

                {/* Descripción */}
                <p className="text-xl text-gray-700 text-center mb-12">
                    ¿Tienes preguntas o sugerencias? Déjanos un mensaje y nos pondremos en contacto contigo lo antes posible.
                </p>

                {/* Formulario de contacto */}
                <section className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-900 mb-6 text-center">
                        Envíanos un mensaje
                    </h2>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium text-gray-700">Nombre</label>
                            <input type="text" id="name" name="name" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>
                        
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium text-gray-700">Correo Electrónico</label>
                            <input type="email" id="email" name="email" required className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-lg font-medium text-gray-700">Mensaje</label>
                            <textarea id="message" name="message" required rows="5" className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"></textarea>
                        </div>

                        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-lg shadow-md hover:bg-blue-700 transition duration-300">
                            Enviar Mensaje
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contacto;
