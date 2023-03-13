import { SvgIcon, SvgIconProps } from "@mui/material";

const ToggleIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 21 18" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 1.5C0 0.671573 0.671573 0 1.5 0H19.5C20.3284 0 21 0.671573 21 1.5C21 2.32843 20.3284 3 19.5 3H1.5C0.671573 3 0 2.32843 0 1.5Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 9C0 8.17157 0.671573 7.5 1.5 7.5H10.5C11.3284 7.5 12 8.17157 12 9C12 9.82843 11.3284 10.5 10.5 10.5H1.5C0.671573 10.5 0 9.82843 0 9Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 16.5C0 15.6716 0.671573 15 1.5 15H19.5C20.3284 15 21 15.6716 21 16.5C21 17.3284 20.3284 18 19.5 18H1.5C0.671573 18 0 17.3284 0 16.5Z"
          fill="currentColor"
        />
      </g>
    </SvgIcon>
  );
};

export default ToggleIcon;
