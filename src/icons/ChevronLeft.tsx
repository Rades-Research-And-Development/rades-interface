import { SvgIcon, SvgIconProps } from "@mui/material";

const ChevronLeft = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M8.22,12.72A.75.75,0,0,1,8,12.19v-.38a.77.77,0,0,1,.22-.53l5.14-5.13a.5.5,0,0,1,.71,0l.71.71a.49.49,0,0,1,0,.7L10.33,12l4.45,4.44a.5.5,0,0,1,0,.71l-.71.7a.5.5,0,0,1-.71,0Z" />
    </SvgIcon>
  );
};

export default ChevronLeft;
