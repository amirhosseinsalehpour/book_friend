import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <>
      <header className="bg-white shadow-md hidden md:flex justify-between items-center py-5 px-6">
        <Link href="/" className="flex items-center gap-4 justify-center py-5">
          <Image
            src="/Vector.png"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-xl"
          />
          <span className="text-2xl font-extrabold ml-2 text-gray-800">
            کتاب یار
          </span>
        </Link>
        <NavLinks />
        <Link
          href="/"
          className="text-sm text-white p-3 rounded-2xl bg-[#069F9F] font-semibold"
        >
          ورود به حساب کاربری
        </Link>
      </header>

      <MobileNav />
    </>
  );
}

export default Header;
