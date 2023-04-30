import Link from "next/link";
import {
  FaPaintBrush,
  FaFileCode,
  FaRocket,
  FaWineGlassAlt,
} from "react-icons/fa";

const WebsiteProcess = () => {
  return (
    <>
      <div className="bg-primary text-secondary">
        <div className="container font-secondary text-lg md:text-2xl">
          <div className="text-center">
            <h2 className="font-primary text-5xl md:text-7xl">
              The Secret Sauce
            </h2>
            <p>Three key steps to earn yourself a glass of red.</p>
          </div>

          <div className="flex flex-col lg:flex-row justify-between gap-10 d:gap-20 items-center lg:text-left py-10 text-center md:py-20">
            <div className="space-y-8">
              <div className="flex justify-center lg:justify-start">
                <FaPaintBrush size={100} />
              </div>
              <h2 className="font-primary text-3xl md:text-5xl">1.0 Design</h2>
              <ul className="space-y-2">
                <li>Initial consultation.</li>
                <li>Dive into the target audience.</li>
                <li>Develop engaging and sales-centric copy.</li>
                <li>Develop eye-catching graphics.</li>
                <li>Create high-fidelity wireframes.</li>
              </ul>
            </div>

            <div className="justify-center space-y-8">
              <div className="flex justify-center lg:justify-start">
                <FaFileCode size={100} />
              </div>
              <h2 className="font-primary text-3xl md:text-5xl">
                2.0 Development
              </h2>
              <ul className="space-y-2">
                <li>Set up development environment.</li>
                <li>Code like Picaso.</li>
                <li>Review & revise your websites code.</li>
                <li>Review & implement SEO and marketing plugins.</li>
                <li>Test & evaluate technology.</li>
              </ul>
            </div>

            <div className="space-y-8 ">
              <div className="flex justify-center lg:justify-start">
                <FaRocket size={100} />
              </div>
              <h2 className="font-primary text-3xl md:text-5xl">3.0 Launch</h2>
              <ul className="space-y-2">
                <li>Complete the final review.</li>
                <li>Deploy website on chosen platform.</li>
                <li>Roll out marketing launch tactics.</li>
                <li>Discuss ongoing support & maintenance plans.</li>
                <li>
                  Enjoy a glass of red.{" "}
                  <FaWineGlassAlt size={20} className="inline" />
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <Link href="/contact" passHREF>
              <a className="px-10 py-3 font-primary text-xl md:text-3xl text-primary bg-secondary hover:text-white hover:bg-accent">
                What's the damage?
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteProcess;
