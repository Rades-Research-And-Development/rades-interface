import { Card, Stack, styled, Table, TableRow, useTheme } from "@mui/material";
import AvatarGroup from "@mui/material/AvatarGroup";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { alpha, Box } from "@mui/system";
import AppAvatar from "components/avatars/AppAvatar";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import Scrollbar from "components/ScrollBar";
import { H5, H6, Small, Tiny } from "components/Typography";
import InvertColors from "icons/InvertColors";
import KeyframeBezierIn from "icons/KeyframeBezierIn";
import PaletteOutlined from "icons/PaletteOutlined";
import { FC } from "react";

// styled components
const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  justifyContent: "flex-end",
  "& .MuiAvatarGroup-avatar": {
    width: 25,
    height: 25,
    fontSize: 12,
  },
}));

const IconWrapper = styled(FlexRowAlign)<{ color: string }>(({ color }) => ({
  width: 35,
  height: 30,
  borderRadius: "4px",
  backgroundColor: alpha(color, 0.2),
}));

const StyledTableCell = styled(TableCell)(() => ({
  paddingBottom: 0,
  borderBottom: 0,
  "&:nth-of-type(2)": { textAlign: "center" },
}));

const Teams: FC = () => {
  const theme = useTheme();
  const teamList = [
    {
      id: 1,
      Icon: KeyframeBezierIn,
      company: "Ui Lib",
      position: "Software Engineers",
      date: "Jan 12, 2021",
      color: theme.palette.primary.main,
    },
    {
      id: 2,
      Icon: PaletteOutlined,
      company: "Team Uko",
      position: "Visual Designers",
      date: "Jan 22, 2021",
      color: theme.palette.info.main,
    },
    {
      id: 3,
      Icon: InvertColors,
      company: "Team Olly",
      position: "Web Developers",
      date: "Jan 12, 2021",
      color: theme.palette.warning.main,
    },
  ];

  return (
    <Card sx={{ padding: 3 }}>
      <H5 mb={1}>Teams</H5>

      <Scrollbar autoHide={false}>
        <Table sx={{ minWidth: 600 }}>
          <TableBody>
            {teamList.map((item) => (
              <TableRow key={item.id}>
                <StyledTableCell>
                  <Stack direction="row" spacing={2}>
                    <IconWrapper color={item.color}>
                      <item.Icon sx={{ color: item.color }} />
                    </IconWrapper>

                    <Box>
                      <H6>{item.company}</H6>
                      <Tiny fontSize={12} fontWeight={500}>
                        {item.position}
                      </Tiny>
                    </Box>
                  </Stack>
                </StyledTableCell>

                <StyledTableCell>
                  <Small color="text.secondary">Formed {item.date}</Small>
                </StyledTableCell>

                <StyledTableCell>
                  <Stack direction="row" justifyContent="flex-end" spacing={2}>
                    <StyledAvatarGroup max={3}>
                      <AppAvatar src="/static/avatar/001-man.svg" />
                      <AppAvatar src="/static/avatar/002-girl.svg" />
                      <AppAvatar src="/static/avatar/003-boy.svg" />
                      <AppAvatar src="/static/avatar/003-boy.svg" />
                      <AppAvatar src="/static/avatar/003-boy.svg" />
                    </StyledAvatarGroup>
                  </Stack>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

export default Teams;
