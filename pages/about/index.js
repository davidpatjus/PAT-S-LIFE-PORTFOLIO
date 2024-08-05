import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaAngular,
  FaNodeJs,
  FaGitAlt,
  FaPhp,
  FaGithub,
  FaBootstrap,
  FaDocker,
  FaNpm,
  FaPython, 
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobephotoshop,
  SiCplusplus,
  SiTypescript,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiVisualstudio,
  SiAstro,
  SiTailwindcss,
  SiCsharp,
  SiFirebase,
  SiMongodb,
  SiNestjs,
  SiNotion,
  SiPostman,
  SiPowershell,
  SiRedux,
  SiSupabase,
  SiSequelize,
  SiVercel,
  SiVite,
  SiWebpack,
  SiCanva,
  SiJsonwebtokens,
  SiAxios,
  SiNodemon,
} from "react-icons/si";

// framer motion 
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// counter
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: 'Skills',
    info: [
      {
        title: 'Frontend Development',
        icons: [
          { component: <FaHtml5 key={FaHtml5} />, name: 'HTML5' },
          { component: <FaCss3 key={FaCss3} />, name: 'CSS3' },
          { component: <FaJs key={FaJs} />, name: 'JavaScript' },
          { component: <SiTypescript key={SiTypescript} />, name: 'TypeScript' },
          { component: <FaReact key={FaReact} />, name: 'React' },
          { component: <SiVite key={SiVite} />, name: 'Vite' },
          { component: <SiNextdotjs key={SiNextdotjs} />, name: 'Next.js' },
          { component: <FaAngular key={FaAngular} />, name: 'Angular' },
          { component: <SiAstro key={SiAstro} />, name: 'Astro' },
          { component: <SiFramer key={SiFramer} />, name: 'Framer Motion' },
          { component: <FaBootstrap key={FaBootstrap} />, name: 'Bootstrap' },
          { component: <SiTailwindcss key={SiTailwindcss} />, name: 'Tailwind CSS' },
          { component: <SiRedux key={SiRedux} />, name: 'Redux' },
          { component: <SiAxios key={SiAxios} />, name: 'Axios' },
        ],
      },
      {
        title: 'Backend Development',
        icons: [
          { component: <FaNodeJs key={FaNodeJs} />, name: 'Node.js' },
          { component: <SiNestjs key={SiNestjs} />, name: 'Nest.js' },
          { component: <SiExpress key={SiExpress} />, name: 'Express.js' },
          { component: <SiSequelize key={SiSequelize} />, name: 'Sequelize' },
          { component: <SiPostman key={SiPostman} />, name: 'Postman' },
          { component: <SiPowershell key={SiPowershell} />, name: 'PowerShell' },
          { component: <SiJsonwebtokens key={SiJsonwebtokens} />, name: 'JWT' },
          { component: <SiNodemon key={SiNodemon} />, name: 'Nodemon' },
        ],
      },
      {
        title: 'Database Management',
        icons: [
          { component: <SiMysql key={SiMysql} />, name: 'MySQL' },
          { component: <SiPostgresql key={SiPostgresql} />, name: 'PostgreSQL' },
          { component: <SiMongodb key={SiMongodb} />, name: 'MongoDB' },
          { component: <SiFirebase key={SiFirebase} />, name: 'Firebase' },
          { component: <SiSupabase key={SiSupabase} />, name: 'Supabase' },
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
          { component: <FaFigma key={FaFigma} />, name: 'Figma' },
          { component: <SiCanva key={SiCanva} />, name: 'Canva' },
          { component: <SiAdobephotoshop key={SiAdobephotoshop} />, name: 'Adobe Photoshop' },
        ],
      },
      {
        title: 'Other tools',
        icons: [
          { component: <FaGitAlt key={FaGitAlt} />, name: 'Git' },
          { component: <FaGithub key={FaGithub} />, name: 'GitHub' },
          { component: <SiVisualstudio key={SiVisualstudio} />, name: 'Visual Studio' },
          { component: <SiCplusplus key={SiCplusplus} />, name: 'C++' },
          { component: <SiCsharp key={SiCsharp} />, name: 'C#' },
          { component: <FaPhp key={FaPhp} />, name: 'PHP' },
          { component: <FaPython key={FaPython} />, name: 'Python' },
          { component: <FaDocker key={FaDocker} />, name: 'Docker' },
          { component: <SiVercel key={SiVercel} />, name: 'Vercel' },
          { component: <SiNotion key={SiNotion} />, name: 'Notion' },
          { component: <FaNpm key={FaNpm} />, name: 'NPM' },
          { component: <SiWebpack key={SiWebpack} />, name: 'Webpack' },
        ],
      },
    ],
  },
  {
    title: 'Studies',
    info: [
      {
        title: ' High School - Jose Antonio Galan (2016 - 2022)',
        stage: 'I completed high school with a focus on foundational sciences and mathematics, laying the groundwork for a career in technology.',
      },
      {
        title: ' Systems and Computing Engineering - Universidad Tecnológica de Pereira (2023 - Present) ',
        stage: 'Currently pursuing a degree that covers various aspects of computing, programming, and systems engineering.',
      },
      {
        title: ' III Coding Bootcamp FullStack - UTP (2024)',
        stage: 'Gained practical experience in fullstack development, focusing on modern web technologies and best practices.',
      },
      {
        title: ' IV Coding Bootcamp FullStack - UTP (2024)',
        stage: 'Continued to build on fullstack development skills, working on advanced projects and collaborative tasks.',
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return <div className=" h-[80%] md:h-screen bg-primary/30 py-30 xs:mt-24 xl:mt-0 text-center xl:text-left overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent xl:overflow-y-visible"> 
    
    <Circles />
    
      {/* avatar */}
      <motion.div 
        variants={fadeIn('right', 0.2)} 
        initial='hidden' 
        animate='show' 
        exit='hidden' 
        className="hidden xl:flex absolute bottom-[-60px] -left-[210px] "
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 px-4">

        {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn('right', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'  
          className="h2 text-2xl sm:text-2xl md:text-3xl lg:text-5xl font-bold"
        >
          Great solutions with wonderful <span className="text-accent">designs.</span> 
        </motion.h2>
        <motion.p 
          variants={fadeIn('right', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"  
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-base xs:text-sm sm:text-base md:text-lg "
        >
          I am a dedicated, committed, self-sufficient, self-demanding and enthusiastic junior Full-Stack developer from Pereira, Colombia. I am currently studying Systems and Computer Engineering at the Technological University of Pereira, since I was a child I have a deep passion for creating innovative digital solutions that bridge the gap between technology and user experience.
        </motion.p> 

      {/* counters 
      <motion.div 
          variants={fadeIn('right', 0.6)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'  
          className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
        >
          <div className="flex flex-1 xl:gap-x-6">

             experience 
            <div 
              className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
            >
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={10} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Years of experience
              </div>
            </div>

             clients 
            <div 
              className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
            >
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={250} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Satisfied clients 
              </div>
            </div>

             projects
            <div 
              className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0"
            >
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={650} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Finished projects
              </div>
            </div>

             awards 
            <div 
              className="relative flex-1 "
            >
              <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                <CountUp start={0} end={8} duration={5} />+
              </div>
              <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                Winning awards
              </div>
            </div>
            
          </div>
        </motion.div >
        */}

      </div>

      {/* about info */}
      <motion.div 
        variants={fadeIn('left', 0.4)} 
        initial='hidden' 
        animate='show' 
        exit='hidden'  
        className="flex flex-col w-full xl:max-w-[52%] h-max md:h-[610px] px-4 sm:px-6"
      >

        {/* selector */}
        <div className="flex gap-x-4 sm:gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-center">
          {aboutData.map((item, itemIndex) => (
            <div 
              key={itemIndex} 
              className={`${
                index === itemIndex ? 'text-accent after:w-[100%] after:bg-accent after: transition-all after:duration-300' : 'text-gray-500'
              } 
                cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-accent after:absolute after:bottom-0 after:left-0`}
              onClick={() => setIndex(itemIndex)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* info */}
        <div className="py-4 sm:py-6 xl:py-8 flex flex-col gap-y-4 sm:gap-y-6 xl:gap-y-8 items-center xl:items-start min-h-screen px-4 sm:px-6 xl:px-8">
          
            {aboutData[index]?.info.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className="flex flex-col justify-center items-center xl:items-start gap-y-4 w-full"
              >
                {/* Título */}
                <div className=" font-medium text-lg text-center xl:text-left text-accent">{item.title}</div>
                
                {/* Leyenda */}
                <div className="text-gray-400 text-sm sm:text-base text-center xl:text-left">{item.stage}</div>
                
                {/* Iconos */}
                <div className="flex flex-wrap gap-3 justify-center">
                  {item.icons?.map((icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="relative text-xl sm:text-2xl md:text-3xl text-white flex-shrink-0"
                      onMouseEnter={() => setHoveredIcon(icon.name)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      {icon.component}
                      {hoveredIcon === icon.name && (
                        <div className="absolute bottom-full mb-2 w-max px-2 py-1 bg-accent text-black text-sm rounded">
                          {icon.name}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
          <br />
          <br />
          <br />
        </motion.div>

    </div>
  </div>;
};

export default About;
