import { useTranslation } from "react-i18next";

const useCardsData = () => {
  const [t] = useTranslation("global");

  const cardsData = [
    {
      name: t("work.projects.spotify-clone.name"),
      description: t("work.projects.spotify-clone.description"),
      appDemo: "https://slothify.netlify.app/",
      appGitHub: "https://github.com/dimitar-daskalov/spotify-clone/",
    },
    {
      name: t("work.projects.todo.name"),
      description: t("work.projects.todo.description"),
      appDemo: "https://react-checklist-app.netlify.app/",
      appGitHub: "https://github.com/dimitar-daskalov/todo-app-vite/",
    },
  ];

  return { cardsData };
};

export default useCardsData;
