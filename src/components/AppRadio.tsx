import { Radio, RadioProps } from "@mui/material";
import { FC } from "react";

const AppRadio: FC<RadioProps> = (props) => {
  return <Radio checkedIcon={<Circle />} icon={<CircleOut />} {...props} />;
};

export default AppRadio;

function CircleOut() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="8"
        cy="8"
        r="7.63636"
        stroke="#2499EF"
        strokeWidth="0.727273"
      />
    </svg>
  );
}

function Circle() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8.04545" cy="8.04545" r="6.04545" fill="#2499EF" />
      <circle
        cx="8"
        cy="8"
        r="7.63636"
        stroke="#2499EF"
        strokeWidth="0.727273"
      />
    </svg>
  );
}
