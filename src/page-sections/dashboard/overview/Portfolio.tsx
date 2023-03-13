import { Edit } from "@mui/icons-material";
import { Button, Card, CardMedia, Grid, styled } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import { H5, H6, Small, Tiny } from "components/Typography";
import Heart from "icons/Heart";
import { FC } from "react";
import { lightTheme } from "../../../constants";

const StyledSmall = styled(Small)(({ theme }) => ({
  padding: "3px 12px",
  borderRadius: "4px",
  display: "inline-block",
  fontSize: 12,
  backgroundColor: theme.palette.action.hover,
  color: theme.palette.text.secondary,
}));

const DateWrapper = styled(FlexBox)(({ theme }) => ({
  top: 10,
  right: 10,
  width: 40,
  height: 50,
  borderRadius: "4px",
  alignItems: "center",
  position: "absolute",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: lightTheme(theme) ? "white" : theme.palette.primary[400],
}));

const Portfolio: FC = () => {
  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween mb={3}>
        <H5>Portfolio</H5>
        <Button variant="outlined" startIcon={<Edit />}>
          Add new
        </Button>
      </FlexBetween>

      <Grid container spacing={3}>
        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio
            tag="Minimal"
            title="Hollow Purple"
            date="12.00 Nov 21, 2021"
            imgLink="/static/portfolio/1.png"
          />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio
            tag="Dark"
            title="Red Blood"
            date="12.00 Nov 21, 2021"
            imgLink="/static/portfolio/2.png"
          />
        </Grid>

        <Grid item lg={4} md={6} xs={12}>
          <SinglePortfolio
            tag="Light"
            title="Lime Blue"
            date="12.00 Nov 21, 2021"
            imgLink="/static/portfolio/3.png"
          />
        </Grid>
      </Grid>
    </Card>
  );
};

export default Portfolio;

// -------------------------------------------------------
type SinglePortfolioProps = {
  tag: string;
  date: string;
  title: string;
  imgLink: string;
};
// -------------------------------------------------------

function SinglePortfolio({ tag, date, title, imgLink }: SinglePortfolioProps) {
  return (
    <Card
      sx={{
        position: "relative",
        border: "1px solid black",
        borderColor: "divider",
        boxShadow: 0,
      }}
    >
      <CardMedia component="img" image={imgLink} height={152} />

      <DateWrapper>
        <H6>12</H6>
        <Tiny>Jan</Tiny>
      </DateWrapper>

      <CardContent sx={{ paddingBottom: "16px !important" }}>
        <FlexBox justifyContent="space-between">
          <StyledSmall>{tag}</StyledSmall>

          <IconButton size="small">
            <Heart sx={{ fontSize: 17, color: "text.disabled" }} />
          </IconButton>
        </FlexBox>

        <Box flexWrap="wrap">
          <Box mt={1.5}>
            <H6>{title}</H6>
            <Tiny fontWeight={500}>{date}</Tiny>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
