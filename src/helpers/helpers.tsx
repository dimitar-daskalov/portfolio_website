import { ReactElement } from "react";
import i18next from "i18next";
import { IconType } from "react-icons";
import { HiHome, HiUser, HiCode, HiMail } from "react-icons/hi";
import { ROUTES } from "./constants";

interface navigationDataProps {
  name: string;
  path: string;
  icon: ReactElement<IconType>;
}

export const navigationData: navigationDataProps[] = [
  {
    name: "home",
    path: ROUTES.home,
    icon: <HiHome />,
  },
  {
    name: "about",
    path: ROUTES.about,
    icon: <HiUser />,
  },
  {
    name: "work",
    path: ROUTES.work,
    icon: <HiCode />,
  },
  {
    name: "contact",
    path: ROUTES.contact,
    icon: <HiMail />,
  },
];

export const errorBoundaryTranslateText = () => {
  const isBG = localStorage.getItem("language") === "bg";

  return isBG
    ? [
        "Опа, нещо се обърка!",
        "Не се тревожи. Страницата не е намерена!",
        "Начало",
      ]
    : [
        "Oops, something went wrong!",
        "Don't worry. This page was not found!",
        "Go Home",
      ];
};

export const errorBoundaryThemeBackground = () => {
  const isLight = localStorage.getItem("theme") === "light";

  return isLight ? "bg-[rgb(233,232,226)]" : "bg-[rgb(17,24,39)]";
};

export const getOppositeLanguage = () =>
  i18next.language === "bg" ? "en" : "bg";
