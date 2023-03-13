import { SvgIcon, SvgIconProps } from "@mui/material";

const CheckmarkCircle = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm4.35,7.73-5.62,5.62a.48.48,0,0,1-.7,0L7.65,13a.5.5,0,0,1,0-.71l.53-.53a.48.48,0,0,1,.7,0l1.5,1.49,4.74-4.74a.5.5,0,0,1,.7,0l.53.53A.5.5,0,0,1,16.35,9.73Z" />
    </SvgIcon>
  );
};

export default CheckmarkCircle;
