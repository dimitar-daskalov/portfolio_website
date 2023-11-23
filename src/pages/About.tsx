import ProgressBar from "../components/common/ProgressBar";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import {
  SiChakraui,
  SiJavascript,
  SiReactquery,
  SiRedux,
  SiTypescript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../helpers/customAnimations";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";

const About = () => {
  const [t] = useTranslation("global");

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
            dangerouslySetInnerHTML={{ __html: t("about.header") }}
          />
          <p
            className="text-xl max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 text-accent-2"
            dangerouslySetInnerHTML={{ __html: t("about.body") }}
          />
          <div className="flex items-center justify-center gap-6 mb-4">
            <p className="text-xl max-w-sm xl:max-w-xl text-accent-2">
              {t("about.experience")}
            </p>
            <span className="text-3xl font-extrabold text-accent-1">
              <CountUp start={0} end={2} duration={5} /> +
            </span>
          </div>
        </div>
      </motion.div>
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-xl max-w-sm xl:max-w-xl text-accent-2">
          {t("about.technologies")}
        </p>
        <div className="flex flex-col gap-10 items-center justify-center">
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <ProgressBar
              inputProgress={95}
              inputIcon={<FaReact />}
              name="React"
              className="text-technologies-react"
            />
            <ProgressBar
              inputProgress={95}
              inputIcon={<SiTypescript />}
              name="TypeScript"
              className="text-technologies-typescript"
            />
            <ProgressBar
              inputProgress={90}
              inputIcon={<SiJavascript />}
              name="JavaScript"
              className="text-technologies-javascript"
            />
            <ProgressBar
              inputProgress={95}
              inputIcon={<SiReactquery />}
              name="ReactQuery"
              className="text-technologies-reactquery"
            />
          </div>
          <div className="flex flex-wrap gap-10 items-center justify-center">
            <ProgressBar
              inputProgress={90}
              inputIcon={<SiRedux />}
              name="Redux"
              className="text-technologies-redux"
            />
            <ProgressBar
              inputProgress={95}
              inputIcon={<SiChakraui />}
              name="ChakraUI"
              className="text-technologies-chakraui"
            />
            <ProgressBar
              inputProgress={100}
              inputIcon={<FaHtml5 />}
              name="HTML"
              className="text-technologies-html"
            />
            <ProgressBar
              inputProgress={95}
              inputIcon={<FaCss3 />}
              name="CSS"
              className="text-technologies-css"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
