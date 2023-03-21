import { TabContext, TabPanel } from "@mui/lab";
import { Box } from "@mui/system";

import Gems from "page-sections/user-profile/gems";
import Layout from "page-sections/user-profile/Layout";
import Overview from "page-sections/user-profile/overview";
import Projects from "page-sections/user-profile/projects";
import Wallet from "page-sections/user-profile/wallet/Wallet";
import { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { service_id } = useParams();
  const [tabValue, setTabValue] = useState(service_id);
  const handleTabChange = (_: SyntheticEvent, value: string) =>
    setTabValue(value);
  useEffect(() => {
    setTabValue(service_id);
  }, [service_id]);
  return (
    <Box pt={2} pb={4}>
      <TabContext value={tabValue ? tabValue : "wallet"}>
        <Layout handleTabList={handleTabChange}>
          <TabPanel value="profile">
            <Overview />
          </TabPanel>
          {/* 
          <TabPanel value="profile">
            <Projects />
          </TabPanel> */}

          {/* <TabPanel value="3">
            <Campaigns />
          </TabPanel> */}

          <TabPanel value="wallet">
            <Wallet />
          </TabPanel>

          {/* <TabPanel value="5">
            <Gems />
          </TabPanel> */}

          {/* <TabPanel value="6">
            <Activity />
          </TabPanel> */}
        </Layout>
      </TabContext>
    </Box>
  );
};

export default UserProfile;
