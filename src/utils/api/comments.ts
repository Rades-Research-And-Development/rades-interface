import { limitCommentsLoaded } from "../../constants";
import API from "./api";

export async function getArticleComments(slug: string, { limit = limitCommentsLoaded, offset = 0 }) {
    console.log(offset)
    const response = await API.get(`/articles/${slug}/comments?limit=${limit}&offset=${offset}`)
    return response?.data
}

export async function commentArticle(slug: string, body: string) {
    const response = await API.post(`/articles/${slug}/comments`, {
        comment: {
            body
        }
    })
    return response?.data
}
export async function deleteCommentArticle(slug: string, comment_id: string) {
    const response = await API.delete(`/articles/${slug}/comments/${comment_id}`)
    return response?.data
}