import { SvgIcon, SvgIconProps } from "@mui/material";

const Circle = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M22,12A10,10,0,1,1,12,2,10,10,0,0,1,22,12Z" />
    </SvgIcon>
  );
};

export default Circle;
