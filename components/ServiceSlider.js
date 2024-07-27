//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import swiper core and required modules
import { FreeMode, Pagination } from 'swiper';

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'I create a strong brand identity that stands out. I develop cohesive strategies to make your brand influential, powerful and effective.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Awesome visuals and intuitive interfaces that engage users and drive conversions. I design with beauty, modern and functionality in mind.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'I build high-quality, scalable digital solutions. From websites to custom software, I use the latest technologies to deliver impactful results.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Engaging content that communicates your message clearly. I craft persuasive copy to capture attention and drive action.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Boost your search rankings and organic traffic. I implement effective SEO strategies to enhance visibility and attract more customers.',
  },
];


const ServiceSlider = () => {
  return (
    <Swiper 
      breakpoints={{

        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },

        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },

      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {
        serviceData.map((item,index) => {
          return (
            <SwiperSlide key={index}>
              <div className='bg-[rgba(65,47,123,0.15)] h-full rounded-lg px-6 py-4 flex sm:flex-col gap-x-4 sm:gap-x-8 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
                {/* icons */}
                <div className='text-4xl text-accent mb-4'>{item.icon}</div>
                {/* title & desc */}
                <div className='mb-8'>
                  <div className='mb-2 text-lg'>{item.title}</div>
                  <p className='max-w-[350px] leading-normal text-sm md:text-lg xl:text-base'>{item.description}</p>
                </div>
                {/* arrow */}
                <div className='text-3xl'>
                  <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default ServiceSlider;
