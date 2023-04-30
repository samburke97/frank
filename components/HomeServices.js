import Link from "next/link";
import Image from "next/image";

const HomeServices = () => {
  return (
    <>
      <div className="bg-primary text-secondary">
        <div className="container py-20 lg:py-40 font-secondary text-lg md:text-2xl">
          <div>
            <h2 className="mb-5 text-3xl font-primary md:text-5xl">
              Frank's Services
            </h2>
            <p className="md:w-3/4 w-full">
              We're not here to lick stamps. We specialise in three fields that
              offer the greatest bang-for-the-marketing-buck. We call it the
              'secret sauce'. An irresistible formula for your online growth;
              content creation, copywriting, and website design & development.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row py-10 w-full gap-16">
            <div className="flex-1 space-y-8">
              <Link href="/website">
                <Image
                  src="/images/BF_Website.png"
                  alt="Website Development"
                  width="500"
                  height="300"
                />
              </Link>
              <h2 className="mb-1 font-primary text-3xl md:text-5xl">
                Websites & Design
              </h2>
              <p>
                We believe that all websites serve one purpose - to be
                high-conversion sales beasts piloting your marketing and growth
                strategies. Although it may sound sinful, our designers make
                these ‘beasts’ look so irresistibly handsome, just like our main
                man, Frank.
              </p>
            </div>

            <div className="flex-1 space-y-8">
              <Link href="/content">
                <Image
                  src="/images/BF_Content.png"
                  alt="Social Media Content Creation"
                  width="500"
                  height="300"
                />
              </Link>
              <h2 className="mb-1 text-3xl md:text-5xl font-primary">
                Content Creation
              </h2>
              <p>
                What’s the point of all that paid advertising if you’re herding
                your potential customers to a dumpster fire? Invite some
                legitimacy and retention to your brand with compelling content
                that’s sure to convert. Be it Instagram, Facebook, or LinkedIn,
                we've got you covered.
              </p>
            </div>

            <div className="flex-1 space-y-8">
              <Link href="/content">
                <Image
                  src="/images/BF_Copy.png"
                  alt="Copywriting"
                  width="500"
                  height="300"
                />
              </Link>
              <h2 className="mb-1 text-3xl md:text-5xl font-primary">
                Copywriting
              </h2>
              <p>
                No one likes a tease, so give the people what they want. Be it
                your content, your emails, or your website, you’re unique, and
                you’re missing out. Charismatic copy plays a decisive role in
                converting your target audience, so be Frank about it - because
                it pays to be Frank.
              </p>
            </div>
          </div>
          <Link href="/services" passHREF>
            <a className="px-10 py-3 font-primary text-xl md:text-3xl text-primary bg-secondary hover:text-white hover:bg-accent">
              Treat yourself
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeServices;
