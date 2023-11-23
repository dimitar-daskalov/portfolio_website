import { Link } from "react-router-dom";
import fullLogoImage from "../../assets/png/full-logo.png";
import { ROUTES } from "../../helpers/constants";

const Logo = () => {
  return (
    <Link className="fixed top-[-1.875rem] left-[-2.5] z-50" to={ROUTES.home}>
      <img
        src={fullLogoImage}
        alt="Full Logo"
        className="w-[9.375rem] h-[9.375rem] cursor-pointer"
      />
    </Link>
  );
};

export default Logo;