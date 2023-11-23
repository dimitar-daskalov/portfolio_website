import { motion } from "framer-motion";
import { fadeIn } from "../helpers/customAnimations";
import Avatar from "../components/common/Avatar";
import WavingHand from "../components/common/WavingHand";
import { ROUTES } from "../helpers/constants";
import FancyButton from "../components/common/FancyButton";
import { useTranslation } from "react-i18next";

const Home = () => {
  const [t] = useTranslation("global");

  return (
    <>
      <div className="text-center flex flex-col justify-center items-center xl:text-left h-full w-full container mx-auto">
        <h1 className="text-3xl mb-4 text-accent-2">
          {t("home.header-first-part")}
          <WavingHand />{" "}
          <span
            dangerouslySetInnerHTML={{ __html: t("home.header-second-part") }}
          />
        </h1>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >
          <p
            className="text-xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 text-accent-2"
            dangerouslySetInnerHTML={{ __html: t("home.body") }}
          />
          <div className="flex flex-wrap justify-center xl:justify-evenly">
            <FancyButton
              inputText={t("home.first-button")}
              route={ROUTES.work}
            />
            <FancyButton
              inputText={t("home.second-button")}
              route={ROUTES.contact}
            />
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-80 h-[26rem] fixed hidden lg:flex lg:bottom-0 lg:right-[8%] z-[100]"
      >
        <Avatar />
      </motion.div>
    </>
  );
};

export default Home;
