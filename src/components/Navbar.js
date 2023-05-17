"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return <nav>
    <Link href="/">
      <span className={pathname === '/' ? "active" : ""} >
        HOME
      </span>
    </Link>
    <Link href="/hello">
      <span className={pathname === '/hello' ? "active" : ""} >
        hello
      </span>
    </Link>
    <style jsx>
      {`
        a {
          text-decoration: none;
        }
        nav {
          background-color: tomato;
        }
        .active{
          color: white;
        }
      `}
    </style>
  </nav>;
}

export default Navbar;