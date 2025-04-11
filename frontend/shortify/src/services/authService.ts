import axios from "@lib/axios";
import { IUser } from "src/types/user.interface";

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const BASE_URL = "/user"

export const authService = {
  async login(payload: LoginPayload) {
    const res = await axios.post<{user: IUser, token: string}>(`${BASE_URL}/login`, payload);
    return res.data;
  },

  async register(payload: RegisterPayload) {
    const res = await axios.post<IUser>(`${BASE_URL}/register`, payload);
    return res.data;
  },
};
