import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import ParticlesContainer from "../common/ParticlesContainer";
import Logo from "./Logo";
import IconsSpinner from "./IconsSpinner";
import BackToTop from "../common/BackToTop";
import Footer from "./Footer";
import Header from "./Header";

export const RootLayout = () => (
  <>
    <div className="fixed top-0 left-0 right-0 bottom-0 h-full w-full z-[-1]">
      <ParticlesContainer />
    </div>
    <Logo />
    <IconsSpinner />
    <Header />
    <div className="h-full my-[7.75rem] xl:my-[3.75rem] max-width-[1280px] flex items-center justify-center z-1 mx-4">
      <Outlet />
    </div>
    <BackToTop />
    <Footer />
    <Navigation />
  </>
);
