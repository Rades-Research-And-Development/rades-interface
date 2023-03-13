import { Card, IconButton, LinearProgress, Stack, styled } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H3, H6, Span, Tiny } from "components/Typography";
import MoreHorizontal from "icons/MoreHorizontal";
import numeral from "numeral";
import { FC } from "react";

// styled components
const IconWrapper = styled(FlexRowAlign)(({ theme }) => ({
  width: 28,
  height: 28,
  borderRadius: "4px",
  backgroundColor: theme.palette.primary[100],
  "& .MuiSvgIcon-root": { fontSize: 18 },
}));

// -----------------------------------------------------------
type CampaignCardProps = {
  campaign: {
    title: string;
    amount: number;
    impression: number;
    progressValue: number;
    icon: JSX.Element;
  };
};
// -----------------------------------------------------------

const CampaignCard: FC<CampaignCardProps> = ({ campaign }) => {
  const color = campaign.impression > 0 ? "success.main" : "error.main";
  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconWrapper>{campaign.icon}</IconWrapper>
          <H6 color="text.secondary">{campaign.title}</H6>
        </Stack>

        <IconButton>
          <MoreHorizontal sx={{ color: "text.disabled" }} />
        </IconButton>
      </FlexBetween>

      <FlexBetween my={2}>
        <H3>{numeral(campaign.amount).format("0.0a")}</H3>
        <FlexBox fontWeight={600} alignItems="center">
          <Span sx={{ color }}>{campaign.impression}%</Span>{" "}
          <Tiny color="text.secondary" mx={0.5}>
            Subscriber growth
          </Tiny>
        </FlexBox>
      </FlexBetween>

      <Stack direction="row" alignItems="center" spacing={2}>
        <LinearProgress
          value={campaign.progressValue}
          variant="determinate"
          sx={{ flex: 1 }}
        />
        <H6 fontSize={12}>{campaign.progressValue}%</H6>
      </Stack>
    </Card>
  );
};

export default CampaignCard;
