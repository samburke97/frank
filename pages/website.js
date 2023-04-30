import { NextSeo } from "next-seo";
import Swiper from "../components/Swiper";
import ContactForm from "../components/ContactForm";
import WebsiteProcess from "../components/WebsiteProcess";
import WebsiteFAQ from "../components/WebsiteFAQ";
import Link from "next/link";

const Website = () => {
  return (
    <>
      <NextSeo
        title="Website Design & Development"
        description="Website Design & Development at Because Frank"
      />
      <div className="py-20 md:py-40 text-secondary bg-primary">
        <div className="container font-primary text-7xl md:text-5xl">
          <span className="mb-2 text-lg md:text-xl">Services/Website</span>
          <h1 className="text-5xl md:text-7xl">
            Our sweet spot is for people who need a simple, clean website for a
            frank price
          </h1>
          <Swiper />
        </div>
      </div>

      <div className="bg-secondary">
        <div className="container py-20 lg:py-40 w-full lg:w-1/2 space-y-5 text-primary text-center font-secondary text-lg md:text-2xl">
          <h2 className="font-primary text-3xl md:text-5xl">Why Frank?</h2>
          <p>
            At Because Frank, we believe that one of the most complicated parts
            in the website development process is selecting the best fit for the
            job, and we're here to ensure that you make the right call.
          </p>
        </div>
      </div>

      <div className="bg-primary">
        <div className="py-20 lg:py-40">
          <WebsiteProcess />
        </div>
      </div>

      <div className="py-20 font-primary text-primary text-3xl md:text-5xl text-center bg-secondary">
        <div className="container">
          <h2>For all the techies, here's our stack</h2>
          <div className="flex md:flex-row flex-wrap pt-10 justify-center items-center gap-10 space-y-10 lg:space-y-0 block">
            <div>
              <Link href="https://nextjs.org/">
                <img
                  src="/images/BF_Next.svg"
                  alt="Next.js Logo"
                  width={100}
                  height={200}
                  layout="responsive"
                />
              </Link>
            </div>
            <div>
              <Link href="https://reactjs.org/">
                <img
                  src="/images/BF_React.svg"
                  alt="React Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.squarespace.com/">
                <img
                  src="/images/BF_Squarespace.svg"
                  alt="Squarespace Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </Link>
            </div>
            <div>
              <Link href="https://wordpress.com/">
                <img
                  src="/images/BF_WP.svg"
                  alt="WordPress Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.netlify.com/">
                <img
                  src="/images/BF_Netlify.svg"
                  alt="Netlify Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </Link>
            </div>
            <div>
              <Link href="https://tailwindcss.com/">
                <img
                  src="/images/BF_Tailwind.svg"
                  alt="Tailwind Logo"
                  width={100}
                  height={100}
                  layout="responsive"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary">
        <div className="container">
          <WebsiteFAQ />
        </div>
      </div>

      <div className="bg-secondary">
        <div>
          <ContactForm
            title={"Let's get creative."}
            cls={"bg-secondary"}
            text={"text-primary"}
            btn={"bg-primary"}
            btntext={"text-secondary"}
            paratext={
              "It all starts with a message, and we're waiting on the other end."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Website;
