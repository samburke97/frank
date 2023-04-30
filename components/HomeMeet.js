import { FaStar } from "react-icons/fa";

const HomeMeet = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="container py-20 lg:py-40 w-full lg:w-1/2 space-y-5 text-primary text-center font-secondary text-lg md:text-2xl">
          <h2 className="font-primary text-3xl md:text-5xl">
            What they're saying
          </h2>
          <div className="flex flex-row justify-center">
            <FaStar size={32} />
            <FaStar size={32} />
            <FaStar size={32} />
            <FaStar size={32} />
            <FaStar size={32} />
          </div>
          <p>
            "Because Frank really helped me understand how I can create an
            engaged community and showcase my work through social media. It was
            so insightful and I cannot wait to action all the tips and tricks I
            learnt in our chat."
          </p>
          <p className="font-primary text-xl md:text-3xl">
            Jess (Rotate Clothing)
          </p>
        </div>
      </div>
    </>
  );
};

export default HomeMeet;
