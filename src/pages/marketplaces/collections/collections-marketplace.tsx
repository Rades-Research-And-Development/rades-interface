import { Add } from "@mui/icons-material";
import { TabContext, TabList } from "@mui/lab";
import { Box, Button, Tab } from "@mui/material";
import SearchInput from "components/input-fields/SearchInput";

import AddCustomerModal from "page-sections/collections-marketplace/AddCustomerModal";
import CustomerColumnShape from "page-sections/collections-marketplace/columnShapes/CustomerColumnShape";
import CustomTable from "page-sections/collections-marketplace/CustomTable";
import { customersFakeData } from "page-sections/collections-marketplace/fakeData";
import TabLabel from "page-sections/collections-marketplace/TabLabel";
import { FC, SyntheticEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { searchByName } from "utils/utils";

import { styled } from "@mui/material";

import FlexBox from "components/flexbox/FlexBox";
export const HeadingWrapper = styled(FlexBox)(({ theme }) => ({
  marginBottom: 20,
  flexWrap: "wrap",
  [theme.breakpoints.down(530)]: {
    "& .MuiButton-root": { width: "100%" },
    "& .MuiInputBase-root": { maxWidth: "100%", marginBottom: 15 },
  },
}));
const CollectionsMarketplace: FC = () => {
  const { t } = useTranslation();
  const [currentTab, setCurrentTab] = useState("1");
  const [addCustomer, setAddCustomer] = useState(false);

  // search input
  const [searchValue, setSearchValue] = useState("");
  const [filteredItem, setFilteredItem] = useState(customersFakeData);

  useEffect(() => {
    const result = searchByName(customersFakeData, searchValue);
    setFilteredItem(result);
  }, [searchValue]);

  // handle tab item change
  const handleTabChange = (_: SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  const filteredData = filteredItem.filter(
    (item) =>
      (item.status === "Active" && currentTab === "2") ||
      (item.status === "Blocked" && currentTab === "3") ||
      currentTab === "1"
  );

  return (
    <Box pt={2} pb={4}>
      <HeadingWrapper justifyContent="space-between" alignItems="center">
        <SearchInput
          disable_border
          placeholder="Find Customer"
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <Button
          variant="contained"
          endIcon={<Add />}
          onClick={() => setAddCustomer(true)}
        >
          {t("Add Customer")}
        </Button>

        <AddCustomerModal
          open={addCustomer}
          onClose={() => setAddCustomer(false)}
        />
      </HeadingWrapper>

      <TabContext value={currentTab}>
        <TabList onChange={handleTabChange} variant="scrollable" sx={{ mb: 1 }}>
          {tabs.map(({ value, label, count }) => (
            <Tab
              key={value}
              disableRipple
              value={value}
              label={<TabLabel title={t(label)} total={count} />}
            />
          ))}
        </TabList>

        <CustomTable data={filteredData} columnShape={CustomerColumnShape} />
      </TabContext>
    </Box>
  );
};

const tabs = [
  { value: "1", label: "All", count: 35 },
  { value: "2", label: "Active", count: 45 },
  { value: "3", label: "Blocked", count: 25 },
];

export default CollectionsMarketplace;
