import FancyButton from "./FancyButton";
import { useTranslation } from "react-i18next";
import { HiArrowUpRight } from "react-icons/hi2";

interface TestCardProps {
  name: string;
  description: string;
  image: string;
  appDemo: string;
  appGitHub: string;
}

const Card = ({
  name,
  description,
  image,
  appDemo,
  appGitHub,
}: TestCardProps) => {
  const [t] = useTranslation("global");

  return (
    <div className="relative h-96 w-72 overflow-hidden rounded-3xl shadow-lg group">
      <img
        src={image}
        alt="card image"
        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-200"
      />
      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/100 to-transparent">
        <div className="flex flex-col h-full w-full justify-between p-4">
          <div className="flex flex-col h-full text-white justify-between p-4">
            <h1 className="mx-auto text-2xl font-bold text-center">{name}</h1>
            <p className="text-xl text-center">{description}</p>
          </div>
          <HiArrowUpRight
            size={50}
            className="text-white m-2 group-hover:rotate-45 duration-200"
          />
          <div className="flex flex-wrap justify-between gap-2">
            <FancyButton
              inputText={t("work.buttons.demo")}
              route={appDemo}
              isExternal
              isCardButton
            />
            <FancyButton
              inputText="GitHub"
              route={appGitHub}
              isExternal
              isCardButton
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
