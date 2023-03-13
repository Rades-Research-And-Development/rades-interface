import { Edit } from "@mui/icons-material";
import { IconButton, IconButtonProps } from "@mui/material";
import { FC } from "react";

const EditButton: FC<IconButtonProps> = (props) => {
  return (
    <IconButton {...props}>
      <Edit sx={{ fontSize: 15, color: "text.secondary" }} />
    </IconButton>
  );
};

export default EditButton;
