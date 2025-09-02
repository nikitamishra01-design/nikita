
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const data = [
  { id: 1, name: "Matte Liquid Lipstick", price: 499, image: "/assets/lipstic.jpg", desc: "Long-lasting matte finish lipstick with a smooth texture." }, 
  { id: 2, name: "Hydrating Face Cream", price: 899, image: "/assets/facecram.avif", desc: "Deeply nourishes and moisturizes dry skin with aloe vera." },
  { id: 3, name: "Waterproof Eyeliner", price: 299, image: "/assets/eyeliner.png", desc: "Smudge-proof and waterproof liner for bold eyes all day." },
  { id: 4, name: "Floral Perfume Spray", price: 1199, image: "/assets/perfume.webp", desc: "Elegant floral fragrance that lasts 12+ hours." },
];

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 640,  settings: { slidesToShow: 1, slidesToScroll: 1 } }, // Mobile
    ]
  };

  return (
    <div className='min-h-screen bg-slate-600 pt-10 flex items-center'>
      <div className='w-full max-w-5xl mx-auto px-4'>
        <Slider {...settings}>
          {data.map((item) => (
            <div key={item.id} className='bg-white rounded-lg shadow-lg flex justify-center'>
              <div className='w-full p-2 flex flex-col items-center h-[360px] justify-between'>
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className='w-full h-50 object-contain mt-5' 
                />
                <p className='font-semibold text-center text-white bg-blue-600 w-full p-1 rounded mb-3'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default App;
