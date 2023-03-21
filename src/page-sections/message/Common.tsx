import { Box, SvgIconProps, Theme } from "@mui/material";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H6 } from "components/Typography";
import React, { FC } from "react";
import { lightTheme } from "../../constants";

// ---------------------------------------------------------
type CommonProps = {
  Icon: (props: SvgIconProps) => JSX.Element;
  amount: number;
  title: string;
};
// ---------------------------------------------------------

const Common: FC<CommonProps> = ({ Icon, amount, title }) => {
  return (
    <Box>
      <FlexRowAlign
        gap={0.5}
        flexDirection="column"
        sx={{
          width: 90,
          height: 70,
          borderRadius: "4px",
          color: "text.secondary",
          backgroundColor: (theme: Theme) =>
            lightTheme(theme) ? "action.hover" : "divider",
        }}
      >
        <Icon sx={{ color: "text.secondary" }} />
        <H6 fontSize={12} color="text.secondary">
          {amount}
        </H6>
      </FlexRowAlign>

      <H6 fontSize={12} textAlign="center" color="text.secondary" mt={1}>
        {title}
      </H6>
    </Box>
  );
};

export default Common;
