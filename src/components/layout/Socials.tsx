import { IoShareSocialSharp } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Socials = () => {
  const linkedIn = import.meta.env.VITE_LINKED_IN_LINK;
  const gitHub = import.meta.env.VITE_GITHUB_LINK;

  return (
    <div className="fixed top-[0.938rem] right-2.5 xl:right-[1%] group">
      <button
        type="button"
        className="flex items-center justify-center text-secondary bg-accent-2/10 backdrop-blur-sm rounded-full w-16 h-16 group-hover:text-secondary focus:outline-none"
      >
        <div className="flex items-center justify-center transition-transform group-hover:rotate-45 group-hover:text-primary text-secondary">
          <IoShareSocialSharp className="text-3xl" />
        </div>
      </button>
      <div className="hidden group-hover:flex flex-col items-center mt-4 space-y-2">
        <Link
          to={linkedIn}
          target="blank"
          className="flex justify-center items-center w-[3.25rem] h-[3.25rem] bg-accent-2/10 backdrop-blur-sm text-secondary rounded-full focus:outline-none group/linkedIn"
        >
          <div className="absolute pr-14 right-3 hidden group-hover/linkedIn:flex">
            <div className="bg-primary flex relative text-secondary items-center p-3 rounded-lg">
              <div className="text-xs leading-none font-semibold text-secondary">
                LinkedIn
              </div>
              <div className="border-solid border-l-primary border-l-8 border-y-transparent border-y-[0.375rem] border-r-0 absolute -right-2" />
            </div>
          </div>
          <FaLinkedinIn className="group-hover/linkedIn:text-primary" />
        </Link>
        <Link
          to={gitHub}
          target="blank"
          className="flex justify-center items-center w-[3.25rem] h-[3.25rem] bg-accent-2/10 backdrop-blur-sm text-secondary rounded-full focus:outline-none group/gitHub"
        >
          <div className="absolute pr-14 right-3 hidden group-hover/gitHub:flex">
            <div className="bg-primary relative flex text-secondary items-center p-3 rounded-lg">
              <div className="text-sm leading-none font-semibold text-secondary">
                GitHub
              </div>
              <div className="border-solid border-l-primary border-l-8 border-y-transparent border-y-[0.375rem] border-r-0 absolute -right-2" />
            </div>
          </div>
          <BsGithub className="group-hover/gitHub:text-primary" />
        </Link>
      </div>
    </div>
  );
};

export default Socials;
