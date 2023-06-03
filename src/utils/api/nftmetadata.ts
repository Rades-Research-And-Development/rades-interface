import { limitArticlesLoaded } from "../../constants";
import API from "./api";

export async function createNFTMetadata(formData: FormData) {
    const response = await API.post('/nftmetadata', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    return response?.data
}
export async function getNFTMetadata(nftId: string) {
    const response = await API.get(`/nftmetadata/${nftId}`)
    return response?.data
}



