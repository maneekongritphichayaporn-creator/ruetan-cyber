import { FunctionComponent } from "react";
import Navbar from "../components/common/Navbar";
import BannerAOC from "../components/common/BannerAOC";
import Component9 from "../components/home/Component9";
import Component8 from "../components/home/Component8";
import Component11 from "../components/home/Component11";
import Component12 from "../components/home/Component12";
import Component13 from "../components/home/Component13";
import Component14 from "../components/home/Component14";
import Footer from "../components/common/Footer";

const Home: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-[#faf8f2] flex flex-col items-start leading-[normal] tracking-[normal]">
      <Navbar />
      <section className="self-stretch flex flex-col items-start max-w-full">
        <BannerAOC />
        <div className="self-stretch overflow-hidden flex items-center justify-center flex-wrap content-center py-14 px-7.5 box-border gap-2 max-w-full mq750:pt-[2.25rem] mq750:pb-[2.25rem] mq750:box-border">
          <Component9 />
          <Component8 />
        </div>
      </section>
      <Component11 />
      <Component12 />
      <Component13 />
      <Component14 />
      <Footer />
    </div>
  );
};

export default Home;
