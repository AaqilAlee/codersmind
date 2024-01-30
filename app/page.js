import AboutUs from "@/Components/AppModules/aboutus/AboutUs";
import Slider from "../Components/AppModules/slider/HeroNew";
import Description from "@/Components/AppModules/description/Description";
import Services from "@/Components/AppModules/services/Services";

export default function Home() {
  return (
    <main>
      <Slider />
      <Description
        title=" We are the one of the most effective Web Design and Development
                Companies"
        descrip="Getting online is easy. Succeeding online is a different story. You’ll need more than just a beautiful website to stand out these days. Online marketing solutions. Conversion-based web design coupled with a lead generating marketing plan, your online success is inevitable."
        link="/"
      />
      <Services/>
      <AboutUs />
    </main>
  );
}
