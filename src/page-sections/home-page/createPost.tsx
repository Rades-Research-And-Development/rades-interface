import { Add } from "@mui/icons-material";
import { DatePicker } from "@mui/lab";
import { Avatar, Box, Button, Stack, styled } from "@mui/material";
import AppModal from "components/AppModal";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import ImageUploadInput from "components/input-fields/ImageUploadInput";
import { H6 } from "components/Typography";
import { Dispatch, FC, useState } from "react";

// custom styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  width: 400,
  [theme.breakpoints.down(400)]: { width: 300 },
}));

// -------------------------------------------------------------------
type CreatePostProps = {
  open: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};
// -------------------------------------------------------------------

const CreatePost: FC<CreatePostProps> = ({ open, setOpen }) => {
  const [date, setDate] = useState<Date | null>(new Date());

  return (
    <StyledAppModal open={open} handleClose={() => setOpen(false)}>
      <Box mb={2}>
        <H6 mb={1}>Project Name</H6>
        <AppTextField fullWidth size="small" placeholder="Project name" />
      </Box>

      <Box mb={2}>
        <H6 mb={1}>Deadline</H6>
        <DatePicker
          value={date}
          onChange={(newValue) => setDate(newValue)}
          renderInput={(params) => (
            <AppTextField
              fullWidth
              size="small"
              inputProps={{ placeholder: "Deadline Date" }}
              {...params}
            />
          )}
        />
      </Box>

      <Box mb={2}>
        <H6 mb={1}>Description</H6>
        <AppTextField
          rows={2}
          fullWidth
          multiline
          size="small"
          name="description"
          placeholder="Description"
        />
      </Box>

      <Box mb={2}>
        <H6 mb={1}>Add Picture</H6>

        <ImageUploadInput handleOnChange={() => {}} />
      </Box>

      <Box my={1}>
        <H6 mb={1}>Team</H6>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Button variant="dashed">
            <Add fontSize="small" sx={{ color: "grey.600" }} />
          </Button>
          <Avatar alt="Remy Sharp" src="/static/user/user-7.png" />
          <Avatar alt="Travis Howard" src="/static/user/user-6.png" />
          <Avatar alt="Cindy Baker" src="/static/user/user-5.png" />
        </Stack>
      </Box>

      <FlexBox mt={4} gap={2}>
        <Button variant="contained" fullWidth>
          Create
        </Button>

        <Button variant="outlined" fullWidth onClick={() => setOpen(false)}>
          Cancel
        </Button>
      </FlexBox>
    </StyledAppModal>
  );
};

export default CreatePost;
