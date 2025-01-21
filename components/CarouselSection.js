import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

function CarouselSection() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
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
      };
    

  const items = [
    {
      id: 1,
      title: 'Turntable',
      description: 'A classic way to play vinyl records.',
      image: '/pion.jpeg',
    },
    {
      id: 2,
      title: 'Vintage Radio',
      description: 'Tune in to your favorite stations.',
      image: '/pion.jpeg',
    },
    {
      id: 3,
      title: 'Boombox',
      description: 'Play your favorite mixtapes.',
      image: '/pion.jpeg',
    },
    {
      id: 4,
      title: 'Vintage Radio',
      description: 'Tune in to your favorite stations.',
      image: '/pion.jpeg',
    },
    {
      id: 5,
      title: 'Boombox',
      description: 'Play your favorite mixtapes.',
      image: '/pion.jpeg',
    },
  ];

  return (
    <section className="py-8 bg-teal-200">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <Image
                src={item.image}
                alt={item.title}
                width={500}  // Cambia el ancho según sea necesario
                height={400} // Cambia la altura según sea necesario
                className="w-32 h-32 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default CarouselSection;