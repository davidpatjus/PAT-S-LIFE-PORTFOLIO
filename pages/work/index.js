// components
import WorkSlider from "../../components/WorkSlider";
import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from '../../variants'

const Work = () => {
  return (
  <div className="h-full bg-primary/30 py-36 flex items-center ">
    <Circles />
    <div className="container mx-auto mt-32">
      <div className="flex flex-col xl:flex-row gap-x-8 ">

        {/* text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 translate-y-2">

          <motion.h2
            variants={fadeIn('up', 0.2)}
            initial='hidden'
            animate='show'
            exit='hidden' 
            className="h2 xl:mt-12 xs:mt-12 lg:mt-0 md:text-4xl"
          >
          My Projects <span className="text-accent">.</span>
          </motion.h2>

          <motion.p
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'            
            className="mb-4 max-w-[400px] mx-auto lg:mx-0 xs:text-sm md:text-base lg:text-base"
          >
            Discover a selection of my projects that showcase my skills in web development, design, and more. Each project highlights my ability to deliver innovative, high-quality solutions tailored to meet diverse needs. Dive in to see how I bring ideas to life and create impactful digital experiences.          </motion.p>

        </div>

        {/* slider */}
        <motion.div 
          variants={fadeIn('down', 0.6)}
          initial='hidden'
          animate='show'
          exit='hidden' 
          className="w-full sm:max-w-full md:ml-[15%] md:max-w-[70%] lg:w-[60%] xl:ml-0 xl:max-w-[65%]"
        >

        <WorkSlider />

        </motion.div>

      </div>
    </div>
    <Bulb />
  </div>
  );
};

export default Work;
