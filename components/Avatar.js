// next image
import Image from "next/image";

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image 
    src='/david.png'
    alt="avatar"
    width={504}
    height={896}
    className="translate-z-0 w-full h-full transform hover:scale-105 transition-transform duration-500 ease-in-out mt-8 bg-opacity-50 rounded-2xl"
    />
  </div>;
};

export default Avatar;
