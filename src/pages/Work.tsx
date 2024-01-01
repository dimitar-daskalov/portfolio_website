import { motion } from "framer-motion";
import useCardsData from "../components/hooks/useCardsData";
import { fadeIn } from "../helpers/customAnimations";
import DownloadButton from "../components/common/DownloadButton";
import { useTranslation } from "react-i18next";
import Stepper from "../components/common/Stepper";
import Card from "../components/common/Card";

const Work = () => {
  const [t] = useTranslation("global");
  const { cardsData } = useCardsData();

  return (
    <div className="flex flex-col gap-6">
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="h-full"
      >
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          <h1
            className="text-3xl m-4 text-accent-2 text-center"
            dangerouslySetInnerHTML={{ __html: t("work.header") }}
          />
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="relative flex flex-col items-center justify-center w-full gap-6"
      >
        <Stepper />
        <DownloadButton />
      </motion.div>
      <h2 className="text-2xl mt-2 text-accent-2 text-center">
        {t("work.projects.header")}
      </h2>
      <div className="flex flex-wrap justify-evenly items-center gap-8 mt-2">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            name={card.name}
            description={card.description}
            appDemo={card.appDemo}
            appGitHub={card.appGitHub}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
