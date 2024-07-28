// next link
import Link from "next/link";

// icons
import {
  RiWhatsappLine,
  RiInstagramLine,
  RiFacebookLine, 
  RiGithubLine, 
  RiLinkedinLine, 
  RiSpotifyLine
} from "react-icons/ri";

const Socials = () => {
  return (
   <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20'} className="hover:text-accent transition-all duration-300">
      <RiWhatsappLine />
    </Link>
    <Link href={'https://www.facebook.com/david.patino.10004694/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine />
    </Link>
    <Link href={'https://www.instagram.com/david.juspian/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine />
    </Link>
    <Link href={'https://github.com/davidpatjus'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine />
    </Link>
    <Link href={'https://www.linkedin.com/in/david-esteban-patino-juspian-561861317/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine />
    </Link>
    <Link href={'https://open.spotify.com/user/jzjpy60rijoe4dpti9lg1js4s?si=d12690b087614e20&nd=1&dlsi=b27d3d7acc064629'} className="hover:text-accent transition-all duration-300">
      <RiSpotifyLine />
    </Link>
  </div>
  );
};

export default Socials;
