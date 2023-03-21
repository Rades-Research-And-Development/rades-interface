import { Box } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { Tiny } from "components/Typography";
import React, { FC } from "react";

const OutgoingMsg: FC = () => {
  return (
    <Box maxWidth={{ md: "60%", sm: "70%", xs: "80%" }} alignSelf="end">
      <FlexBox gap={1.5} justifyContent="end">
        <Box
          sx={{
            padding: 2,
            borderRadius: "8px",
            backgroundColor: "primary.main",
          }}
        >
          <Tiny display="block" color="white" fontWeight={500} lineHeight={1.7}>
            Hey, Pixy can we get on a quick call? i need to show you something
          </Tiny>
        </Box>
      </FlexBox>
      <Tiny mt={1} fontSize={10} fontWeight={500} textAlign="right">
        Today, 2:25pm
      </Tiny>
    </Box>
  );
};

export default OutgoingMsg;
