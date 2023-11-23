import avatarImage from "../../assets/png/avatar.png";

const Avatar = () => {
  return (
    <div className="hidden xl:flex">
      <img src={avatarImage} alt="Avatar" />
    </div>
  );
};

export default Avatar;
