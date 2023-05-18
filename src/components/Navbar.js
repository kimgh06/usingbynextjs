"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  return <nav>
    <img src="/vercel.svg" />
    <div>
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
    </div>
    <style jsx>{`nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
  </nav>;
}

export default Navbar;