import { Card, SvgIconProps } from "@mui/material";
import { H6, Tiny } from "components/Typography";
import React, { FC } from "react";

// -------------------------------------------------
type DocumentCardProps = {
  document: {
    Icon?: (props: SvgIconProps<"svg", {}>) => JSX.Element;
    title: string;
    file: number;
    img?: string;
  };
};
// -------------------------------------------------

const DocumentCard: FC<DocumentCardProps> = ({ document }) => {
  return (
    <Card
      sx={{
        padding: 3,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {document.Icon && (
        <document.Icon sx={{ fontSize: 74, color: "text.disabled" }} />
      )}
      {document.img && (
        <img
          src={document.img}
          alt={document.title}
          width={74}
          style={{ marginBottom: 8 }}
        />
      )}
      <H6>{document.title}</H6>
      <Tiny>{document.file} files</Tiny>
    </Card>
  );
};

export default DocumentCard;
