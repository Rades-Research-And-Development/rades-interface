import { CameraAlt, KeyboardArrowDown } from "@mui/icons-material";
import { Badge, Box, Button, Grid, styled } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AppModal from "components/AppModal";
import AppAvatar from "components/avatars/AppAvatar";
import FlexBox from "components/flexbox/FlexBox";
import AppTextField from "components/input-fields/AppTextField";
import { H2, H6 } from "components/Typography";
import { useFormik } from "formik";
import { FC } from "react";
import * as Yup from "yup";

// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  edit?: boolean;
  data?: any;
}

// styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 700,
  minWidth: 300,
  boxShadow: theme.shadows[2],
  [theme.breakpoints.down("sm")]: {
    "& .main-form": { height: 200, overflow: "auto" },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    width: 25,
    height: 25,
    borderRadius: "50%",
    backgroundColor: theme.palette.primary.main,
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
  },
}));

const AddCustomerModal: FC<ModalProps> = ({ open, onClose, edit, data }) => {
  const initialValues = {
    firstName: data?.name.split(" ")[0] || "",
    lastName: data?.name.split(" ")[1] || "",
    email: data?.email || "",
    location: data?.location || "",
    phone: data?.phone || "",
    city: "",
    country: "",
    state: "",
    status: data?.status.toLowerCase() || "active",
  };

  const fieldValidationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(3, "Too Short")
      .required("First Name is Required!"),
    lastName: Yup.string().required("Last Name is Required!"),
    email: Yup.string().required("Email is Required!"),
    location: Yup.string().required("Location is Required!"),
    phone: Yup.string().min(11, "Too short").required("Phone is Required!"),
    country: Yup.string().min(3, "Too short").required("Country is Required!"),
    city: Yup.string().min(3, "Too short").required("City is Required!"),
    state: Yup.string().min(3, "Too short").required("State is Required!"),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: fieldValidationSchema,
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2>{edit ? "Edit Product" : "Add new Customer"}</H2>

      <Box textAlign="center" py={3}>
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          badgeContent={
            <label htmlFor="icon-button-file">
              <input
                type="file"
                accept="image/*"
                id="icon-button-file"
                style={{ display: "none" }}
              />

              <IconButton aria-label="upload picture" component="span">
                <CameraAlt sx={{ fontSize: 16, color: "background.paper" }} />
              </IconButton>
            </label>
          }
        >
          <AppAvatar
            sx={{ width: 100, height: 100 }}
            alt="Travis Howard"
            src={
              data && edit ? data.avatar : "/static/user/profile-picture.png"
            }
          />
        </StyledBadge>
      </Box>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="main-form">
          <Grid item sm={6} xs={12}>
            <H6 mb={1}>First Name</H6>
            <AppTextField
              fullWidth
              size="small"
              name="firstName"
              placeholder="John"
              onChange={handleChange}
              value={values.firstName}
              error={Boolean(errors.firstName && touched.firstName)}
              helperText={touched.firstName && errors.firstName}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <H6 mb={1}>Last Name</H6>
            <AppTextField
              fullWidth
              size="small"
              name="lastName"
              placeholder="Smith"
              onChange={handleChange}
              value={values.lastName}
              error={Boolean(errors.lastName && touched.lastName)}
              helperText={touched.lastName && errors.lastName}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <H6 mb={1}>Email</H6>
            <AppTextField
              fullWidth
              size="small"
              name="email"
              placeholder="uilib@gmail.com"
              onChange={handleChange}
              value={values.email}
              error={Boolean(errors.email && touched.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <H6 mb={1}>Location</H6>
            <AppTextField
              fullWidth
              size="small"
              name="location"
              placeholder="Corner View"
              onChange={handleChange}
              value={values.location}
              error={Boolean(errors.location && touched.location)}
              helperText={touched.location && errors.location}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <H6 mb={1}>Phone</H6>
            <AppTextField
              fullWidth
              size="small"
              name="phone"
              placeholder="+0188000000"
              onChange={handleChange}
              value={values.phone}
              error={Boolean(errors.phone && touched.phone)}
              helperText={touched.phone && errors.phone}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <H6 mb={1}>City</H6>
            <AppTextField
              fullWidth
              size="small"
              name="city"
              placeholder="Sylhet"
              onChange={handleChange}
              value={values.city}
              error={Boolean(errors.city && touched.city)}
              helperText={touched.city && errors.city}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <H6 mb={1}>Country</H6>
            <AppTextField
              fullWidth
              size="small"
              name="country"
              placeholder="Bangladesh"
              onChange={handleChange}
              value={values.country}
              error={Boolean(errors.country && touched.country)}
              helperText={touched.country && errors.country}
            />
          </Grid>

          <Grid item sm={6} xs={12}>
            <H6 mb={1}>State/Region</H6>
            <AppTextField
              fullWidth
              size="small"
              name="state"
              placeholder="Asia"
              onChange={handleChange}
              value={values.state}
              error={Boolean(errors.state && touched.state)}
              helperText={touched.state && errors.state}
            />
          </Grid>

          <Grid item xs={12}>
            <H6 mb={1}>Status</H6>
            <AppTextField
              select
              fullWidth
              size="small"
              name="status"
              value={values.status}
              onChange={handleChange}
              SelectProps={{ native: true, IconComponent: KeyboardArrowDown }}
            >
              <option value="active">Active</option>
              <option value="disabled">Disabled</option>
            </AppTextField>
          </Grid>
        </Grid>

        <FlexBox justifyContent="flex-end" gap={2} marginTop={3}>
          <Button fullWidth variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button fullWidth type="submit" variant="contained">
            Save
          </Button>
        </FlexBox>
      </form>
    </StyledAppModal>
  );
};

export default AddCustomerModal;
