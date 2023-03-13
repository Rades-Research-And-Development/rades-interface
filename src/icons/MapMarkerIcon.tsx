import { SvgIcon, SvgIconProps } from "@mui/material";

const MapMarkerIcon = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14,10a2,2,0,1,1-2-2A2,2,0,0,1,14,10ZM12,4a6,6,0,0,0-6,6c0,2.8,1.18,3.74,2.82,5A9.17,9.17,0,0,1,12,18.73,9.25,9.25,0,0,1,15.18,15C16.82,13.74,18,12.8,18,10a6,6,0,0,0-6-6m0-2a8,8,0,0,1,8,8c0,6.22-5.05,6.17-6.26,9.78l-.51,1.54a1,1,0,0,1-1,.68h-.56a1,1,0,0,1-1-.68l-.51-1.54C9.05,16.17,4,16.22,4,10a8,8,0,0,1,8-8Z" />
    </SvgIcon>
  );
};

export default MapMarkerIcon;
