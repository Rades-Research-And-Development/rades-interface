import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import { H5, Span } from "components/Typography";
import { FC } from "react";
import ConnectionCard from "./ConnectionCard";

const connectionList = [
  {
    id: 1,
    name: "Miphoshka",
    position: "Visual Designer",
    connected: false,
    img: "/static/avatar/001-man.svg",
  },
  {
    id: 2,
    name: "Tim Carrey",
    position: "Visual Designer",
    connected: true,
    img: "/static/avatar/002-girl.svg",
  },
  {
    id: 3,
    name: "Edward Norton",
    position: "Visual Designer",
    connected: false,
    img: "/static/avatar/005-man-1.svg",
  },
  {
    id: 4,
    name: "Eva Mendes",
    position: "Visual Designer",
    connected: true,
    img: "/static/avatar/005-man-1.svg",
  },
  {
    id: 5,
    name: "Vida Lao",
    position: "Visual Designer",
    connected: false,
    img: "/static/avatar/001-man.svg",
  },
  {
    id: 6,
    name: "Angelina",
    position: "Visual Designer",
    connected: false,
    img: "/static/avatar/002-girl.svg",
  },
];

const Connections: FC = () => {
  return (
    <Box py={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexBetween flexWrap="wrap">
            <H5 mb={1}>
              My Connections{" "}
              <Span fontSize={12} fontWeight={500} color="text.disabled">
                (100+ Resources)
              </Span>
            </H5>

            <AppSelect>
              <option value="active">Active</option>
              <option value="deactive">Deactive</option>
            </AppSelect>
          </FlexBetween>
        </Grid>

        {connectionList.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <ConnectionCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Connections;
