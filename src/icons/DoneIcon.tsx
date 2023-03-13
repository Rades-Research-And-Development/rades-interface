import { SvgIcon, SvgIconProps } from "@mui/material";

const DoneIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M19.85,7.25,9.25,17.85a.5.5,0,0,1-.71,0L3.15,12.46a.5.5,0,0,1,0-.71l.7-.7a.5.5,0,0,1,.71,0l4.33,4.33,9.55-9.55a.51.51,0,0,1,.71,0l.7.71A.5.5,0,0,1,19.85,7.25Z" />
    </SvgIcon>
  );
};

export default DoneIcon;
