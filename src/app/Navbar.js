"use client";
import "../app/styles.scss";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return <nav>
    <img src="/vercel.svg" />
    <div>
      <Link href="/" className="a" >
        <span className={pathname === '/' ? "active" : ""} >
          HOME
        </span>
      </Link>
      <Link href="/hello"  >
        <span className={pathname === '/hello' ? "active" : ""}>
          hello
        </span>
      </Link>
    </div>
  </nav>;
}

export default Navbar;