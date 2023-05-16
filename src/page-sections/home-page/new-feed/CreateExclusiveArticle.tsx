import {
  Add,
  AttachFile,
  CheckBox,
  EmojiEmotions,
  LocationCity,
  LocationOn,
  Photo,
  PlayArrow,
  VideoFile,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Chip,
  FormControlLabel,
  Grid,
  styled,
  useMediaQuery,
} from "@mui/material";
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
import { compressImage } from "utils/mediasCompress";
// component props interface
interface ModalProps {
  open: boolean;
  onClose: () => void;
  articles: IArticle[];
  setArticles: (articles: any) => void;
  setArticlesCount: (a: any) => void;
  edit?: string;
  data?: any;
}

const CreateExclusiveArticle: FC<ModalProps> = ({
  open,
  onClose,
  edit,
  data,
  articles,
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
          formData.append("files", media.file);
          return "";
        });
      formData.append("article", JSON.stringify({ ...values }));

      toast.promise(
        createArticles(formData).then((res) => {
          setArticles([res.article as IArticle, ...articles]);
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

  const onUploadMedia = async (e) => {
    const medias = e?.target?.files as any[];
    // const mediasBlob: any[] = [];
    const _mediasFile: { file: File; blob: string }[] = [];
    for (let i = 0; i < medias.length; i++) {
      const file = await compressImage(medias[i]);
      _mediasFile.push({
        file: file as any,
        blob: URL.createObjectURL(medias[i]),
      });
    }
    console.log(_mediasFile);
    setMediasFile([...mediasFile, ..._mediasFile]);
  };
  const downSM = useMediaQuery((theme: Theme) => theme.breakpoints.down("sm"));
  return (
    <StyledAppModal open={open} handleClose={onClose}>
      <H2>{edit ? edit : "What do you feel?"}</H2>

      <form onSubmit={handleSubmit}>
        <Grid container spacing={2} className="main-form">
          <Grid item xs={4} pt={2} pb={2}>
            <H6 mb={1}>Uplad Your Exclusive Media</H6>
            <Box
              sx={{
                borderRadius: "8px",
                // border: "1px solid #27CE88",
                overflow: "auto",
                maxHeight: !downSM ? 200 : 140,
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
                      onChange={async (e) => {
                        onUploadMedia(e);
                      }}
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
                  {mediasFile?.map((item, _) => (
                    <Grid item sm={12} xs={12} key={_} pt={1}>
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
              </Grid>
            </Box>
            <H6 mb={1} mt={1}>
              License
            </H6>
            <AppTextField
              fullWidth
              size="small"
              name="title"
              placeholder="Your License..."
              // onChange={handleChange}
              // value={values.title}
              error={Boolean(errors.title && touched.title)}
              helperText={touched.title && errors.title}
            />
            <H6 mb={1} mt={1}>
              Copyright
            </H6>
            <AppTextField
              fullWidth
              size="small"
              name="title"
              placeholder="Copyright..."
              // onChange={handleChange}
              // value={values.title}
              error={Boolean(errors.title && touched.title)}
              helperText={touched.title && errors.title}
            />
            <H6 mb={1} mt={1}>
              Make every one trust you?
            </H6>
            <AppTextField
              fullWidth
              size="small"
              name="title"
              placeholder="Your identify (KYC)..."
              // onChange={handleChange}
              // value={values.title}
              error={Boolean(errors.title && touched.title)}
              helperText={touched.title && errors.title}
            />
          </Grid>
          <Grid item sm={8} xs={8}>
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
            <Box pt={1}>
              <Chip label="AI" variant="outlined" onDelete={() => {}} />
              <Chip label="Blockchain" variant="outlined" onDelete={() => {}} />
              <Chip label="Manga" variant="outlined" onDelete={() => {}} />
              <Chip label="Rades" variant="outlined" onDelete={() => {}} />
              <Chip label="Busitech" variant="outlined" onDelete={() => {}} />
            </Box>
          </Grid>
          <Grid item sm={12} xs={12}>
            {" "}
            <Small color="text.disabled" px={1} sx={{ fontWeight: 600 }}>
              By signing in you agree to our Terms & Conditions
            </Small>
          </Grid>
        </Grid>

        <FlexBox justifyContent="flex-end" gap={2} marginTop={3}>
          <Button fullWidth variant="outlined" onClick={onClose}>
            Cancel
          </Button>
          <Button
            fullWidth
            type="submit"
            variant="outlined"
            sx={{ border: "1px solid #27CE88" }}
          >
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

export default CreateExclusiveArticle;
