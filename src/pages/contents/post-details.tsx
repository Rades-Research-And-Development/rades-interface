import { Add, MoreHoriz } from "@mui/icons-material";
import {
  AvatarGroup,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  IconButton,
  styled,
} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import LinearProgress from "@mui/material/LinearProgress";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexBox from "components/flexbox/FlexBox";
import MoreOptions from "components/MoreOptions";
import RoundCheckBox from "components/RoundCheckBox";
import { H3, H5, H6, Small, Tiny } from "components/Typography";
import { FC, MouseEvent, useState } from "react";

const StyledAvatar = styled(AppAvatar)(() => ({
  width: 36,
  height: 36,
  borderColor: "transparent",
  backgroundColor: "transparent",
}));

const RightContentWrapper = styled(Box)(() => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const ProjectDetails: FC = () => {
  const [fileEl, setFileEl] = useState<null | HTMLElement>(null);
  const [projectEl, setProjectEl] = useState<null | HTMLElement>(null);

  // -----------------------------------------------------------------------
  const handleProjectMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setProjectEl(event.currentTarget);
  };
  const handleProjectMoreClose = () => setProjectEl(null);
  // -----------------------------------------------------------------------
  const handleFileMoreOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setFileEl(event.currentTarget);
  };
  const handleFileMoreClose = () => setFileEl(null);
  // -----------------------------------------------------------------------

  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <Box padding={3}>
              <FlexBetween>
                <H3 mb={1}>Project Nightfall</H3>
                <IconButton sx={{ padding: 0 }} onClick={handleProjectMoreOpen}>
                  <MoreHoriz />
                </IconButton>

                <MoreOptions
                  anchorEl={projectEl}
                  handleMoreClose={handleProjectMoreClose}
                />
              </FlexBetween>

              <Small color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor ut labore et dolore magna aliqua. elit, sed do eiusmod
                tempor ut labore et dolore magna aliqua. sed do eiusmod tempor
                ut labore.
              </Small>
            </Box>

            <Divider />

            <Box padding={3}>
              <Grid container spacing={3}>
                <Grid item sm={7} xs={12}>
                  <H5 mb={2}>Tasks</H5>
                  {tasks.map((task) => (
                    <FormControlLabel
                      key={task.title}
                      control={
                        <RoundCheckBox checked={task.status === "Completed"} />
                      }
                      label={
                        <Box>
                          <H6 lineHeight={1} mb={0.3}>
                            {task.title}
                          </H6>
                          <Tiny color="text.secondary" fontWeight={500}>
                            {task.status}
                          </Tiny>
                        </Box>
                      }
                      sx={{
                        margin: 0,
                        width: "100%",
                        cursor: "default",
                        paddingBottom: 1.5,
                        alignItems: "flex-start",
                        "& .MuiCheckbox-root": {
                          padding: 0,
                          paddingRight: 1.2,
                        },
                        "&:last-child": { paddingBottom: 0 },
                      }}
                    />
                  ))}
                </Grid>

                <Grid item sm={5} xs={12}>
                  <H5 mb={2}>Team</H5>
                  <AvatarGroup
                    sx={{
                      alignItems: "center",
                      justifyContent: "flex-end",
                      "& .MuiAvatar-root": {
                        boxSizing: "border-box",
                        border: 0,
                      },
                    }}
                  >
                    <AppAvatar
                      alt="Remy Sharp"
                      src="/static/avatar/001-man.svg"
                    />
                    <AppAvatar
                      alt="Travis Howard"
                      src="/static/avatar/002-girl.svg"
                    />
                    <AppAvatar
                      alt="Cindy Baker"
                      src="/static/avatar/003-boy.svg"
                    />

                    <Button variant="dashed" sx={{ ml: 1 }}>
                      <Add fontSize="small" sx={{ color: "grey.600" }} />
                    </Button>
                  </AvatarGroup>

                  <Box mt={2}>
                    <FlexBetween py={1}>
                      <H6 fontWeight={600}>Project Progress</H6>
                      <H6>32%</H6>
                    </FlexBetween>

                    <LinearProgress variant="determinate" value={32} />
                  </Box>
                </Grid>
              </Grid>
            </Box>

            <Divider />

            <Box padding={3}>
              <H5 mb={2}>File Attachment</H5>
              <Grid container spacing={3}>
                {files.map((item) => (
                  <Grid item sm={6} xs={12} key={item.id}>
                    <FlexBetween>
                      <FlexBox alignItems="center">
                        <Box marginRight={1.5} height={40} width={40}>
                          <img src={item.image} alt="File Type" width="100%" />
                        </Box>

                        <Box>
                          <H6>{item.title}</H6>
                          <FlexBox alignItems="center">
                            <Tiny mr={2}>3mb</Tiny>
                            <FlexBox alignItems="center">
                              <Box
                                mr={1}
                                width="4px"
                                height="4px"
                                borderRadius={1}
                                bgcolor="text.disabled"
                                display="inline-block"
                              />
                              <Tiny display="inline-block">5 days ago</Tiny>
                            </FlexBox>
                          </FlexBox>
                        </Box>
                      </FlexBox>

                      <IconButton onClick={handleFileMoreOpen}>
                        <MoreHoriz fontSize="small" color="disabled" />
                      </IconButton>
                    </FlexBetween>
                  </Grid>
                ))}

                <MoreOptions
                  anchorEl={fileEl}
                  handleMoreClose={handleFileMoreClose}
                />
              </Grid>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <RightContentWrapper>
            <Card sx={{ padding: 3, height: "48%" }}>
              <H5 mb={2}>Project Tools</H5>

              {projectTools.map((item) => (
                <FlexBox alignItems="center" mb={2} key={item.id}>
                  <StyledAvatar alt="Logo" src={item.image} />

                  <Box ml={1.5}>
                    <H6>{item.company}</H6>
                    <Tiny color="text.secondary">{item.position}</Tiny>
                  </Box>
                </FlexBox>
              ))}
            </Card>

            <Card sx={{ padding: 3, height: "48%" }}>
              <H5 mb={2}>Project Stack</H5>

              {stacks.map((item) => (
                <FlexBox alignItems="center" mb={2} key={item.id}>
                  <StyledAvatar alt="Logo" src={item.image} />
                  <Box ml={1.5}>
                    <H6>{item.company}</H6>
                    <Tiny color="text.secondary">{item.position}</Tiny>
                  </Box>
                </FlexBox>
              ))}
            </Card>
          </RightContentWrapper>
        </Grid>
      </Grid>
    </Box>
  );
};

