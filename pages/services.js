import { NextSeo } from "next-seo";
import Link from "next/link";
import { FaLaptopCode } from "react-icons/fa";
import { GoMegaphone } from "react-icons/go";

const Services = () => {
  return (
    <>
      <NextSeo
        title="Our Services"
        description="Copywriting, Content Creation, Social Media Management, Website Design & Development"
      />
      <div className="py-20 md:py-40 font-primary text-secondary text-5xl md:text-7xl bg-primary">
        <div className="container text-center">
          <h1 className="mb-10 md:mb-0">Choose your weapon</h1>
          <div className="flex flex-col lg:flex-row md:py-20 justify-center items-center mx-auto gap-10 text-xl md:text-3xl">
            <Link href="/website" passHREF>
              <a className="px-20 py-5 md:py-10 font-primary text-center text-primary bg-secondary hover:text-white hover:bg-accent">
                Website Design & Development
                <FaLaptopCode size={24} className="inline ml-2" />
              </a>
            </Link>
            <Link href="/content" passHREF>
              <a className="px-20 py-5 md:py-10 font-primary text-center text-primary bg-secondary hover:text-white hover:bg-accent">
                Content Creation & Copywriting
                <GoMegaphone size={24} className="inline ml-2" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
