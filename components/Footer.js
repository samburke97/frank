import Link from "next/link";
import Links from "../components/Links";

const Footer = () => {
  return (
    <>
      <div className="bg-primary font-primary text-secondary text-xl md:text-3xl py-3">
        <div className="container flex flex-col lg:flex-row flex-wrap justify-between items-center">
          <Link href="/">
            <img
              src="/Images/BF_Logo_Secondary.png"
              alt="Because Frank Logo"
              width={150}
              height={150}
              className="md:justify-center"
            />
          </Link>
          <div className="flex justify-between space-x-6 mb-6">
            <Link href="/about">
              <a className="hover:text-accent">Who is Frank?</a>
            </Link>
            <Link href="/services">
              <a className="hover:text-accent">What we do</a>
            </Link>
            <Link href="/contact">
              <a className="hover:text-accent">Knock, Knock</a>
            </Link>
          </div>
          <Links />
        </div>
      </div>
    </>
  );
};

export default Footer;