const tasks = [
  {
    title: "Design",
    status: "Completed",
  },
  {
    title: "Development",
    status: "Ongoing",
  },
  {
    title: "Back End Development",
    status: "Upcoming",
  },
];

const files = [
  {
    id: 1,
    title: "Design Homepage",
    image: "/static/file-type/jpg.svg",
  },
  {
    id: 2,
    title: "Preliminary Sketches",
    image: "/static/file-type/zip.svg",
  },
  {
    id: 3,
    title: "Preliminary Sketches",
    image: "/static/file-type/pdf.svg",
  },
  {
    id: 4,
    title: "Preliminary Sketches",
    image: "/static/file-type/raw.svg",
  },
];

const projectTools = [
  {
    id: 1,
    company: "Adobe Illustrator",
    image: "/static/tools-logo/illustrator.svg",
    position: "Design Software",
  },
  {
    id: 2,
    company: "Sketch",
    image: "/static/tools-logo/sketch.svg",
    position: "Design Software",
  },
  {
    id: 3,
    company: "Adobe Photoshop",
    image: "/static/tools-logo/photoshop.svg",
    position: "Design Software",
  },
];

const stacks = [
  {
    id: 1,
    company: "HTML5",
    image: "/static/tools-logo/html.svg",
    position: "Code",
  },
  {
    id: 2,
    company: "VueJS",
    image: "/static/tools-logo/vue.svg",
    position: "Code",
  },
  {
    id: 3,
    company: "Sass",
    image: "/static/tools-logo/sass.svg",
    position: "Code",
  },
];

export default ProjectDetails;
