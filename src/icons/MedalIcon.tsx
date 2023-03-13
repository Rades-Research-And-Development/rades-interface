import { SvgIcon, SvgIconProps } from "@mui/material";

const MedalIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 18 24" {...props}>
      <path
        d="M11.9995 16.5C16.1416 16.5 19.4995 13.1421 19.4995 9C19.4995 4.85786 16.1416 1.5 11.9995 1.5C7.85738 1.5 4.49951 4.85786 4.49951 9C4.49951 13.1421 7.85738 16.5 11.9995 16.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0"
      />
      <path
        d="M11.9995 13.5C14.4848 13.5 16.4995 11.4853 16.4995 9C16.4995 6.51472 14.4848 4.5 11.9995 4.5C9.51423 4.5 7.49951 6.51472 7.49951 9C7.49951 11.4853 9.51423 13.5 11.9995 13.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0"
      />
      <path
        d="M16.5 15V22.5005L11.9993 20.2505L7.5 22.5005V15.0007"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fillOpacity="0"
      />
    </SvgIcon>
  );
};

export default MedalIcon;
