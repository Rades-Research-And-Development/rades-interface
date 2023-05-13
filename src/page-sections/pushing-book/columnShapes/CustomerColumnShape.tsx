import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import { H6, Small, Tiny } from "components/Typography";
import { Fragment, useState } from "react";
import AddCustomerModal from "../AddCustomerModal";

const CustomerColumnShape = [
  {
    Header: "Customer Name",
    accessor: "customer",
    minWidth: 200,
    Cell: ({ row }: any) => {
      const { avatar, name, position } = row.original;
      return (
        <FlexBox alignItems="center">
          <AppAvatar src={avatar} />
          <FlexBox flexDirection="column" ml={1.5}>
            <H6 color="text.primary">{name}</H6>
            <Tiny color="text.disabled">{position}</Tiny>
          </FlexBox>
        </FlexBox>
      );
    },
  },
  {
    Header: "Location",
    accessor: "location",
    minWidth: 200,
  },
  {
    Header: "Date",
    accessor: "date",
    minWidth: 150,
  },
  {
    Header: "Date",
    accessor: "date",
    minWidth: 150,
  },
  {
    Header: "Phone",
    accessor: "phone",
    minWidth: 150,
  },
  // {
  //   Header: "Volume 24h %",
  //   accessor: "volume24hpercent",
  //   minWidth: 130,
  //   maxWidth: 130,
  //   Cell: ({ value }: any) => (
  //     <Small
  //       sx={{
  //         backgroundColor:
  //           (Math.random() * 10) % 2 === 0 ? "success.main" : "error.main",
  //         color: "background.paper",
  //         borderRadius: 10,
  //         padding: ".2rem 1rem",
  //         textAlign: "center",
  //       }}
  //     >
  //       {value}
  //     </Small>
  //   ),
  // },
  {
    Header: "Status",
    accessor: "status",
    minWidth: 130,
    maxWidth: 130,
    Cell: ({ value }: any) => (
      <Small
        sx={{
          backgroundColor:
            value?.toLowerCase() === "active" ? "success.main" : "error.main",
          color: "background.paper",
          borderRadius: 10,
          padding: ".2rem 1rem",
          textAlign: "center",
        }}
      >
        {value}
      </Small>
    ),
  },
  {
    Header: "Action",
    accessor: "action",
    maxWidth: 100,
    Cell: ({ row }: any) => {
      const [openModal, setOpenModal] = useState(false);

      return (
        <Fragment>
          <IconButton onClick={() => setOpenModal(true)}>
            <Edit sx={{ fontSize: 18, color: "text.disabled" }} />
          </IconButton>

          <AddCustomerModal
            edit
            open={openModal}
            data={row.original}
            onClose={() => setOpenModal(false)}
          />
        </Fragment>
      );
    },
  },
];

export default CustomerColumnShape;
