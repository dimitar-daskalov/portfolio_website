import { useTranslation } from "react-i18next";
import slothifyImage from "../../assets/png/slothify.png";
import todoImage from "../../assets/png/todo.png";

const useCardsData = () => {
  const [t] = useTranslation("global");

  const cardsData = [
    {
      name: t("work.projects.spotify-clone.name"),
      description: t("work.projects.spotify-clone.description"),
      appDemo: "https://slothify.netlify.app/",
      appGitHub: "https://github.com/dimitar-daskalov/spotify-clone/",
      image: slothifyImage,
    },
    {
      name: t("work.projects.todo.name"),
      description: t("work.projects.todo.description"),
      appDemo: "https://react-checklist-app.netlify.app/",
      appGitHub: "https://github.com/dimitar-daskalov/todo-app-vite/",
      image: todoImage,
    },
  ];

  return { cardsData };
};

export default useCardsData;
