import { FaArrowDown, FaTimes } from "react-icons/fa";
import { useState } from "react";

const WebsiteFAQ = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="container font-primary text-secondary text-base md:text-xl py-20">
        <div className="flex justify-between">
          <h2 className="text-3xl md:text-5xl pb-3">
            Frequently Asked Question's
          </h2>

          <div className="flex justify-end pb-3" onClick={handleClick}>
            {!active ? <FaArrowDown size={32} /> : <FaTimes size={32} />}
          </div>
        </div>

        <p className="font-secondary text-lg md:text-2xl">
          If we've left anything unanswered, please drop us a line below.
        </p>

        <div className="pt-10 text-secondary">
          <button
            className="flex w-full my-4 pb-5 text-left text-xl md:text-3xl border-b border-secondary"
            onClick={handleClick}
          >
            I have an unbudgeable budget, can you help?
          </button>

          <div className={`${active ? "" : "hidden"}`}>
            <p className="pb-4 font-secondary">
              We always welcome a challenge. So drop us a line and let's chat
              all things essential.
            </p>
          </div>

          <button
            className="flex w-full my-4 pb-5 focus:outline-none tex-left text-xl md:text-3xl border-b border-secondary"
            onClick={handleClick}
          >
            Do you build custom websites?
          </button>

          <div className={`${active ? "" : "hidden"}`}>
            <p className="pb-4 font-secondary">
              Just like we did for this website, we love getting our hands dirty
              with a custom approach. We cater to all budgets and project
              requirements, so the approach we take is dependent on exactly
              that.
            </p>
          </div>

          <button
            className="flex w-full my-4 pb-5 focus:outline-none tex-left text-xl md:text-3xl border-b border-secondary"
            onClick={handleClick}
          >
            What are High-Fidelity Wireframes?
          </button>

          <div className={`${active ? "" : "hidden"}`}>
            <p className="pb-4 font-secondary">
              High Fidelity wireframes capture the look and feel of your
              website, providing a representation of how your site will look and
              function.
            </p>
          </div>

          <button
            className="flex w-full my-4 pb-5 focus:outline-none text-left text-xl md:text-3xl border-b border-secondary"
            onClick={handleClick}
          >
            Can you customize a content or website package to meet my
            objectives?
          </button>

          <div className={`${active ? "" : "hidden"}`}>
            <p className="pb-4 font-secondary">
              There’s no one-size-fits-all approach, this isn’t wish.com. We
              tailor all of our packages to fit like a glove, so get in touch
              and let’s measure it up.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteFAQ;
