import { useTranslation } from "react-i18next";
import { getOppositeLanguage } from "../../helpers/helpers";

const LanguageSwitcher = () => {
  const [t, i18next] = useTranslation("global");

  return (
    <button
      className="fixed flex items-center justify-center rounded-full bg-transparent p-3 text-xl w-10 h-10 right-[10.5rem] top-7 xl:right-48 xl:top-7 group"
      onClick={() => {
        const newLanguage = getOppositeLanguage();
        i18next.changeLanguage(newLanguage);
        localStorage.setItem("language", newLanguage);
      }}
    >
      <div className="absolute pr-9 right-3 hidden group-hover:flex">
        <div className="bg-primary relative flex items-center p-3 rounded-lg">
          <div className="text-sm text-secondary leading-none font-semibold ">
            {t("language-switcher.tooltip")}
          </div>
          <div className="border-solid border-l-primary border-l-8 border-y-transparent border-y-[0.375rem] border-r-0 absolute -right-2" />
        </div>
      </div>
      <div className="text-primary uppercase">{getOppositeLanguage()}</div>
    </button>
  );
};

export default LanguageSwitcher;
