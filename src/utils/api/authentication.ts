import { getCookie } from "utils/cookies/cookies";

export function authentication_option() {
    return {
        headers: {
            'Authorization': `Token ${getCookie("authentication_code")}`
        }
    }
}
