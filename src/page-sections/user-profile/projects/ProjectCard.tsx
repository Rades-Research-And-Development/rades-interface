import {
  AvatarGroup,
  Card,
  LinearProgress,
  Stack,
  styled,
  SvgIconProps,
} from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBetween from "components/flexbox/FlexBetween";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import { H5, H6, Tiny, Small } from "components/Typography";
import { FC } from "react";

// styled components
const IconWrapper = styled(FlexRowAlign)(({ theme }) => ({
  width: 35,
  height: 30,
  borderRadius: "4px",
  backgroundColor: theme.palette.primary[100],
}));

// ---------------------------------------------------------
type ProjectCardProps = {
  project: {
    icon: (props: SvgIconProps<"svg", {}>) => JSX.Element;
    status: string;
    title: string;
    description: string;
    value: number;
  };
};
// ---------------------------------------------------------

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const getStatusColor = (status: string) => {
    if (status === "Pending") return "text.disabled";
    if (status === "In Progress") return "primary.main";
    return "success.main";
  };
  return (
    <Card sx={{ padding: 3 }}>
      <FlexBetween>
        <IconWrapper>
          <project.icon sx={{ color: "primary.main" }} />
        </IconWrapper>

        <Tiny
          fontSize={10}
          fontWeight={500}
          sx={{
            color: "white",
            padding: "3px 12px",
            borderRadius: "4px",
            backgroundColor: getStatusColor(project.status),
          }}
        >
          {project.status}
        </Tiny>
      </FlexBetween>

      <H5 my={2}>{project.title}</H5>
      <Tiny fontWeight={500}>{project.description}</Tiny>

      <Stack my={2} direction="row" alignItems="center" spacing={2}>
        <LinearProgress
          value={project.value}
          variant="determinate"
          sx={{ flex: 1 }}
        />
        <H6 fontSize={12}>{project.value}%</H6>
      </Stack>

      <FlexBetween>
        <AvatarGroup>
          <AppAvatar
            src="/static/avatar/001-man.svg"
            sx={{ width: 25, height: 25 }}
          />
          <AppAvatar
            src="/static/avatar/002-girl.svg"
            sx={{ width: 25, height: 25 }}
          />
        </AvatarGroup>

        <Small fontSize={12} color="text.secondary">
          Due In 2 Days
        </Small>
      </FlexBetween>
    </Card>
  );
};

export default ProjectCard;
