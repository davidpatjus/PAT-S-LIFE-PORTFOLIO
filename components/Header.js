// next image
import Image from "next/image";

// next link
import Link from "next/link";

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-4 sm:px-8 lg:px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-y-6 py-4 lg:py-8">
          {/* logo */}
          <Link href={'/'}>
            <Image 
              src={'/logo.png'}
              width={220}
              height={48}
              alt="logo"
              priority={true}
              className="w-40 lg:w-56" // Ajustar el tamaño del logo
            />
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
