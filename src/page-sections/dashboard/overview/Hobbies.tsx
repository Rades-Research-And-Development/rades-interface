import { Card, Chip, Stack, styled } from "@mui/material";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5 } from "components/Typography";
import { FC } from "react";
import EditButton from "../EditButton";

const StyledChip = styled(Chip)(({ theme }) => ({
  fontSize: 12,
  borderRadius: 4,
  marginRight: 16,
  fontWeight: 500,
  marginBottom: 16,
  backgroundColor: theme.palette.action.hover,
}));

const Hobbies: FC = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween mb={3}>
        <H5>Hobbies</H5>
        <EditButton />
      </FlexBetween>

      <Stack direction="row" flexWrap="wrap">
        <StyledChip label="Dota 2" />
        <StyledChip label="Dog" />
        <StyledChip label="Basketball" />
        <StyledChip label="Football" />
        <StyledChip label="Cricket" />
        <StyledChip label="Skateboarding" />
        <StyledChip label="Rock Climbing" />
        <StyledChip label="Painting" />
        <StyledChip label="Cars" />
        <StyledChip label="Video Games" />
        <StyledChip label="Climbing" />
        <StyledChip label="Hockey" />
        <StyledChip label="Table Tennis" />
      </Stack>
    </Card>
  );
};

export default Hobbies;
