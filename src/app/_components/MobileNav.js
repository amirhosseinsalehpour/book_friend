"use client";
import Link from "next/link";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { GiBookshelf } from "react-icons/gi";

import { usePathname } from "next/navigation";
import Image from "next/image";

function MobileNav() {
  const pathname = usePathname();

  const linkClasses = (path) =>
    `flex flex-col items-center text-sm ${
      pathname === path ? "text-blue-500" : "text-gray-700 hover:text-blue-500"
    }`;

  return (
    <>
      <header className="bg-white shadow-md static top-0 left-0 right-0 md:hidden flex justify-between items-center py-3 px-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/02.webp"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-xl"
          />
        </Link>

        <Link href="/" className="text-sm text-blue-600 font-semibold">
          ورود به حساب کاربری
        </Link>
      </header>

      <footer className="bg-white shadow-md fixed bottom-0 left-0 right-0 md:hidden flex justify-between items-center py-3 px-10">
        <Link href="/" className={linkClasses("/")}>
          <AiOutlineHome size={24} />
          <span>خانه</span>
        </Link>
        <Link href="/search" className={linkClasses("/search")}>
          <AiOutlineSearch size={24} />
          <span>جست و جو</span>
        </Link>
        <Link href="/shelf" className={linkClasses("/shelf")}>
          <GiBookshelf size={24} />
          <span>قفسه من</span>
        </Link>
      </footer>
    </>
  );
}

export default MobileNav;
