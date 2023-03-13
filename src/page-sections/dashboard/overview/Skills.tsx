import { Card, Grid, IconButton, Stack, SvgIconProps } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Span } from "components/Typography";
import Add from "icons/Add";
import CheckmarkCircle from "icons/CheckmarkCircle";
import { FC } from "react";
import EditButton from "../EditButton";

const listItem = [
  {
    id: 1,
    title: "Graphic Design",
    amount: 40,
  },
  {
    id: 2,
    title: "Font End Dev",
    amount: 32,
  },
  {
    id: 3,
    title: "Figma Design",
    amount: 50,
  },
  {
    id: 4,
    title: "Figma Design",
    amount: 50,
    complete: true,
  },
  {
    id: 5,
    title: "Graphic Design",
    amount: 40,
  },
  {
    id: 6,
    title: "Font End Dev",
    amount: 32,
  },
];

const Skills: FC = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween mb={3}>
        <H5>Skills</H5>
        <EditButton />
      </FlexBetween>

      <Grid container spacing={4}>
        {listItem.map((item) => (
          <Grid item lg={4} sm={6} xs={12} key={item.id}>
            <ListItem
              Icon={Add}
              title={item.title}
              subTitle={item.amount}
              complete={item.complete}
            />
          </Grid>
        ))}
      </Grid>
    </Card>
  );
};

export default Skills;

// ----------------------------------------------------
type ListItemProps = {
  title: string;
  subTitle: number;
  complete?: boolean;
  Icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
};
// ----------------------------------------------------

function ListItem({ title, subTitle, Icon, complete }: ListItemProps) {
  const bgColor = "action.hover";
  return (
    <Stack
      direction="row"
      alignItems="center"
      width="100%"
      height="100%"
      spacing={1.5}
    >
      <IconButton
        sx={{
          border: "1px solid black",
          borderRadius: "24%",
          borderColor: complete ? "primary.main" : "divider",
          backgroundColor: complete ? "primary.main" : "transparent",
        }}
      >
        {complete ? (
          <CheckmarkCircle sx={{ color: "white", fontSize: 19 }} />
        ) : (
          <Icon sx={{ color: "text.primary", fontSize: 19 }} />
        )}
      </IconButton>

      <FlexBox
        px={2}
        width="100%"
        height="100%"
        borderRadius="4px"
        alignItems="center"
        bgcolor={complete ? "primary.main" : bgColor}
      >
        <H6 fontSize={12} color={complete ? "white" : "text.primary"}>
          {title} -{" "}
          <Span color={complete ? "white" : "text.disabled"}>{subTitle}</Span>
        </H6>
      </FlexBox>
    </Stack>
  );
}
