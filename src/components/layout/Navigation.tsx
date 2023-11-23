import { Link, useLocation } from "react-router-dom";
import { navigationData } from "../../helpers/helpers";
import Socials from "./Socials";
import SwitchThemeToggle from "./SwitchThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

const Navigation = () => {
  const location = useLocation();
  const [t] = useTranslation("global");

  return (
    <nav className="fixed flex flex-col items-center xl:justify-center gap-y-4 h-max bottom-0 mt-auto xl:right-[1%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <LanguageSwitcher />
      <SwitchThemeToggle />
      <Socials />
      <div className="flex w-full flex-col gap-y-2 px-4 md:px-40 xl:px-0 h-[6rem] xl:h-max py-8 bg-accent-2/10 backdrop-blur-sm xl:rounded-full">
        <div className="flex w-full xl:flex-col items-center justify-between gap-y-10 text-3xl xl:text-xl">
          {navigationData.map((link, index) => {
            return (
              <Link
                key={index}
                to={`${link.path}`}
                className="relative flex items-center group transition-all duration-300"
              >
                <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                  <div className="relative flex bg-primary text-secondary items-center p-3 rounded-lg">
                    <div className="text-sm leading-none font-semibold capitalize">
                      {t(`navigation.${link.name}`)}
                    </div>
                    <div className="border-solid border-l-primary border-l-8 border-y-transparent border-y-[0.375rem] border-r-0 absolute -right-2" />
                  </div>
                </div>
                <div
                  className={`${
                    location.pathname === link.path
                      ? "text-primary scale-125"
                      : "text-secondary"
                  } transition duration-300 ease-in-out`}
                >
                  {link.icon}
                </div>
              </Link>
            );
          })}
        </div>
        <span className="xl:hidden text-center text-sm md:text-md text-accent-2 w-full">
          © 2023 Dimitar Daskalov. All Rights Reserved.
        </span>
      </div>
    </nav>
  );
};

export default Navigation;
