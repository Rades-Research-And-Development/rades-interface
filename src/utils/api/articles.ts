import { limitArticlesLoaded } from "../../constants";
import API from "./api";

export async function getArticles({ limit = limitArticlesLoaded, offset = 0 }) {
    const response = await API.get(`/articles?limit=${limit}&offset=${offset}`)
    return response?.data
}
export async function getArticleBySlug(article_slug: string) {
    const response = await API.get(`/articles/${article_slug}`)
    return response?.data
}

export async function createArticles(formData: FormData) {
    const response = await API.post('/articles', formData, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
    return response?.data
}

export async function reactArticle(slug: string, isFavourite: boolean) {
    if (isFavourite) {
        const response = await API.delete(`/articles/${slug}/favorite`)
        return response?.data
    }
    const response = await API.post(`/articles/${slug}/favorite`)
    return response?.data
}


