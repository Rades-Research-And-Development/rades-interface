import { MoreHoriz } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Tiny } from "components/Typography";
import { FC, MouseEvent } from "react";

// component interface
interface TrendingNFTsProps {
  item: {
    id: number;
    title: string;
    date: string;
    status: string;
  };
  handleTodoMore?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const TrendingNFTs: FC<TrendingNFTsProps> = ({ item, handleTodoMore }) => {
  let statusColor;
  if (item.status === "Completed") {
    statusColor = "success.main";
  } else if (item.status === "Pending") {
    statusColor = "info.main";
  } else {
    statusColor = "primary.main";
  }
  return (
    <FlexBox justifyContent="space-between" alignItems="center">
      <FlexBox alignItems="center">
        <Box
          sx={{
            width: 32,
            height: 32,
            opacity: 0.8,
            borderRadius: "4px",
            backgroundColor: statusColor,
          }}
        />
        <Box ml="1rem">
          <H6>{item.title}</H6>
          <Tiny color="text.secondary">{item.date}</Tiny>
        </Box>
      </FlexBox>
      <IconButton onClick={handleTodoMore}>
        <MoreHoriz sx={{ color: "text.disabled" }} />
      </IconButton>
    </FlexBox>
  );
};

export default TrendingNFTs;
