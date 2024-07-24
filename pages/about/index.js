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
        title: 'Web Development',
        icons: [
          <FaHtml5 key={FaHtml5} />,
          <FaCss3 key={FaCss3} />,
          <FaJs key={FaJs} />,
          <SiTypescript key={SiTypescript} />,
          <FaReact key={FaReact} />,
          <SiVite key={SiVite} />,
          <SiNextdotjs key={SiNextdotjs} />,
          <FaAngular key={FaAngular} />,
          <SiAstro key={SiAstro} />,
          <SiFramer key={SiFramer} />,
          <FaBootstrap key={FaBootstrap} />,
          <SiTailwindcss key={SiTailwindcss} />,
          <SiRedux key={SiRedux} />,
          <SiAxios key={SiAxios} />,
        ],
      },
      {
        title: 'Backend Development',
        icons: [
        <FaNodeJs key={FaNodeJs} />,
        <SiNestjs key={SiNestjs} />,
        <SiExpress key={SiExpress} />,
        <SiSequelize key={SiSequelize} />,
        <SiPostman key={SiPostman} />,
        <SiPowershell key={SiPowershell} />,
        <SiJsonwebtokens key={SiJsonwebtokens} />,
        <SiNodemon key={SiNodemon} />
        ],
      },
      {
        title: 'Database Management',
        icons: [ 
        <SiMysql key={SiMysql} />, 
        <SiPostgresql key={SiPostgresql} />, 
        <SiMongodb key={SiMongodb} />,
        <SiFirebase key={SiFirebase} />,
        <SiSupabase key={SiSupabase} />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
        <FaFigma key={FaFigma} />,
        <SiCanva key={SiCanva} />,
        <SiAdobephotoshop key={SiAdobephotoshop} />
        ],
      },
      {
        title: 'Other tools',
        icons: [
        <FaGitAlt key={FaGitAlt} />, 
        <FaGithub key={FaGithub} />, 
        <SiVisualstudio key={SiVisualstudio } />, 
        <SiCplusplus key={SiCplusplus} />,
        <SiCsharp key={SiCsharp} />, 
        <FaPhp key={FaPhp} />,
        <FaPython key={FaPython} />,
        <FaDocker key={FaDocker} />,
        <SiVercel key={SiVercel} />,
        <SiNotion key={SiNotion} />,
        <FaNpm key={FaNpm} />,
        <SiWebpack key={SiWebpack} />,
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
        title: ' Bachelors Degree in Systems and Computing Engineering - Universidad Tecnológica de Pereira (2023 - Present) ',
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

  return <div className=" h-full md:h-screen bg-primary/30 py-32 text-center xl:text-left"> 
    
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

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

        {/* text */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h2 
          variants={fadeIn('right', 0.2)} 
          initial='hidden' 
          animate='show' 
          exit='hidden'  className="h2"
        >
          Great solutions with wonderful <span className="text-accent">designs.</span> 
        </motion.h2>
        <motion.p 
          variants={fadeIn('right', 0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"  
          className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 md:text-lg lg:text-xl "
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
        className="flex flex-col w-full xl:max-w-[48%] h-full md:h-[540px] overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-transparent xl:overflow-y-visible"
      >

        {/* selector */}
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 justify-center">
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
        <div className="py-4 xl:py-8 flex flex-col gap-y-4 xl:gap-y-6 items-center xl:items-start min-h-screen overflow-y-auto  px-4 xl:px-0">
          
            {aboutData[index]?.info.map((item, itemIndex) => (
              <div 
                key={itemIndex} 
                className="flex flex-col justify-center items-center xl:items-start gap-y-4 text-white/60 w-full"
              >
                {/* Título */}
                <div className="font-medium text-lg text-center xl:text-left">{item.title}</div>
                
                {/* Leyenda */}
                <div className="text-gray-400 text-center xl:text-left">{item.stage}</div>
                
                {/* Iconos */}
                <div className="flex gap-x-2 justify-center xl:justify-start">
                  {item.icons?.map((icon, iconIndex) => (
                    <div 
                      key={iconIndex}
                      className="text-3xl  text-white"
                    >
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          
        </div>

      </motion.div>

    </div>
  </div>;
};

export default About;
