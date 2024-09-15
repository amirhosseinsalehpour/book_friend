"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLinks() {
  const pathname = usePathname();

  const linkClasses = (path) =>
    `relative px-4 py-2 transition-all duration-300 rounded-lg font-semibold ${
      pathname === path
        ? "bg-blue-100 text-blue-700 shadow-md"
        : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
    }`;

  return (
    <nav className="flex gap-8">
      <Link href="/" className={linkClasses("/")}>
        صفحه اصلی
      </Link>
      <Link href="/search" className={linkClasses("/search")}>
        جست و جو
      </Link>
      <Link href="/shelf" className={linkClasses("/shelf")}>
        قفسه من
      </Link>
    </nav>
  );
}

export default NavLinks;
