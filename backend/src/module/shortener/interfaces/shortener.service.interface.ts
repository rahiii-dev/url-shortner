import { IPaginationResponse } from "../../../core/repository/repository.interface";
import { CreateShortUrlDto, ShortUrlDto } from "../dto/shortener.dto";

export interface IShortenerService {
  createShortUrl(data: CreateShortUrlDto): Promise<ShortUrlDto>;
  getOriginalUrl(shortCode: string): Promise<ShortUrlDto | null>;
  getMyShortUrls(userId: string, filter: {page: number, limit: number}): Promise<IPaginationResponse<ShortUrlDto>>;
  incrementClick(shortCode: string): Promise<void>;
  activateShortUrl(shortCode: string): Promise<void> 
  deactivateShortUrl(shortCode: string): Promise<void> 
}
