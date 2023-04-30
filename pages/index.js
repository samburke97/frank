import { NextSeo } from "next-seo";
import HomeFrank from "../components/HomeFrank";
import HomeServices from "../components/HomeServices";
import HomeMeet from "../components/HomeMeet";
import Hero from "../components/Hero";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <NextSeo
        title="Because Frank | Because it pays to be Frank"
        description="Based in Brisbane, Australia. Because Frank is a creative studio named after a dog. Frank empowers businesses through charismatic content, copy, web design and development, minus the agency noise."
      />
      <Hero />
      <HomeFrank />
      <HomeServices />
      <HomeMeet />
      <ContactForm
        title={
          "We wouldn't want to bore you, drop us a line and let's get cracking"
        }
        cls={"bg-primary"}
        text={"text-secondary"}
        btn={"bg-secondary"}
      />
    </>
  );
};

export default Home;
