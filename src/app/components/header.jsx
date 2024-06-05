import Link from 'next/link';
import Image from 'next/image';


const Header = () => (
  <header className="p-10 flex h-16 w-full items-center justify-between bg-white px-6 shadow-sm">
    <Link href="#" className="flex items-center gap-2" prefetch={false}>
      <Image src="/images/nfac.avif" alt="Logo" width={50} height={50} className="h-12 w-12" />
      <span className="text-lg font-medium text-gray-800">Nfactorial School</span>
    </Link>
    <nav className="flex items-center gap-6">
      <Link href="#" className="font-medium text-gray-800 hover:text-gray-600 text-xl" prefetch={false}>
        Главная
      </Link>
      <Link href="#" className="font-medium text-red-800 hover:text-gray-600 text-xl" prefetch={false}>
        Incubator
      </Link>
      <Link href="#" className="font-medium text-gray-800  hover:text-gray-600 text-xl" prefetch={false}>
        О нас
      </Link>
      <Link href="" className="font-medium text-gray-800 hover:text-gray-600 text-xl" prefetch={false}>
        Блог
      </Link>
    </nav>
    
  </header>
);

export default Header;