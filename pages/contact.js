import { NextSeo } from "next-seo";
import ContactForm from "../components/ContactForm";
import Links from "../components/Links";
import { FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <NextSeo
        title="Contact Us"
        description="Contact the team at Because Frank to discuss"
      />
      <div className="bg-primary">
        <div className="container text-center text-secondary font-primary text-5xl md:text-7xl py-20 md:py-40">
          <div className="text-3xl md:text-5xl space-y-5">
            <h1 className="text-5xl md:text-7xl">THANK GOD YOU'RE HERE</h1>
            <div className="font-secondary text-xl md:text-3xl text-center flex justify-center">
              <h2 className="w-full lg:w-1/2">
                Whether you’re looking for a fresh website, some cracking
                content, or even something off the menu - we’re right behind
                you.
              </h2>
            </div>
            <div className="flex justify-center">
              <Links />
            </div>
          </div>
        </div>
      </div>
      <ContactForm
        title={"Let's get to work"}
        cls={"bg-secondary"}
        text={"text-primary"}
        btn={"bg-primary"}
        btntext={"text-secondary"}
        paratext={
          <div>
            <FaEnvelope size={24} className="inline-block mr-3" />
            <Link href="mailto:sam@becausefrank.com">sam@becausefrank.com</Link>
          </div>
        }
      />
    </>
  );
};

export default Contact;
