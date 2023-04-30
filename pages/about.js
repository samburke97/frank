import { NextSeo } from "next-seo";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

const About = () => {
  return (
    <>
      <NextSeo title="Our Team" description="Meet the team at Because Frank" />
      <div className="bg-primary">
        <div className="container py-20 font-primary text-secondary text-5xl md:text-7xl">
          <h1 className="text-center">Our Team</h1>
          <div className="flex flex-col md:flex-row justify-center items-center py-10 space-y-8 md:space-y-0 md:space-x-8">
            <div className="max-w-sm rounded overflow-hidden shadow-lg font-primary">
              <Image
                src="/Images/BF_Ralph.png"
                alt="Because Frank Member Ralph"
                width="500"
                height="500"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl md:text-4xl mb-2">
                  <h2>FRANK</h2>
                  <h3 className="text-xl md:text-2xl">(The Main Man)</h3>
                </div>
                <p className="text-base md:text-xl font-secondary">
                  Frank knows best. A natural operator, a born showstopper, and
                  a pup that always delivers. Frank doesn’t chase balls. He lets
                  them roll to the tips of his paws and strikes with fatal
                  precision. A true people pleaser, Frank knows what buttons to
                  press to get people eating out of his paw - and he’s wildly
                  effective at it. He’s the K9 to sign. Why? Because Franks,
                  Frank and everyone appreciates a real one.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 font-primary">
                <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm md:text-xl text-primary mr-2 mb-2">
                  #Leo
                </span>
                <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm md:text-xl text-primary mr-2 mb-2">
                  #Relaxation
                </span>
                <span className="inline-block bg-secondary rounded-full px-3 py-1  text-sm md:text-xl text-primary mr-2 mb-2">
                  #Tennis
                </span>
              </div>
            </div>

            <div className="max-w-sm rounded overflow-hidden shadow-lg font-primary">
              <Image
                src="/Images/BF_Copy.png"
                alt="Because Frank Member Sam"
                width="500"
                height="500"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-2xl md:text-4xl mb-2">
                  <h2>SAM</h2>
                  <h3 className="text-xl md:text-2xl">(Frank's Mate)</h3>
                </div>
                <p className="text-base md:text-xl font-secondary">
                  When he’s not trying to keep up with Frank, you’ll find him
                  writing copy, creating content and developing websites. Sam
                  founded Because Frank to cut straight to the point and help
                  value-driven businesses meet their marketing needs. Sam is
                  allergic to any corporate waffle. So if you want to
                  synergistically maintain resource-levelling catalysts for
                  change, then Frankly, Sam is not your guy.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2 font-primary">
                <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm md:text-xl text-primary mr-2 mb-2">
                  #SSM
                </span>
                <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm md:text-xl text-primary mr-2 mb-2">
                  #Web Dev
                </span>
                <span className="inline-block bg-secondary rounded-full px-3 py-1 text-sm md:text-xl text-primary mr-2 mb-2">
                  #Copywriting
                </span>
              </div>
            </div>
          </div>
        </div>
        <ContactForm
          title={"Throw Frank a ball"}
          cls={"bg-secondary"}
          text={"text-primary"}
          btn={"bg-primary"}
          btntext={"text-secondary"}
          paratext={
            "Just like your best mate, we're always up for a frank & friendly chat."
          }
        />
      </div>
    </>
  );
};

export default About;
