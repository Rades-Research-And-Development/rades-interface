import { SvgIcon, SvgIconProps } from "@mui/material";

const MoreVertical = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M10,6a2,2,0,1,1,2,2A2,2,0,0,1,10,6Zm2,4a2,2,0,1,0,2,2A2,2,0,0,0,12,10Zm0,6a2,2,0,1,0,2,2A2,2,0,0,0,12,16Z" />
    </SvgIcon>
  );
};

export default MoreVertical;
