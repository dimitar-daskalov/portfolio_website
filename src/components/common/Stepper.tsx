import Steps from "rc-steps";
import "rc-steps/assets/index.css";
import { HiArrowUp } from "react-icons/hi";
import useStepperData from "../hooks/useStepperData";

const Stepper = () => {
  const { stepperData } = useStepperData();

  return (
    <Steps
      initial={0}
      current={0}
      direction="vertical"
      stepIcon={() => <HiArrowUp className="text-accent-2" />}
      items={stepperData.map((step) => ({
        status: step.status,
        title: step.title,
        subTitle: step.subTitle,
        description: step.description,
      }))}
      className="bg-accent-2/10 backdrop-blur-sm rounded-3xl p-8 overflow-hidden max-w-[800px]"
    />
  );
};

export default Stepper;
