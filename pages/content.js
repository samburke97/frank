import { NextSeo } from "next-seo";
import ContactForm from "../components/ContactForm";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Content = () => {
  return (
    <>
      <NextSeo
        title="Content & Copywriting"
        description="Copywirting & Content Creation services."
      />
      <div className="bg-primary text-secondary font-primary">
        <div className="container text-5xl md:text-7xl py-20 md:py-40">
          <span className="text-lg md:text-xl mb-2">Services/Content</span>
          <h1 className="text-5xl md:text-7xl">
            Content is king, and we're here to get you your crown
          </h1>
        </div>

        <div className="text-primary text-3xl md:text-5xl bg-secondary">
          <div className="container flex flex-col lg:flex-row justify-between items-center py-20 md:py:40">
            <div className="w-full lg:w-2/3 my-auto">
              <h2 className="py-5">Content Creation</h2>
              <div className="space-y-5 font-secondary text-lg md:text-2xl">
                <p>
                  Make no mistake, we're not here to faff about. We’ll only
                  search where your target audience can be found with a
                  selective social platform approach.
                </p>

                <p>
                  Not sure where to begin? We’ll dive deep into your target
                  audience and decide the most suitable platforms and content to
                  trial for your brand, your goals and the type of content you
                  want to share.
                </p>

                <p>
                  Combining a mix of value, promotional and community-driven
                  content, we offer a selection of packages to drive up your
                  pipeline, so get in touch and take the wheel.
                </p>

                <h2 className="py-5 text-3xl md:text-5xl font-primary">
                  Copywriting
                </h2>
                <p>
                  Blogs, Websites, & EDMs are our cup of tea and not to blow our
                  own horn but it’s where we excel.
                </p>
                <p>
                  If you have a brand that was born to stand out, copywriting is
                  the perfect way to express it. While you're at it, you can
                  also captivate your audience, build trust, retain customers
                  and push your readers over the sales line.
                </p>
                <p>
                  Videos, Photos, Graphics, Captions, Blogs, Campaign Ideas,
                  Social Strategy, Carousel Posts - you name it, we’ve got it.
                </p>
                <div className="pb-5">
                  <h2 className="pb-5 text-xl md:text-3xl font-primary">
                    Platforms we dominate
                  </h2>
                  <div className="flex space-x-3">
                    <FaInstagram size={40} />
                    <FaFacebook size={40} />
                    <FaLinkedin size={40} />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt:20 md:mt-0">
              <Image
                src="/images/BF_Instagram.png"
                alt="Because Frank Instagram Content Creation"
                width="290"
                height="589"
              />
            </div>
          </div>
        </div>

        <div className="py-20 lg:py-40 mx-auto text-secondary text-5xl md:text-7xl text-center bg-primary">
          <div className="container">
            <div className="text-center">
              <h2 className="mb-5">
                IF YOU WANT TO PLAY IT SAFE, PLAY ELSEWHERE
              </h2>
              <Link href="/contact" passHREF>
                <a className="px-10 py-3 font-primary text-xl md:text-3xl text-primary bg-secondary hover:text-white hover:bg-accent">
                  Where do I sign up?
                </a>
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-secondary">
          <ContactForm
            title={"Dare to stand out?"}
            cls={"bg-secondary"}
            text={"text-primary"}
            btn={"bg-primary"}
            btntext={"text-secondary"}
            paratext={
              "Capture your audiences attention with a package tailored to you."
            }
          />
        </div>
      </div>
    </>
  );
};

export default Content;
