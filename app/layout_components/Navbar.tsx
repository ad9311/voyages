import Image from 'next/image';
import Link from 'next/link';
import { Pacifico } from 'next/font/google';

const pacifico = Pacifico({ subsets: ['latin-ext'], weight: '400' });

function Navbar() {
  return (
    <div className="bg-neutral-50 border-2 border-b-orange-100">
      <div className="my-3 flex items-center mx-auto container px-2 sm:px-0">
        <Image className="w-12 mr-2" src="/voyages.svg" width={10} height={10} alt="voyages_icon" />
        <Link href="/">
          <h1
            className={`text-2xl text-primary-dark hover:text-primary font-bold ${pacifico.className}`}>
            VOYAGES
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
