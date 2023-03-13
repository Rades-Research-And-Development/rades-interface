import { Card, Stack } from "@mui/material";
import AppAvatar from "components/avatars/AppAvatar";
import { H5, Tiny } from "components/Typography";
import React, { FC } from "react";

const MyConnections: FC = () => {
  return (
    <Card sx={{ padding: 3, border: "2px solid black" }}>
      <H5>My Connections</H5>

      <Stack spacing={3} mt={3}>
        {/* <SingleItem
          name="Martha Hawk"
          position="Developer"
          imageUrl="/static/avatar/001-man.svg"
        />
        <SingleItem
          name="Smantha Hoopes"
          position="Developer"
          imageUrl="/static/avatar/002-girl.svg"
        />
        <SingleItem
          name="Chris Pine"
          position="Developer"
          imageUrl="/static/avatar/005-man-1.svg"
        />
        <SingleItem
          name="Sun Myi"
          position="Developer"
          imageUrl="/static/avatar/012-woman-2.svg"
        /> */}
        No connection...
      </Stack>
    </Card>
  );
};

export default MyConnections;

// -------------------------------------------------
type SingleItemProps = {
  name: string;
  imageUrl: string;
  position: string;
};
// -------------------------------------------------

function SingleItem({ name, imageUrl, position }: SingleItemProps) {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <AppAvatar src={imageUrl} />

      <Stack spacing={0.5}>
        <H5 fontSize={12}>{name}</H5>
        <Tiny fontWeight={500} fontSize={10}>
          {position}
        </Tiny>
      </Stack>
    </Stack>
  );
}
