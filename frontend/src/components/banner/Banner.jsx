import {
  Navigation,
  Pagination,
  A11y,
  Autoplay,
  EffectFade,
} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoChevronBackSharp, IoChevronForwardSharp } from 'react-icons/io5';
import clsx from 'clsx';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './customSwiper.css';

const Banner = () => {
  const slides = [
    {
      title: 'GreenEats Delivery',
      subtitle:
        '¡Tu conexión con la comida saludable y sostenible directamente en tu hogar!',
      text: 'Diseñada para satisfacer tus deseos de una alimentación consciente sin comprometer el sabor ni la comodidad. Déjanos guiarte a través de un mundo de opciones frescas y nutritivas.',
      img: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752160/fitnessMatket/fut_banner35_lvboks.jpg',
      backgroundColor: 'bg-primary-600',
    },
    {
      title: '¡Explora nuestro menú saludable!',
      subtitle:
        'Sumérgete en un paraíso de opciones que te nutrirán y energizarán.',
      text: 'Desde platos vegetarianos exquisitos hasta creaciones veganas llenas de sabor, nuestra variedad es un reflejo de la naturaleza misma.',
      img: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752158/fitnessMatket/fut_banner15_qidan5.jpg',
      backgroundColor: 'bg-[#203a0b]',
    },
    {
      title: '¡Tu comida, tu elección!',
      subtitle:
        'Personaliza tu pedido para que se adapte perfectamente a tus gustos y necesidades.',
      text: `¿Tienes restricciones alimentarias o preferencias específicas?\n No hay problema. Hacemos que tu comida sea tuya en todos los sentidos.`,
      img: 'https://res.cloudinary.com/dpiwmbsog/image/upload/v1692752156/fitnessMatket/fut_banner03_anbw3p.jpg',
      backgroundColor: 'bg-[#c23e1a]',
    },
  ];

  return (
    <section className="banner w-[100%] top-0 h-[100vh] flex justify-center items-center content-center">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        // navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 90000,
          disableOnInteraction: false,
        }}
        className="mySwiper w-screen h-[100%]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide className={slide.backgroundColor}>
            <div className="w-full h-full flex lg:flex-row lg:items-center text-white">
              <section className="w-full h-1/2 lg:w-1/2 lg:h-[100%] flex flex-col justify-center p-[1.5rem] lg:p-[4rem] gap-3 sm:gap-5 lg:gap-6">
                <h1
                  className={clsx(
                    'font-bold text-3xl lg:text-5xl font-title',
                    index > 0 ? 'text-white' : 'text-secondary'
                  )}
                >
                  {slide.title}
                </h1>
                <h3 className="font-bold text-base lg:text-xl">
                  {slide.subtitle}
                </h3>
                <p className="font-normal text-sm lg:text-lg">{slide.text}</p>
              </section>
              <section className="bgImage w-full h-1/2 lg:w-1/2 lg:h-full">
                <img className="w-full h-full object-cover" src={slide.img} />
              </section>
            </div>
          </SwiperSlide>
        ))}
        ...
        <button className="swiper-button-next !bg-white hover:!bg-primary rounded-md m-4">
          <IoChevronForwardSharp />
        </button>
        <button className="swiper-button-prev !bg-white hover:!bg-primary rounded-md m-4">
          <IoChevronBackSharp />
        </button>
      </Swiper>
    </section>
  );
};

export default Banner;
