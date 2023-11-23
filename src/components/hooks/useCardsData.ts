import { useTranslation } from "react-i18next";

const useCardsData = () => {
  const [t] = useTranslation("global");

  const cardsData = [
    {
      name: t("work.projects.todo.name"),
      description: t("work.projects.todo.description"),
      appDemo: "https://lively-sable-3ee8ec.netlify.app/",
      appGitHub: "https://github.com/dimitar-daskalov/todo-app-vite",
    },
  ];

  return { cardsData };
};

export default useCardsData;
