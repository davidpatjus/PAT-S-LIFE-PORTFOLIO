// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'PlexoApp',
          path: '/plexo.jpg',
          link: 'https://plexoshop.vercel.app/'
        },
        {
          title: 'ACME',
          path: '/acme.jpg',
          link: 'https://acme-nextjs-indol.vercel.app/'
        },
        {
          title: 'DigginTheMovies',
          path: '/DigginTheMovies.jpg',
          link: 'https://patsdigginthemovies.netlify.app/'
        },
        {
          title: 'NewsApp',
          path: '/NewsApp.jpg',
          link: 'https://patsnewsapp.netlify.app/'
        },
      ],
    },
    {
      images: [
        {
          title: 'MigradoLibre',
          path: '/MigradoLibre.jpg',
          link: 'https://patsmigradolibretest.netlify.app/'
        },
        {
          title: 'RickAndMortyApp',
          path: '/RickAndMortyApp.jpg',
          link: 'https://patsrickandmortyapi.netlify.app/'
        },
        {
          title: 'Restaurancy',
          path: '/Restaurancy.jpg',
          link: 'https://github.com/davidpatjus/Restaurancy-Next'
        },
        {
          title: 'More Projects',
          path: '/github.jpg',
          link: 'https://github.com/davidpatjus'
        },
      ],
    },
  ],
};

// icons
import {
  BsArrowRight,
} from "react-icons/bs";

//next image
import Image from "next/image";

//import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

//import swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

//import swiper core and required modules
import { Pagination } from 'swiper';

const WorkSlider = () => {
  return (
    <Swiper 
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[ Pagination]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlides.slides.map((slide,index) => {
          return (
            <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return ( 
                  <div key={index} className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                    <div className="flex items-center justify-center relative overflow-hidden group">

                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />

                      {/* link */}
                      {image.link && (
                        <a 
                          href={image.link}
                          target="_blank"
                          rel="noreferrer"
                          className="absolute inset-0 z-10"
                        ></a>
                      )}

                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">

                          {/* title part 1 */}
                          <div className="delay-100">
                            LIVE
                          </div>

                          {/* title part 2 */}
                          <div 
                            className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
                          >
                            {image.title}
                          </div>

                          {/* icon */}
                          <div className="text-2xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200 text-accent font-bold ">
                            <BsArrowRight />
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  );
};

export default WorkSlider;
