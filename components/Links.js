import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Links = () => {
  return (
    <>
      <div className="flex space-x-3 mb-6">
        <Link
          href="https://www.instagram.com/because.frank/"
          alt="Instagram Logo"
        >
          <a target="_blank" rel="noreferrer" className="hover:text-accent">
            <FaInstagram size={42} />
          </a>
        </Link>
        <Link href="https://www.facebook.com/because.frank" alt="Facebook Logo">
          <a target="_blank" rel="noreferrer" className="hover:text-accent">
            <FaFacebook size={42} />
          </a>
        </Link>
        <Link
          href="https://www.linkedin.com/in/burkesamuel/"
          alt="LinkedIn Logo"
        >
          <a target="_blank" rel="noreferrer" className="hover:text-accent">
            <FaLinkedin size={42} />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Links;
