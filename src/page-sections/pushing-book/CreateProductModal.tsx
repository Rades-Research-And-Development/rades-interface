import { Add } from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  styled,
  Theme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import AppModal from "components/AppModal";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import Scrollbar from "components/ScrollBar";
import { H2, H6, Small } from "components/Typography";
import { useFormik } from "formik";
import DeleteIcon from "icons/DeleteIcon";
import { FC } from "react";
import * as Yup from "yup";

// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  editProduct?: boolean;
  data?: any;
}

// styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 700,
  minWidth: 300,
  outline: "none",
  padding: "1.5rem",
}));

const ImageDeleteWrapper = styled(FlexRowAlign)(({ theme }) => ({
  top: 5,
  right: 5,
  width: 25,
  height: 25,
  borderRadius: "50%",
  position: "absolute",
  backgroundColor: theme.palette.error.main,
}));

const ImageUploadWrapper = styled(FlexRowAlign)(({ theme }) => ({
  minHeight: 140,
  cursor: "pointer",
  borderRadius: "8px",
  backgroundColor: theme.palette.grey[200],
}));

const CreateProductModal: FC<ModalProps> = ({
  open,
  data,
  onClose,
  editProduct,
}) => {
  const downXl = useMediaQuery((theme: Theme) => theme.breakpoints.down("xl"));

  const initialValues = {
    productName: "",
    storeName: "",
    price: "",
    discountPrice: "",
    description: "",
    category: "",
    tags: "",
    stock: "",
    sku: "",
    images: "",
  };

  const validationSchema = Yup.object().shape({
    productName: Yup.string()
      .min(3, "Too Short")
      .required("Product Name is Required!"),
    storeName: Yup.string().required("Store Name is Required!"),
    price: Yup.number().required("Price is Required!"),
    description: Yup.string().required("Description is Required!"),
    category: Yup.string().required("Category is Required!"),
    stock: Yup.number().required("Stock is Required!"),
    sku: Yup.string().required("SKU is Required!"),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      // console.log(values);
    },
  });

  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2 marginBottom={2}>
        {editProduct && data ? "Edit Product" : "Add new product"}
      </H2>

      <form onSubmit={handleSubmit}>
        <Scrollbar style={{ maxHeight: downXl ? 500 : "auto" }}>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <H6 mb={1}>Product Name</H6>
              <AppTextField
                fullWidth
                size="small"
                name="productName"
                placeholder="Enter product name"
                value={values.productName}
                onChange={handleChange}
                error={Boolean(touched.productName && errors.productName)}
                helperText={touched.productName && errors.productName}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <H6 mb={1}>Store Name</H6>
              <AppTextField
                fullWidth
                size="small"
                name="storeName"
                placeholder="Enter store name"
                value={values.storeName}
                onChange={handleChange}
                error={Boolean(touched.storeName && errors.storeName)}
                helperText={touched.storeName && errors.storeName}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <H6 mb={1}>Price</H6>
              <AppTextField
                fullWidth
                size="small"
                name="price"
                type="number"
                placeholder="Price"
                value={values.price}
                onChange={handleChange}
                error={Boolean(touched.price && errors.price)}
                helperText={touched.price && errors.price}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <H6 mb={1}>Discount Price</H6>
              <AppTextField
                fullWidth
                size="small"
                type="number"
                name="discountPrice"
                placeholder="Discount price"
                value={values.discountPrice}
                onChange={handleChange}
                error={Boolean(touched.discountPrice && errors.discountPrice)}
                helperText={touched.discountPrice && errors.discountPrice}
              />
            </Grid>

            <Grid item xs={12}>
              <H6 mb={1}>Description</H6>
              <AppTextField
                fullWidth
                multiline
                rows={3}
                name="description"
                placeholder="Write about product"
                value={values.description}
                onChange={handleChange}
                error={Boolean(touched.description && errors.description)}
                helperText={touched.description && errors.description}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <H6 mb={1}>Category</H6>
              <AppTextField
                fullWidth
                size="small"
                name="category"
                placeholder="Category"
                value={values.category}
                onChange={handleChange}
                error={Boolean(touched.category && errors.category)}
                helperText={touched.category && errors.category}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <H6 mb={1}>Tags</H6>
              <AppTextField
                fullWidth
                size="small"
                name="tags"
                placeholder="Add Tags"
                value={values.tags}
                onChange={handleChange}
                error={Boolean(touched.tags && errors.tags)}
                helperText={touched.tags && errors.tags}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <H6 mb={1}>Stock</H6>
              <AppTextField
                fullWidth
                size="small"
                type="number"
                name="stock"
                placeholder="04"
                value={values.stock}
                onChange={handleChange}
                error={Boolean(touched.stock && errors.stock)}
                helperText={touched.stock && errors.stock}
              />
            </Grid>

            <Grid item sm={6} xs={12}>
              <H6 mb={1}>SKU</H6>
              <AppTextField
                fullWidth
                size="small"
                name="sku"
                placeholder="UY8076"
                value={values.sku}
                onChange={handleChange}
                error={Boolean(touched.sku && errors.sku)}
                helperText={touched.sku && errors.sku}
              />
            </Grid>

            <Grid item xs={12}>
              <H6 pb={1}>Product Image</H6>
              <Box
                sx={{
                  padding: 1,
                  borderRadius: "8px",
                  border: "1px dashed",
                  borderColor: "text.disabled",
                  backgroundColor: "grey.100",
                }}
              >
                <Grid container spacing={1}>
                  {images.map((item) => (
                    <Grid item sm={3} xs={4} key={item}>
                      <Box
                        sx={{
                          minHeight: 140,
                          borderRadius: "8px",
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <img src={item} width="100%" height="100%" alt="" />

                        <ImageDeleteWrapper>
                          <IconButton>
                            <DeleteIcon sx={{ fontSize: 12, color: "white" }} />
                          </IconButton>
                        </ImageDeleteWrapper>
                      </Box>
                    </Grid>
                  ))}

                  <Grid item sm={3} xs={4}>
                    <label htmlFor="image-upload">
                      <input
                        type="file"
                        accept="image/*"
                        id="image-upload"
                        style={{ display: "none" }}
                      />
                      <ImageUploadWrapper textAlign="center">
                        <Box>
                          <Add color="disabled" />
                          <Small fontWeight={600} display="block">
                            Choose a file
                          </Small>
                          <Small fontWeight={600} color="text.disabled">
                            or drag it here
                          </Small>
                        </Box>
                      </ImageUploadWrapper>
                    </label>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Scrollbar>

        <Grid container>
          <Grid item xs={12}>
            <FlexBox justifyContent="flex-end" gap={2} marginTop={2}>
              <Button fullWidth variant="outlined" onClick={onClose}>
                Cancel
              </Button>
              <Button fullWidth type="submit" variant="contained">
                Save
              </Button>
            </FlexBox>
          </Grid>
        </Grid>
      </form>
    </StyledAppModal>
  );
};

const images = [
  "/static/products/watch.png",
  "/static/products/camera.png",
  "/static/products/headphone.png",
];

export default CreateProductModal;
