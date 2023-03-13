import { SvgIcon, SvgIconProps } from "@mui/material";

const Image = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M6,7A2,2,0,1,1,8,9,2,2,0,0,1,6,7Zm15.8,9.73-6-8a.76.76,0,0,0-1.2,0l-4,5.17a.5.5,0,0,1-.78,0L7.63,11.24a.75.75,0,0,0-1.17,0L2.21,16.73a1,1,0,0,0-.21.61v.91a.76.76,0,0,0,.75.75h18.5a.76.76,0,0,0,.75-.75v-.92A1,1,0,0,0,21.8,16.73Z" />
    </SvgIcon>
  );
};

export default Image;
