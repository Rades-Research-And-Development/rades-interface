import { SvgIcon, SvgIconProps } from "@mui/material";

const Birthday = (props: SvgIconProps) => {
  return (
    <SvgIcon viewBox="0 0 24 24" {...props}>
      <path d="M19,9H13V6.72A2,2,0,0,0,14,5a6.65,6.65,0,0,0-1.46-2.8.48.48,0,0,0-.4-.2h-.28a.48.48,0,0,0-.4.2A6.65,6.65,0,0,0,10,5a2,2,0,0,0,1,1.72V9H5a2,2,0,0,0-2,2v6a1,1,0,0,0,1,1v3a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V18a1,1,0,0,0,1-1V11A2,2,0,0,0,19,9ZM18,20H6V17.87a4,4,0,0,0,2.26-1.59,4.93,4.93,0,0,0,7.48,0A4,4,0,0,0,18,17.87Z" />
    </SvgIcon>
  );
};

export default Birthday;
