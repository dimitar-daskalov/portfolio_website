import { HiArrowUp } from "react-icons/hi";
import useShowElement from "../hooks/useShowElement";

const BackToTop = () => {
  const { showElement: showButton } = useShowElement(100);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={`z-[100] bg-primary fixed bottom-[6rem] xl:bottom-[2%] right-2.5 xl:right-[1%] items-center justify-center text-secondary w-16 h-16 hover:text-accent-1 focus:outline-none p-4 bg-accent-2/10 backdrop-blur-sm rounded-full ${
        showButton ? "flex" : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <HiArrowUp size={25} />
    </button>
  );
};

export default BackToTop;
