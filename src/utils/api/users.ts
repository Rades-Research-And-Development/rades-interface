import API from "./api";
import { authentication_option } from "./authentication";

export async function userRegister(email, password, username) {
    const response = await API.post('/users', {
        user: {
            email,
            password,
            username,
        }
    })
    return response?.data
}

export async function userLogin(email, password) {
    const response = await API.post('/users/login/email', {
        user: {
            password,
            email
        }
    })
    return response?.data
}

export async function getUser() {
    const response = await API.get('/user', authentication_option())
    return response?.data
}

export async function userOauthWallet(publicKey, signature, nonce) {
    const response = await API.post('/users/oauth/wallet', {
        user: {
            publicKey,
            signature,
            nonce,
        }
    })
    return response?.data
}
