import { Circle } from "rc-progress";
import { ReactElement, useEffect, useState } from "react";
import CommonIcon from "./CommonIcon";

interface ProgressBarProps {
  inputIcon: ReactElement;
  inputProgress: number;
  className?: string;
  name: string;
}

const ProgressBar = ({
  inputIcon,
  inputProgress,
  name,
  className = "text-primary",
  ...rest
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setProgress(inputProgress);
    }, 200);
  }, [inputProgress]);

  return (
    <div className="flex flex-col items-center justify-center gap-4 relative">
      <Circle
        percent={progress}
        strokeWidth={10}
        trailWidth={10}
        strokeLinecap="butt"
        trailColor="rgb(var(--color-accent-2) / 0.1)"
        strokeColor="rgb(var(--color-primary))"
        style={{
          width: "6.25rem",
          height: "6.25rem",
          borderRadius: "50%",
          ...rest,
        }}
      />
      <CommonIcon name={name} className={className} inputIcon={inputIcon} />
      <p className="absolute mb-14 text-2xl text-accent-1 font-semibold">
        {progress}%
      </p>
    </div>
  );
};

export default ProgressBar;
