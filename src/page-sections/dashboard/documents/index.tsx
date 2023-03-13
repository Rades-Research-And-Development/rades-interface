import { Button, Grid, Stack, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import FlexBetween from "components/flexbox/FlexBetween";
import SearchInput from "components/input-fields/SearchInput";
import { H5, Span } from "components/Typography";
import Folder from "icons/Folder";
import { FC } from "react";
import DocumentCard from "./DocumentCard";

const documentList = [
  {
    id: 1,
    title: "Customer",
    file: 7,
    Icon: Folder,
  },
  {
    id: 2,
    title: "E-commerce",
    file: 3,
    Icon: Folder,
  },
  {
    id: 3,
    title: "Finance",
    file: 25,
    Icon: Folder,
  },
  {
    id: 4,
    title: "CRM Project",
    file: 15,
    Icon: Folder,
  },
  {
    id: 5,
    file: 7,
    title: "Project HTML",
    img: "/static/files-icon/html.svg",
  },
  {
    id: 6,
    file: 7,
    title: "Project CSS",
    img: "/static/files-icon/css.svg",
  },
  {
    id: 7,
    file: 12,
    title: "Project JPG",
    img: "/static/files-icon/jpg.svg",
  },
  {
    id: 8,
    file: 12,
    title: "Project PDF",
    img: "/static/files-icon/pdf.svg",
  },
];

const Documents: FC = () => {
  const theme = useTheme();

  return (
    <Box py={3}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FlexBetween flexWrap="wrap">
            <H5 mb={1}>
              My Documents{" "}
              <Span fontSize={12} fontWeight={500} color="text.disabled">
                (100+ Resources)
              </Span>
            </H5>

            <Stack direction="row" flexWrap="wrap" spacing={2}>
              <SearchInput
                placeholder="Search...."
                sx={{
                  maxWidth: 200,
                  [theme.breakpoints.down(500)]: { maxWidth: "100%" },
                }}
              />

              <Button
                variant="contained"
                sx={{
                  [theme.breakpoints.down(500)]: {
                    marginLeft: "0 !important",
                    mt: "8px !important",
                    width: "100%",
                  },
                }}
              >
                File Manager
              </Button>
            </Stack>
          </FlexBetween>
        </Grid>

        {documentList.map((item) => (
          <Grid item md={3} sm={4} xs={12} key={item.id}>
            <DocumentCard document={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Documents;
