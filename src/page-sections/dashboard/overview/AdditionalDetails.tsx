import { Card, Stack, SvgIconProps, useTheme } from "@mui/material";
import { alpha, Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, H6, Tiny } from "components/Typography";
import BriefcaseOutlined from "icons/BriefcaseOutlined";
import DateRange from "icons/DateRange";
import Education from "icons/Education";
import EmailOutlined from "icons/EmailOutlined";
import Globe from "icons/Globe";
import UserOutlined from "icons/UserOutlined";
import { FC } from "react";
import EditButton from "../EditButton";

const AdditionalDetails: FC = () => {
  const theme = useTheme();

  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween>
        <H5>Additional Details</H5>
        <EditButton />
      </FlexBetween>

      <Stack mt={3} spacing={2}>
        <ListItem
          title="Email"
          subTitle="Uilib@mgail.com"
          Icon={EmailOutlined}
          color={theme.palette.primary.main}
        />

        <ListItem
          title="Language"
          subTitle="English, Spanish"
          Icon={Globe}
          color={theme.palette.info.main}
        />

        <ListItem
          title="Nickname"
          subTitle="Pixy"
          Icon={UserOutlined}
          color={theme.palette.warning.main}
        />

        <ListItem
          title="Join Date"
          subTitle="Aug 15th, 2021"
          Icon={DateRange}
          color={theme.palette.success.main}
        />

        <ListItem
          title="Work History"
          subTitle="Theme Forest"
          Icon={BriefcaseOutlined}
          color={theme.palette.error.main}
        />

        <ListItem
          title="Education"
          subTitle="Cambridge University"
          Icon={Education}
          color={theme.palette.secondary.main}
        />
      </Stack>
    </Card>
  );
};

export default AdditionalDetails;

// ----------------------------------------------------
type ListItemProps = {
  color: string;
  title: string;
  subTitle: string;
  Icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};
// ----------------------------------------------------

function ListItem({ title, subTitle, Icon, color }: ListItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1.5}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{
          width: 30,
          height: 30,
          borderRadius: "4px",
          backgroundColor: alpha(color, 0.2),
        }}
      >
        <Icon sx={{ color }} />
      </Stack>
      <Box>
        <Tiny fontWeight={500}>{title}</Tiny>
        <H6 fontSize={12}>{subTitle}</H6>
      </Box>
    </Stack>
  );
}
