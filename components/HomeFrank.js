import Link from "next/link";
import Image from "next/image";

const HomeStrip = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="container flex flex-col md:flex-row justify-around gap-10 items-center py-20">
          <Image
            className="rounded-full"
            src="/images/BF_Ralph.png"
            alt="Because Frank Member Ralph"
            width="400"
            height="400"
          />
          <div className="py-10 md:w-1/2 w-full space-y-4 order-2 text-primary ">
            <h2 className="font-primary text-3xl md:text-5xl">
              Because it pays to be Frank
            </h2>
            <p className="md:pb-3 pb-5 font-secondary text-lg md:text-2xl">
              Based in Brisbane, Australia. Because Frank is a creative studio
              named after a dog. Frank empowers businesses through charismatic
              content, copy, web design and development, minus the agency noise.
            </p>
            <div>
              <Link href="/about" passHREF>
                <a className="px-10 py-3 font-primary text-white text-xl md:text-3xl bg-primary hover:bg-accent">
                  Meet Frank
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeStrip;
