import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'

export const contacto = () => {
  return (
    <>
        <Navbar />
        <main className="contacto-container">
        <h1>Contáctanos</h1>
        <p>Deja tu mensaje y nos pondremos en contacto contigo.</p>
        <form className="contact-form">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Correo Electrónico:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </main>
        <Footer />
    
    </>
  )
}

export default Contacto;