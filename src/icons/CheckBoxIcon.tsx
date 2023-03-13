import { SvgIcon, SvgIconProps } from "@mui/material";

const CheckBoxIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 20 20" {...props}>
      <path
        d="M0 5C0 2.23858 2.23858 0 5 0H15C17.7614 0 20 2.23858 20 5V15C20 17.7614 17.7614 20 15 20H5C2.23858 20 0 17.7614 0 15V5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 8.2003L10.2608 11.8L9.01437 13L7.76797 11.8L7.77489 11.7933L6 10.0661L7.24674 8.8661L9.02129 10.5936L12.7536 7L14 8.2003Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default CheckBoxIcon;
