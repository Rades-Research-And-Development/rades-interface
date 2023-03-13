import { SvgIcon, SvgIconProps } from "@mui/material";

const FolderSpecial = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M20,6H14.41a1,1,0,0,1-.7-.29L12.29,4.29a1,1,0,0,0-.7-.29H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V8A2,2,0,0,0,20,6Zm-6.09,6.14-2,1.7.61,2.54a.5.5,0,0,1-.74.55L9.54,15.56,7.3,16.93a.51.51,0,0,1-.75-.55l.61-2.54-2-1.7a.5.5,0,0,1,.28-.88l2.61-.2,1-2.43a.5.5,0,0,1,.92,0l1,2.43,2.6.2A.5.5,0,0,1,13.91,12.14Z" />
    </SvgIcon>
  );
};

export default FolderSpecial;
