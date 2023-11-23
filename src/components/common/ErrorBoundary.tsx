import { ROUTES } from "../../helpers/constants";
import FancyButton from "./FancyButton";
import notFoundSvg from "../../assets/svg/not-found.svg";
import { motion } from "framer-motion";
import { fadeIn } from "../../helpers/customAnimations";
import {
  errorBoundaryThemeBackground,
  errorBoundaryTranslateText,
} from "../../helpers/helpers";

const ErrorBoundary = () => {
  return (
    <div
      className={`flex flex-col justify-center items-center h-screen px-4 ${errorBoundaryThemeBackground()} gap-6`}
    >
      <motion.div
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <h1 className="text-center text-primary text-2xl mb-4">
          {errorBoundaryTranslateText()[0]}
        </h1>
        <div className="text-center">
          <img
            src={notFoundSvg}
            alt="Not Found"
            className="w-[25rem] h-[25rem] bg-primary rounded-3xl"
          />
          <p className="mt-4 text-primary text-xl">
            {errorBoundaryTranslateText()[1]}
          </p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        animate="show"
        exit="hidden"
      >
        <FancyButton
          inputText={errorBoundaryTranslateText()[2]}
          route={ROUTES.home}
        />
      </motion.div>
    </div>
  );
};

export default ErrorBoundary;
