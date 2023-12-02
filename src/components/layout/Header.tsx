import useShowElement from "../hooks/useShowElement";

const Header = () => {
  const { showElement: showHeader } = useShowElement(10);

  return (
    <div
      className={`fixed w-full h-24 bg-accent-2/10 backdrop-blur-sm top-0 z-50 ${
        showHeader ? "block" : "hidden"
      }`}
    />
  );
};

export default Header;
