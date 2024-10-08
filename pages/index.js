// next image
import Image from "next/image";

// components
import ParticleContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../variants";

const Home = () => {
  return <div className="bg-primary/60 h-full">

    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10 ">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto ">
    
        {/* title */}
        <motion.h1 
          variants={fadeIn('down', 0.2)} 
          initial='hidden' 
          animate='show'
          exit='hidden'
          className="h1 xs:mt-20 md:mt-6">
          Transforming Ideas 
          <br />
          Into {" "} 
          <span className="text-accent">Digital Reality</span>
        </motion.h1>

        {/* subtitle */}
        <motion.p 
          variants={fadeIn('down', 0.3)} 
          initial='hidden' 
          animate='show'
          exit='hidden'
          className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 md:mb-12 xs:mt-0 md:mt-6 xs:text-sm md:text-base"    
        >
        Hi, I&apos;m David Patiño, a passionate full-stack developer dedicated to turning innovative ideas into powerful digital solutions. With a strong foundation in both frontend and backend development, I bring visions to life through clean, efficient code and captivating designs. Explore my projects to see how creativity meets technology, and let&apos;s transform your next big idea into reality together.        </motion.p>

        {/* Btn */}

        {/* <motion.div 
          variants={fadeIn('up', 0.4)} 
          initial='hidden' 
          animate='show'
          exit='hidden' 
          className="flex justify-center xl:hidden relative"
        >
          <ProjectsBtn />
        </motion.div> */}

        <motion.div 
          variants={fadeIn('down', 0.4)} 
          initial='hidden' 
          animate='show'
          exit='hidden'
          className="hidden xl:flex"
        >
          <ProjectsBtn />
        </motion.div>

      </div>
    </div>

    {/* image */}
    <div className="w-[1200px] h-full absolute right-0 bottom-0">

      {/* bg img */}
      <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 opacity-80"></div>

      {/* particles */}
      <ParticleContainer />

      {/* avatar img */}
      <motion.div 
      className="w-full h-full max-w-[504px] max-h-[896px] absolute -bottom-32 lg:bottom-0 lg:right-[20%] top-12 drop-shadow-2xl hover:drop-shadow-xl shadow-accent "
      variants={fadeIn('up', 0.5)} 
      initial='hidden' 
      animate='show'
      exit='hidden'
      transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Avatar />
      </motion.div>

    </div>
  </div>;
};

export default Home;
