import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const TOGGLE_CLASSES =
  "flex items-center gap-2 px-3 py-3 transition-colors z-10";

const SwitchThemeToggle = () => {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [selected, setSelected] = useState(prefersDarkMode);

  const handleThemeToggle = (theme: string) => {
    document.documentElement.setAttribute("data-theme", theme);
    setSelected(theme === "dark");
  };

  useEffect(() => {
    localStorage.setItem("theme", selected ? "dark" : "light");
    // should be triggered only when the component is mounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed top-7 right-20 xl:right-[6.25rem]">
      <div className="flex w-fit items-center">
        <button
          className={`${TOGGLE_CLASSES} ${
            !selected ? "text-secondary" : "text-primary"
          }`}
          onClick={() => {
            handleThemeToggle("light"), localStorage.setItem("theme", "light");
          }}
        >
          <FiSun className="text-lg" />
        </button>
        <button
          className={`${TOGGLE_CLASSES} ${
            selected ? "text-secondary" : "text-primary"
          }`}
          onClick={() => {
            handleThemeToggle("dark"), localStorage.setItem("theme", "dark");
          }}
        >
          <FiMoon className="text-lg" />
        </button>
        <div
          className={`absolute inset-0 z-0 flex ${
            selected ? "justify-end" : "justify-start"
          }`}
        >
          <motion.span
            layout
            transition={{ type: "spring", damping: 20, stiffness: 1000 }}
            className="h-full w-1/2 rounded-full bg-primary"
          />
        </div>
      </div>
    </div>
  );
};

export default SwitchThemeToggle;
