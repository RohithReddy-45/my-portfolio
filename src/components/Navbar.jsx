import { useState } from 'react';
import { useEffect } from 'react';
import { HiMiniBars3, HiXMark } from 'react-icons/hi2';

import { useScrollTop } from '../hooks/useScrollTop';
import NavLinks from './NavLinks';
import { cn } from '../lib/utils';

function Navbar() {
  const [nav, setNav] = useState(false);
  const scrolled = useScrollTop();

  const handleNav = () => {
    setNav(() => !nav);
  };

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 768 && setNav(false),
    );
  }, []);

  return (
    <nav
      className={cn(
        'sticky top-0 z-10 block h-max w-full max-w-full rounded-none bg-white bg-opacity-80 px-6 py-4 md:px-16',
        scrolled &&
          'border-b border-white/80 shadow-sm backdrop-blur-2xl backdrop-saturate-200',
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="font-roboto-slab text-2xl">
            SRR
          </a>

          <div className="flex items-center gap-4">
            <div className="mr-4 hidden gap-6 md:flex">
              <NavLinks className="flex items-center gap-6" />
            </div>
          </div>
          <div className="block md:hidden">
            {nav ? (
              <HiXMark
                size={30}
                onClick={handleNav}
                className="cursor-pointer"
              />
            ) : (
              <HiMiniBars3
                size={30}
                onClick={handleNav}
                className="cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div
        className="flex w-full basis-full flex-col items-center justify-center gap-4 overflow-hidden text-center transition-all duration-500 ease-in-out md:hidden"
        style={{ height: nav ? '350px' : '0', opacity: nav ? '1' : '0' }}
      >
        <NavLinks className="flex flex-col gap-4 " onClick={handleNav} />
      </div>
    </nav>
  );
}

export default Navbar;
