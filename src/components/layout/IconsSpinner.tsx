import { SiJavascript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";

const IconsSpinner = () => {
  return (
    <div className="fixed hidden lg:flex flex-col rounded-full animate-spin-slower w-52 h-52 bottom-52 left-16">
      <div className="flex items-center justify-center">
        <SiJavascript className="text-3xl text-technologies-javascript" />
      </div>
      <div className="flex flex-1 justify-between items-center">
        <FaReact className="text-3xl text-technologies-react" />
        <SiTypescript className="text-3xl text-technologies-typescript" />
      </div>
      <div className="flex items-center justify-center">
        <SiTailwindcss className="text-3xl text-technologies-tailwindcss" />
      </div>
    </div>
  );
};

export default IconsSpinner;
