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
import ProjectCard from "./ProjectCard";

const projectList = [
  {
    id: 1,
    title: "Create Minimal Logo",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: Behance,
    status: "Pending",
    value: 70,
  },
  {
    id: 2,
    title: "Make a Delivery Logo",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: Car,
    status: "In Progress",
    value: 50,
  },
  {
    id: 3,
    title: "Constraction Site",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: City,
    status: "Complete",
    value: 100,
  },
  {
    id: 4,
    title: "Make a Delivery Logo",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: Launch,
    status: "In Progress",
    value: 50,
  },
  {
    id: 5,
    title: "Constraction Site",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: Layers,
    status: "Complete",
    value: 100,
  },
  {
    id: 6,
    title: "Create Minimal Logo",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: LiteCoin,
    status: "Pending",
    value: 70,
  },
  {
    id: 7,
    title: "Constraction Site",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: Labels,
    status: "Complete",
    value: 100,
  },
  {
    id: 8,
    title: "Create Minimal Logo",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: Luck,
    status: "Pending",
    value: 70,
  },
  {
    id: 9,
    title: "Make a Delivery Logo",
    description:
      "Minimalistic logo for fitness appk, the project will get brand identity when the get recognized...",
    icon: MessagePlay,
    status: "In Progress",
    value: 50,
  },
];

const Projects: FC = () => {
  return (
    <Box py={3}>
      <Grid container spacing={3}>
        {projectList.map((item) => (
          <Grid item md={4} sm={6} xs={12} key={item.id}>
            <ProjectCard project={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
