import { SvgIcon, SvgIconProps } from "@mui/material";

const DownloadTo = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M19,18.5v1a.5.5,0,0,1-.5.5H5.5a.5.5,0,0,1-.5-.5v-1a.5.5,0,0,1,.5-.5h13A.5.5,0,0,1,19,18.5Zm-7.35-2.65a.48.48,0,0,0,.7,0l5.79-5.79a.5.5,0,0,0,0-.71l-.2-.2A.49.49,0,0,0,17.58,9H15V3.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V9H6.42a.49.49,0,0,0-.36.15l-.2.2a.5.5,0,0,0,0,.71Z" />
    </SvgIcon>
  );
};

export default DownloadTo;
