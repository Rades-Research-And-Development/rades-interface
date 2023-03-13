import { TabContext, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";
import Activity from "page-sections/dashboard/activity";
import Campaigns from "page-sections/dashboard/campaigns";
import Connections from "page-sections/dashboard/connections";
import Documents from "page-sections/dashboard/documents";
import Layout from "page-sections/dashboard/Layout";
import Overview from "page-sections/dashboard/overview";
import Projects from "page-sections/dashboard/projects";
import { SyntheticEvent, useState } from "react";

const Profile = () => {
  const [tabValue, setTabValue] = useState("1");
  const handleTabChange = (_: SyntheticEvent, value: string) =>
    setTabValue(value);

  return (
    <Box pt={2} pb={4}>
      <TabContext value={tabValue}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="1">
            <Overview />
            <Activity />
          </TabPanel>

          <TabPanel value="2">
            <Projects />
          </TabPanel>

          <TabPanel value="3">
            <Campaigns />
          </TabPanel>

          <TabPanel value="4">
            <Documents />
          </TabPanel>

          <TabPanel value="5">
            <Connections />
          </TabPanel>

          <TabPanel value="6">
            <Activity />
          </TabPanel>
        </Layout>
      </TabContext>
    </Box>
  );
};

export default Profile;
