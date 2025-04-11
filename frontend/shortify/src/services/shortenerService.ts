import axios from "@lib/axios";
import { IPaginationResponse } from "src/types/pagination.interface";
import { IShortUrl } from "src/types/shortener.interface";

export const shortnerService = {
  async shorten(payload: { originalUrl: string }) {
    const res = await axios.post<IShortUrl>(`/shorten`, payload);
    return res.data;
  },
  async myShortenedUrls(payload: { page: number; limit: number }) {
    const res = await axios.get<IPaginationResponse<IShortUrl>>(`/my-short-urls`, {params: payload});
    return res.data;
  },
  async activateUrl(payload: { shortCode: string }) {
    const res = await axios.put(`/${payload.shortCode}/activate`);
    return res.data;
  },
  async deActivateUrl(payload: { shortCode: string }) {
    const res = await axios.put(`/${payload.shortCode}/deactivate`);
    return res.data;
  },
}