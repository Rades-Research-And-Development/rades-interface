import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import Behance from "icons/Behance";
import Car from "icons/Car";
import City from "icons/City";
import Labels from "icons/Labels";
import Launch from "icons/Launch";
import Layers from "icons/Layers";
import LiteCoin from "icons/LiteCoin";
import Luck from "icons/Luck";
import MessagePlay from "icons/MessagePlay";
import { FC } from "react";
import Books from "./Book";
import ProjectCard from "./ProjectCard";

const Projects: FC = () => {
  return (
    <Box py={3}>
      <Grid container spacing={3}>
        <Grid item md={12} sm={12} xs={12}>
          <Books />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
