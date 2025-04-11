import { isAxiosError } from "axios";

export function parseError(error: any, fallback = "Something went wrong") {
    if(isAxiosError(error)){
        return error?.response?.data?.message || fallback;
    } 
    return error?.message || fallback;
}