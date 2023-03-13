import { SvgIcon, SvgIconProps } from "@mui/material";

const OvalIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 14 14" {...props}>
      <circle
        cx="7"
        cy="7"
        r="6.5"
        // fill="#61A9FF"
        fillOpacity="0.06"
        stroke="currentColor"
      />
    </SvgIcon>
  );
};

export default OvalIcon;
