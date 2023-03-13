import { SvgIcon, SvgIconProps } from "@mui/material";

const BlankCheckBoxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 22 22" {...props}>
      <path
        d="M6 1.5H16V0.5H6V1.5ZM20.5 6V16H21.5V6H20.5ZM16 20.5H6V21.5H16V20.5ZM1.5 16V6H0.5V16H1.5ZM6 20.5C3.51472 20.5 1.5 18.4853 1.5 16H0.5C0.5 19.0376 2.96243 21.5 6 21.5V20.5ZM20.5 16C20.5 18.4853 18.4853 20.5 16 20.5V21.5C19.0376 21.5 21.5 19.0376 21.5 16H20.5ZM16 1.5C18.4853 1.5 20.5 3.51472 20.5 6H21.5C21.5 2.96243 19.0376 0.5 16 0.5V1.5ZM6 0.5C2.96243 0.5 0.5 2.96243 0.5 6H1.5C1.5 3.51472 3.51472 1.5 6 1.5V0.5Z"
        fill="currentColor"
      />
    </SvgIcon>
  );
};

export default BlankCheckBoxIcon;
