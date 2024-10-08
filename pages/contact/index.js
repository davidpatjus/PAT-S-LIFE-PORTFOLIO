//components
import Circles from "../../components/Circles";

// icons
import { BsArrowRight } from "react-icons/bs";

// framer motion
import { motion } from "framer-motion";

// variants
import { fadeIn } from "../../variants";

const Contact = () => {
  return ( 
  <div className="h-full bg-primary/30">
    <div className="container mx-auto xs:py-24 lg:py-32 text-center xl:text-left flex items-center justify-center h-max">

      {/* text & form */}
      <div className="flex flex-col w-full max-w-[700px]">

        {/* text */}
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden" 
          className="h2 text-center xs:mb-4 lg:mb-12"
        >
          Let&rsquo;s <span className="text-accent">connect.</span>
        </motion.h2>

        {/* form */}
        <motion.form
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"  
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
        >

          {/* input group */}
          <div className="flex gap-x-6 w-full">
            <input type="text" placeholder="name" className="input" required />
            <input type="email" placeholder="email" className="input" required />
          </div>
            <input type="text" placeholder="subject" className="input" required />
            <textarea placeholder="message" className="textarea"></textarea>
            <div className="flex gap-x-4">
            <button className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">let&apos;s talk</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </button>
            <a href="https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
              <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">WhatsApp</span>
              <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
            </a>
            </div>
        </motion.form>
      </div>

    </div>
  </div>
  )
};

export default Contact;
