import { ArrowDownward, ArrowUpward, MoreHoriz } from "@mui/icons-material";
import { Box, IconButton, useTheme } from "@mui/material";
import { H6, Small, Tiny } from "components/Typography";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { FC, MouseEvent, useState } from "react";
// ? TODO: combine Element for side bar in home page

import { Card } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import MoreOptions from "components/MoreOptions";
import { H5 } from "components/Typography";

// component interface
interface TrendingNFTsProps {
  handleTodoMore?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const HotNFTs: FC<TrendingNFTsProps> = ({ handleTodoMore }) => {
  const theme = useTheme();
  const randomPer = Number((Math.random() * 130 + 1).toFixed(2));
  const [todoEl, setTodoEl] = useState<null | HTMLElement>(null);
  const handleTodoMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setTodoEl(event.currentTarget);
  };
  const handleTodoMoreClose = () => setTodoEl(null);

  return (
    <Card sx={{ padding: 3 }}>
      <H5 mb={2}>Hot Content NFTs</H5>
      {TrendingNFTsList[0] ? (
        TrendingNFTsList?.slice(0, 4).map((item, _) => {
          const randomPer = Number((Math.random() * 130 + 1).toFixed(2));
          return (
            <Box mb={3} key={_} sx={{ "&:last-child": { mb: 0 } }}>
              <FlexBox justifyContent="space-between" alignItems="center">
                <FlexBox alignItems="center">
                  <Box
                    sx={{
                      width: 32,
                      height: 32,
                      opacity: 0.8,
                      borderRadius: "4px",
                      backgroundColor: () => {
                        let statusColor;
                        if (item.status === "Completed") {
                          statusColor = "success.main";
                        } else if (item.status === "Pending") {
                          statusColor = "info.main";
                        } else {
                          statusColor = "primary.main";
                        }
                        return statusColor;
                      },
                    }}
                  />
                  <Box ml="1rem">
                    <H6>{item.title}</H6>
                    <Tiny color="text.secondary">{item.date}</Tiny>
                  </Box>
                </FlexBox>

                <IconButton
                  // onClick={handleTodoMore}
                  sx={{ borderRadius: "10px", background: "none" }}
                >
                  <Small fontWeight={800} fontSize={13}>
                    {(Math.random() * 5 + 1).toFixed(2)}
                  </Small>
                  <AppAvatar
                    // src={`${row.metadata.image}`}
                    src={`/static/crypto/ETH.png`}
                    sx={{
                      borderRadius: "50%",
                      width: 20,
                      height: 20,
                    }}
                  />
                  <FlexRowAlign
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                    }}
                  >
                    {Math.floor(randomPer) % 2 === 0 && (
                      <ArrowUpward
                        sx={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: theme.palette.success.main,
                        }}
                      />
                    )}
                    {Math.floor(randomPer) % 2 === 1 && (
                      <ArrowDownward
                        sx={{
                          fontSize: 14,
                          fontWeight: 600,
                          color: theme.palette.primary.red,
                        }}
                      />
                    )}
                  </FlexRowAlign>

                  <Small
                    fontWeight={800}
                    fontSize={15}
                    color={
                      Math.floor(randomPer) % 2 === 0
                        ? theme?.palette.success.main
                        : theme.palette.primary.red
                    }
                  >
                    {Math.floor(randomPer) % 2 === 0}
                    {randomPer}%
                  </Small>
                  <MoreHoriz sx={{ color: "text.disabled", paddingLeft: 1 }} />
                </IconButton>
              </FlexBox>
            </Box>
          );
        })
      ) : (
        <Stack spacing={1}>
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton variant="circular" width={40} height={40} />
        </Stack>
      )}

      <MoreOptions anchorEl={todoEl} handleMoreClose={handleTodoMoreClose} />
    </Card>
  );
};

export default HotNFTs;

const TrendingNFTsList = [
  {
    id: 1,
    title: "Create Minimal Logo",
    date: "Due In 2 Days",
    status: "Pending",
  },
  {
    id: 2,
    title: "Stock Market Exchange",
    date: "Due In 3 Days",
    status: "Processing",
  },
  {
    id: 3,
    title: "Shopping & Groccery",
    date: "Due In 5 days",
    status: "Pending",
  },
  {
    id: 4,
    title: "Football Match",
    date: "Due In 1 Day",
    status: "Completed",
  },
  {
    id: 5,
    title: "Stock Market Exchange",
    date: "Due In 3 Days",
    status: "Processing",
  },
];
