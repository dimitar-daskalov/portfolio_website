import { ReactElement } from "react";

interface CommonIconProps {
  name?: string;
  className: string;
  inputIcon: ReactElement;
  hideTooltip?: boolean;
}

const CommonIcon = ({
  name,
  className,
  inputIcon,
  hideTooltip = false,
}: CommonIconProps) => {
  return (
    <div className="text-4xl group">
      <div
        className={`absolute pr-16 right-4 hidden group-hover:${
          hideTooltip ? "hidden" : "flex"
        }`}
      >
        <div className="bg-primary relative flex items-center p-3 rounded-lg">
          <div className="text-sm text-secondary leading-none font-semibold ">
            {name}
          </div>
          <div className="border-solid border-l-primary border-l-8 border-y-transparent border-y-[0.375rem] border-r-0 absolute -right-2" />
        </div>
      </div>
      <div className={className}>{inputIcon}</div>
    </div>
  );
};

export default CommonIcon;
