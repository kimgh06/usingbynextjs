"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  console.log(router)
  const pathname = usePathname();
  return <nav>
    <Link href="/" className="a" legacyBehavior>
      <span className={pathname === '/' ? "active" : ""} >
        HOME
      </span>
    </Link>
    <Link href="/hello" legacyBehavior >
      <span className={pathname === '/hello' ? "active" : ""}>
        hello
      </span>
    </Link>
    <style jsx>
      {`
        a {
          text-decoration: none;
        }
        span{
          cursor: pointer;
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