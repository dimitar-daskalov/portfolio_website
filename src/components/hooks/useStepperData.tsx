import { StepProps } from "rc-steps/lib/Step";
import { useTranslation } from "react-i18next";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiReactquery,
  SiTestinglibrary,
  SiChakraui,
  SiJest,
  SiJavascript,
  SiPython,
  SiDjango,
  SiMysql,
  SiHtml5,
  SiCss3,
} from "react-icons/si";
import { Link } from "react-router-dom";
import CommonIcon from "../common/CommonIcon";

const useStepperData = () => {
  const [t] = useTranslation("global");

  const stepperData: StepProps[] = [
    {
      title: (
        <h2 className="text-xl text-accent-2">
          Software Developer{" "}
          <Link
            to="https://mentormate.com/"
            target="_blank"
            className="text-primary hover:text-accent-1"
          >
            @MentorMate
          </Link>
        </h2>
      ),
      subTitle: (
        <div className="flex flex-col gap-4">
          <span className="text-primary text-lg font-medium">
            {t("work.stepper.current-position.sub-title")}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CommonIcon
              className="text-technologies-react"
              inputIcon={<FaReact />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-typescript"
              inputIcon={<SiTypescript />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-reactquery"
              inputIcon={<SiReactquery />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-reacttestinglibrary"
              inputIcon={<SiTestinglibrary />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-chakraui"
              inputIcon={<SiChakraui />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-jest"
              inputIcon={<SiJest />}
              hideTooltip
            />
          </div>
        </div>
      ),
      description: (
        <p className="text-accent-2 text-lg mx-auto mt-4">
          {t("work.stepper.current-position.description")}
        </p>
      ),
      status: "process",
    },
    {
      title: (
        <h2 className="text-xl text-accent-2">
          Junior Software Developer{" "}
          <Link
            to="https://mentormate.com/"
            target="_blank"
            className="text-primary hover:text-accent-1"
          >
            @MentorMate
          </Link>
        </h2>
      ),
      subTitle: (
        <div className="flex flex-col gap-4">
          <span className="text-primary text-lg font-medium">
            {t("work.stepper.previous-position.sub-title")}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CommonIcon
              className="text-technologies-react"
              inputIcon={<FaReact />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-javascript bg-black"
              inputIcon={<SiJavascript />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-typescript"
              inputIcon={<SiTypescript />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-reactquery"
              inputIcon={<SiReactquery />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-reacttestinglibrary"
              inputIcon={<SiTestinglibrary />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-jest"
              inputIcon={<SiJest />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-python"
              inputIcon={<SiPython />}
              hideTooltip
            />
            <CommonIcon
              className="text-accent-2"
              inputIcon={<SiDjango />}
              hideTooltip
            />
          </div>
        </div>
      ),
      description: (
        <p className="text-accent-2 text-lg mx-auto mt-4">
          {t("work.stepper.previous-position.description")}
        </p>
      ),
      status: "finish",
    },
    {
      title: (
        <h2 className="text-xl text-accent-2">
          Software Development Trainee{" "}
          <Link
            to="https://mentormate.com/"
            target="_blank"
            className="text-primary hover:text-accent-1"
          >
            @MentorMate
          </Link>
        </h2>
      ),
      subTitle: (
        <div className="flex flex-col gap-4">
          <span className="text-primary text-lg font-medium">
            {t("work.stepper.trainee.sub-title")}
          </span>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CommonIcon
              className="text-technologies-python"
              inputIcon={<SiPython />}
              hideTooltip
            />
            <CommonIcon
              className="text-accent-2"
              inputIcon={<SiDjango />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-mysql"
              inputIcon={<SiMysql />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-html"
              inputIcon={<SiHtml5 />}
              hideTooltip
            />
            <CommonIcon
              className="text-technologies-css"
              inputIcon={<SiCss3 />}
              hideTooltip
            />
          </div>
        </div>
      ),
      description: (
        <p className="text-accent-2 text-lg mx-auto mt-4">
          {t("work.stepper.trainee.description")}{" "}
          <Link
            to="https://university.mentormate.com/"
            target="_blank"
            className="text-primary hover:text-accent-1"
          >
            Mentormate DevCamp (University)
          </Link>{" "}
          - Python
        </p>
      ),
      status: "finish",
    },
  ];

  return { stepperData };
};

export default useStepperData;
