import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="pt-10 md:pt-5 font-primary text-secondary text-2xl md:text-4xl bg-primary">
        <nav className="container flex flex-wrap items-center">
          <Link href="/" passHref>
            <img
              src="/Images/BF_Logo_Secondary.png"
              alt="Because Frank Logo"
              width={150}
              height={150}
            />
          </Link>

          <button
            className="p-3 ml-auto inline-flex lg:hidden text-secondary hover:text-accent rounded outline-none"
            onClick={handleClick}
            name="Navigation Button"
          >
            {!active ? <FaBars size={32} /> : <FaTimes size={32} />}
          </button>

          <div
            className={`${
              active ? "" : "hidden"
            } w-full lg:inline-flex lg:flex-grow lg:w-auto items-center text-center`}
          >
            <div className="flex flex-col lg:flex-row lg:ml-auto lg:w-auto lg:align-start lg:h-auto lg:space-x-5 w-full items-center justify-center">
              <Link href="/about">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center rounded hover:text-accent">
                  Who is Frank?
                </a>
              </Link>

              <Link href="/services">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 items-center justify-center rounded hover:text-accent">
                  What We Do
                </a>
              </Link>

              <Link href="/contact">
                <a className="lg:inline-flex lg:w-auto w-full px-10 py-3 items-center justify-center text-primary bg-secondary hover:bg-accent hover:text-white">
                  KNOCK, KNOCK
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
