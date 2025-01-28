import React from "react"
import Slider from "react-slick"
import Image from "next/image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function CarouselSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const items = [
    {
      id: 1,
      title: "Tablero de Ajedrez - Nivel Principiante",
      description: "Un ejercicio básico para empezar a entender las reglas del ajedrez.",
      image: "/pion.jpeg",
    },
    {
      id: 2,
      title: "Ejercicio Intermedio",
      description: "Resuelve este ejercicio para mejorar tus tácticas de ataque.",
      image: "/pion.jpeg",
    },
    {
      id: 3,
      title: "Retos Avanzados",
      description: "Prueba tus habilidades en este reto avanzado.",
      image: "/pion.jpeg",
    },
    {
      id: 4,
      title: "Mejora tu Juego",
      description: "Sigue estos ejercicios para mejorar tu juego en ajedrez.",
      image: "/pion.jpeg",
    },
  ]

  return (
    <section className="py-8 px-4" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {items.map((item) => (
            <div key={item.id} className="px-2">
              <div className="p-6 rounded-lg shadow-lg text-center" style={{ backgroundColor: "#dcdcdc" }}>
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={500}
                  height={400}
                  className="w-full h-64 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-4" style={{ color: "#2d2d2d" }}>
                  {item.title}
                </h3>
                <p className="text-base mt-2" style={{ color: "#4d4d4d" }}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}

export default CarouselSection

