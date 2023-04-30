import { NextSeo } from "next-seo";
import Link from "next/link";

const Success = () => {
  return (
    <>
      <NextSeo
        title="Cheers"
        description="Thankyou for reaaching out, looking forward to a chat."
      />
      <div className="bg-secondary">
        <div className="container py-40 md:py-80 font-primary text-primary text-5xl md:text-7xl text-center">
          <h1>Thanks for reaching out, We'll be in touch shortly</h1>
          <Link href="/" passHREF>
            <a className="px-10 py-3 font-primary text-white text-xl md:text-3xl bg-primary hover:bg-accent">
              Take Me home
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Success;
