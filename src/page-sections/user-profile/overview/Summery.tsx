import { Card } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Paragraph } from "components/Typography";
import React from "react";
import EditButton from "../EditButton";

const Summery = () => {
  return (
    <Card sx={{ padding: 3, border: "2px solid black" }}>
      <FlexBetween>
        <H5>Summary</H5>
        <EditButton />
      </FlexBetween>

      <Paragraph mt={2} fontWeight={400}>
        No description...
      </Paragraph>
    </Card>
  );
};

export default Summery;
