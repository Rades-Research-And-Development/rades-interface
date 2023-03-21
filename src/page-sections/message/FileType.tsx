import { Box, IconButton } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";
import DownloadOutlined from "icons/DownloadOutlined";
import React, { Fragment } from "react";

const FileType = () => {
  return (
    <Fragment>
      {downloadList.map((item) => (
        <FlexBetween key={item.id}>
          <FlexBox alignItems="center" gap={0.5}>
            <Box width={40}>
              <img src={item.image} width="100%" alt="file" />
            </Box>
            <Box>
              <H6 fontWeight={500}>{item.name}</H6>
              <Tiny lineHeight={1.5}>{item.size} MB</Tiny>
            </Box>
          </FlexBox>

          <IconButton>
            <DownloadOutlined sx={{ color: "text.disabled" }} />
          </IconButton>
        </FlexBetween>
      ))}
    </Fragment>
  );
};

const downloadList = [
  {
    id: 1,
    size: 3.5,
    name: "Wordpress for beginner",
    image: "/static/files-icon/pdf.svg",
  },
  {
    id: 2,
    size: 3.9,
    name: "Master in Node.js",
    image: "/static/files-icon/doc.svg",
  },
  {
    id: 3,
    size: 4.9,
    name: "Vue Zero to Hero",
    image: "/static/files-icon/jpg.svg",
  },
  {
    id: 4,
    size: 3.5,
    name: "Wordpress for beginner",
    image: "/static/files-icon/css.svg",
  },
  {
    id: 5,
    size: 3.9,
    name: "Master in Node.js",
    image: "/static/files-icon/doc.svg",
  },
];

export default FileType;
