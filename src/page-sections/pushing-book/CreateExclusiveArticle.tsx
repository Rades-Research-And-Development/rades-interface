import {
  Add,
  AttachFile,
  EmojiEmotions,
  LocationOn,
  Photo,
  PlayArrow,
  VideoFile,
} from "@mui/icons-material";
import { Box, Button, Chip, Grid, styled, useMediaQuery } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ImageListItem from "@mui/material/ImageListItem";
import { Theme } from "@mui/material";
import AppModal from "components/AppModal";
import { H2, H6, Small } from "components/Typography";
import FlexBox from "components/flexbox/FlexBox";
import FlexRowAlign from "components/flexbox/FlexRowAlign";
import AppTextField from "components/input-fields/AppTextField";
import { useFormik } from "formik";
import DeleteIcon from "icons/DeleteIcon";
import { IArticle } from "interface/article.interface";
import { FC, useState } from "react";
import { checkFileType } from "utils/fileTypeDetect";
import { compressImage } from "utils/mediasCompress";
import * as Yup from "yup";

import { CreatureAccessory } from "app/contracts";
import useGeneralConnection from "common/useGeneralConnection";
import useGeneralContract from "common/useGeneralContract";
import { createNFTMetadata } from "utils/api/nftmetadata";
import { Signer, ethers } from "ethers";
import { toast } from "react-hot-toast";
import { ImageWithText } from "../home-page/new-feed/CreateArticle";
import Editor from "./editor/Editor";
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
  const CreatureAccessory: CreatureAccessory = useGeneralContract(
    (s) => s.CreatureAccessory
  );
  const initialValues = {
    title: data?.title.split(" ")[0] || "",
    description: data?.name.split(" ")[1] || "",
    body: data?.body.split(" ")[1] || "",
    amount: data?.amount || 0,
    // privacy: data?.privacy.toLowerCase() || "friend",
    tagLists: data?.tagLists.toLowerCase() || ["rades"],
  };

  const fieldValidationSchema = Yup.object().shape({
    title: Yup.string(),
    description: Yup.string(),
    tagLists: Yup.array().of(Yup.string()),
    amount: Yup.number(),
  });

  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: fieldValidationSchema,
    onSubmit: async (
      values: {
        title: string;
        description: string;
        amount: string;
        body: string;
        tagLists: string[];
      },
      { resetForm }
    ) => {
      try {
        const formData = new FormData();
        if (mediasFile[0])
          mediasFile?.map((media) => {
            formData.append("files", media.file);
            return "";
          });
        const rawNftmetadata = {
          name: values.title,
          description: values.description,
          external_url: "https://rades.asia",
        };
        mediasFile?.map((media) => URL.revokeObjectURL(media.blob));
        setMediasFile([]);

        formData.append("nftmetadata", JSON.stringify(rawNftmetadata));
        const nftmetadata = (await createNFTMetadata(formData)).nftmetadata;
        toast.promise(
          CreatureAccessory.create(
            "0xf0a02a7A20135E9EB5F03B760488b80083665e18",
            nftmetadata?.nft_id,
            ethers.BigNumber.from(values.amount),
            `http://api.rades.asia/api/nftmetadata/${nftmetadata.nft_id}`,
            "0x"
          ).then(async (res) => {
            console.log(res.hash);
            await res.wait();
            onClose();
            resetForm({ values: initialValues });
          }),
          {
            loading: "Signing and create",
            error: "Something went wrong!",
            success: "create NFT successfully!",
          }
        );
        // const rawTx = await
      } catch (error) {
        console.log(error);
      }
    },
  });
  // const [mediasFileBlob, setMediasFileBlob] = useState<any[]>();
  const [mediasFile, setMediasFile] = useState<{ file: File; blob: string }[]>(
    []
  );
  const onUploadMedia = async (e) => {
    const medias = e?.target?.files as any[];
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
    <>
      {/* <StyledAppModal open={open} handleClose={onClose}> */}
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
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
            <Editor />
            {/* <H6 mb={1} mt={1}>
              Desciption
            </H6>
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
            /> */}

            <H6 mb={1} mt={1}>
              NFTs Total supply
            </H6>
            <AppTextField
              fullWidth
              size="small"
              name="amount"
              type="number"
              placeholder="Total supply..."
              onChange={handleChange}
              value={values.amount}
              error={Boolean(errors.amount && touched.amount)}
              helperText={touched.amount && errors.amount}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <H6 mb={1}>Uplad Your Exclusive Media</H6>
            <Box
              sx={{
                borderRadius: "8px",
                // border: "1px solid #27CE88",
                overflow: "auto",
                maxHeight: !downSM ? 400 : 340,
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
                                <>
                                  <ImageWithText
                                    imageUrl={item.blob}
                                    imageFile={item.file}
                                    text={"image"}
                                  />
                                  {/* <img
                                src={item.blob}
                                style={{ borderRadius: "8px" }}
                                width="auto"
                                height="100%"
                                alt=""
                                loading="lazy"
                              /> */}
                                </>
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
                  <Box pt={1}>
                    <Chip label="AI" variant="outlined" onDelete={() => {}} />
                    <Chip
                      label="Blockchain"
                      variant="outlined"
                      onDelete={() => {}}
                    />
                    <Chip
                      label="Manga"
                      variant="outlined"
                      onDelete={() => {}}
                    />
                    <Chip
                      label="Rades"
                      variant="outlined"
                      onDelete={() => {}}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12}>
            {" "}
            <Small color="text.disabled" px={1} sx={{ fontWeight: 600 }}>
              By signing in you agree to our Terms & Conditions
            </Small>
          </Grid>
        </Grid>

        <FlexBox justifyContent="flex-end" gap={2} marginTop={3}>
          <Button
            fullWidth
            variant="outlined"
            sx={{
              fontWeight: "800",
              fontSize: "14px",
              borderRadius: "15px",
            }}
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            fullWidth
            endIcon={<Add />}
            type="submit"
            variant="outlined"
            sx={{
              border: "1px solid #27CE88",
              fontWeight: "800",
              fontSize: "14px",
              borderRadius: "15px",
            }}
          >
            Create NFT Now
          </Button>
        </FlexBox>
      </form>
      {/* </StyledAppModal> */}
    </>
  );
};
// styled components

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
