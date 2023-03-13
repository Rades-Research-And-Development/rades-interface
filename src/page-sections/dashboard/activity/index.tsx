import { Timeline } from "@mui/lab";
import { Card, Divider } from "@mui/material";
import { Box } from "@mui/system";
import AppSelect from "components/AppSelect";
import FlexBetween from "components/flexbox/FlexBetween";
import Scrollbar from "components/ScrollBar";
import { H5, Span } from "components/Typography";
import { FC } from "react";
import ChatItem from "./ChatItem";
import EditItem from "./EditItem";
import FileItem from "./FileItem";
import LayerItem from "./LayerItem";
import PinItem from "./PinItem";

const Activity: FC = () => {
  return (
    <Box py={3}>
      <Scrollbar autoHide={false}>
        <Card sx={{ minWidth: 900 }}>
          <FlexBetween flexWrap="wrap" p={3}>
            <H5>
              Roadmap{" "}
              {/* <Span fontSize={12} fontWeight={500} color="text.secondary">
                (100+ Resources)
              </Span> */}
            </H5>

            <AppSelect>
              <option value="today">Today</option>
              <option value="month">Month</option>
            </AppSelect>
          </FlexBetween>
          <Divider />

          <Box my={2}>
            <Timeline>
              <ChatItem />
              <PinItem />
              <FileItem />
              <LayerItem />
              <EditItem />
            </Timeline>
          </Box>
        </Card>
      </Scrollbar>
    </Box>
  );
};

export default Activity;
