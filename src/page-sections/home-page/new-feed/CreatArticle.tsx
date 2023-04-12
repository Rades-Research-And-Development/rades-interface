import {
  Add,
  AttachFile,
  EmojiEmotions,
  LocationCity,
  LocationOn,
  Photo,
  PlayArrow,
  VideoFile,
} from "@mui/icons-material";
import { Box, Button, Grid, styled, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import AppModal from "components/AppModal";
import { H2, H6, Small } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import { useFormik } from "formik";
import DeleteIcon from "icons/DeleteIcon";
import { IArticle } from "interface/article.interface";
import { FC, useState } from "react";
import { toast } from "react-hot-toast";
import { createArticles } from "utils/api/articles";
import * as Yup from "yup";
import { Theme } from "@mui/material";
import { checkFileType } from "utils/fileTypeDetect";
// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  articles: IArticle[];
  setArticles: (articles: any) => void;
  setArticlesCount: (a: any) => void;
  edit?: boolean;
  data?: any;
}

const CreateArticle: FC<ModalProps> = ({
  open,
  onClose,
  edit,
  data,
  setArticles,
  setArticlesCount,
}) => {
  const initialValues = {
    title: data?.title.split(" ")[0] || "",
    description: data?.name.split(" ")[1] || "",
    body: data?.body.split(" ")[1] || "",
    // privacy: data?.privacy.toLowerCase() || "friend",
    tagLists: data?.tagLists.toLowerCase() || ["rades"],
  };

  const fieldValidationSchema = Yup.object().shape({
    title: Yup.string(),
    description: Yup.string(),
    tagLists: Yup.array().of(Yup.string()),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: fieldValidationSchema,
    onSubmit: (
      values: {
        title: string;
        description: string;
        body: string;
        tagLists: string[];
      },
      { resetForm }
    ) => {
      onClose();
      resetForm({ values: initialValues });

      const formData = new FormData();
      if (mediasFile[0])
        mediasFile?.map((media) => {
          console.log(media);
          formData.append("files", media.file);
          return "hi";
        });
      formData.append("article", JSON.stringify({ ...values }));

      toast.promise(
        createArticles(formData).then((res) => {
          setArticles((article) => [res.article as IArticle, ...article]);
          setArticlesCount((count) => count + 1);
          mediasFile?.map((media) => URL.revokeObjectURL(media.blob));
          setMediasFile([]);
        }),
        {
          loading: "Posting...",
          error: "Something went wrong!",
          success: "Post successfully!",
        }
      );
    },
  });
  // const [mediasFileBlob, setMediasFileBlob] = useState<any[]>();
  const [mediasFile, setMediasFile] = useState<{ file: File; blob: string }[]>(
    []
  );
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(a) {
    console.log(a);
    setNumPages(a.numPages);
  }
  const onUploadMedia = (e) => {
    const medias = e?.target?.files as any[];
    // const mediasBlob: any[] = [];
    const _mediasFile: { file: File; blob: string }[] = [];
    for (let i = 0; i < medias.length; i++) {
      _mediasFile.push({
        file: medias[i] as File,
        blob: URL.createObjectURL(medias[i]),
      });
    }
    console.log(_mediasFile);
    setMediasFile([...mediasFile, ..._mediasFile]);
  };
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2>{edit ? "Edit Product" : "What do you feel?"}</H2>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="main-form">
          <Grid item sm={12} xs={12}>
            <H6 mb={1}>Title</H6>
            <AppTextField
              fullWidth
              size="small"
              name="title"
              placeholder="Title..."
              onChange={handleChange}
              value={values.title}
              error={Boolean(errors.title && touched.title)}
              helperText={touched.title && errors.title}
            />
          </Grid>

          <Grid item sm={12} xs={12}>
            <H6 mb={1}>Desciption</H6>
            <AppTextField
              fullWidth
              name="description"
              placeholder="Description..."
              multiline
              rows={10}
              maxRows={12}
              onChange={handleChange}
              value={values.description}
              error={Boolean(errors.description && touched.description)}
              helperText={touched.description && errors.description}
            />
          </Grid>
        </Grid>

        <Grid item xs={12} pt={2} pb={2}>
          <Box
            sx={{
              borderRadius: "8px",
              // border: "1px solid #27CE88",
              overflow: "auto",
              maxHeight: !downSM ? 280 : 140,
              backgroundColor: "black",
            }}
          >
            <Grid container spacing={0.5}>
              <Grid item sm={12} xs={12}>
                <label htmlFor="image-upload">
                  <input
                    type="file"
                    accept="image/*,.mp4,.pdf"
                    id="image-upload"
                    multiple
                    onChange={onUploadMedia}
                    style={{ display: "none" }}
                  />
                  <ImageUploadWrapper textAlign="center">
                    <Box>
                      <Photo sx={{ color: "#8C8DFF" }} />
                      <VideoFile sx={{ color: "#2499EF" }} />
                      <AttachFile sx={{ color: "#27CE88" }} />
                      <EmojiEmotions sx={{ color: "#FF316F" }} />
                      <LocationOn sx={{ color: "#FEC575" }} />
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
              {mediasFile?.map((item, _) => (
                <Grid item sm={3} xs={4} key={_}>
                  <Box
                    sx={{
                      minHeight: 140,
                      borderRadius: "8px",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    <ImageListItem
                      sx={{
                        maxHeight: 150,
                      }}
                    >
                      {checkFileType(item.file.name) === "video" ? (
                        <>
                          <PlayArrow
                            style={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              transform: "translate(-50%, -50%)",
                              color: "white",
                              border: "2px solid white",
                              borderRadius: "50%",
                              fontSize: 64,
                              zIndex: 1,
                              cursor: "pointer",
                            }}
                          />
                          <video
                            id="my-video"
                            controls
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          >
                            <source src={item.blob} type="video/mp4" />
                          </video>
                        </>
                      ) : (
                        <>
                          {checkFileType(item.file.name) === "pdf" ? (
                            <embed src={item.blob} />
                          ) : (
                            <img
                              src={item.blob}
                              style={{ borderRadius: "8px" }}
                              width="auto"
                              height="100%"
                              alt=""
                              loading="lazy"
                            />
                          )}
                        </>
                      )}
                    </ImageListItem>
                    <ImageDeleteWrapper>
                      <IconButton
                        onClick={() => {
                          URL.revokeObjectURL(item.blob);
                          setMediasFile(
                            mediasFile.filter((i) => i.blob !== item.blob)
                          );
                        }}
                      >
                        <DeleteIcon sx={{ fontSize: 12, color: "white" }} />
                      </IconButton>
                    </ImageDeleteWrapper>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
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
// styled components
const StyledAppModal = styled(AppModal)(({ theme }) => ({
  maxWidth: 900,
  minWidth: 300,
  background: "black",
  borderRadius: "20px",
  boxShadow: "1px 2px 2px 2px #27CE88",
  [theme.breakpoints.down("sm")]: {
    "& .main-form": { height: 400, overflow: "auto" },
  },
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
  minHeight: 100,
  cursor: "pointer",
  borderRadius: "8px",
  border: "1px dashed #27CE88",
  backgroundColor: "black",
}));

const images = [
  "/static/products/watch.png",
  "/static/products/camera.png",
  "/static/products/headphone.png",
  "/static/products/headphone.png",
  "/static/products/headphone.png",
  "/static/products/headphone.png",
];

export default CreateArticle;
