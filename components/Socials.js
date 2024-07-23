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
    <Link href={'https://web.whatsapp.com/3146200770'} className="hover:text-accent transition-all duration-300">
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
