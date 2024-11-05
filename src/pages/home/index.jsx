import { ColumnContent, Hero } from "../../components/hero";
import { CardTab } from "../../components/card-tab";
import { Accordian } from "../../components/accordian";
import { Testimonial } from "../../components/testimonial";
import { LogoSection, LogoSlide } from "../../components/logo-slide";
import { Signup } from "../../components/signup";

export const Home = () => {
  return (
    <>
      <Hero />
      <ColumnContent />
      <CardTab />
      <Accordian />
      <Testimonial />
      <LogoSlide />
      <LogoSection />
      <Signup />
    </>
  );
};
