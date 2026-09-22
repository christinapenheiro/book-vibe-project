import Image from "next/image";
import Link from "next/link";



const Navbar = () => {
    
    return (
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start gap-2">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  aria-label="Menu"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            <Image src="/assets/book.ico" alt="" width={20} height={20}></Image>
            <p className="font-bold">Book Vibe</p>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="">Listed Books</Link>
              </li>
              <li>
                <Link href="">Pages to Read</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-2">
            <button className="btn btn-success bg-[#23BE0A]">
              <Link href="">Sign In </Link>
            </button>
            <button className="btn">
              <Link href="">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    );
}

export default Navbar;