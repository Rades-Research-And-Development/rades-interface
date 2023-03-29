import API from "./api";

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
