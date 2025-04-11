import { inject, injectable } from "inversify";
import TYPES from '../../core/container/container.types';
import { IShortenerService } from "./interfaces/shortener.service.interface";
import { IShortenerRepository } from "./interfaces/shortener.respository.interface";
import { CreateShortUrlDto, ShortUrlDto } from "./dto/shortener.dto";
import { IShortener } from "./shortener.modal";
import { IPaginationResponse } from "../../core/repository/repository.interface";
import { randomBytes } from 'crypto';
import { BadRequestError } from "../../core/utils/app.errors";

@injectable()
export class ShortenerService implements IShortenerService {
    @inject(TYPES.ShortenerRepository) private repo!: IShortenerRepository;

    async createShortUrl(data: CreateShortUrlDto): Promise<ShortUrlDto> {
        const shortCode = await this.generateShortCode();
        const shortUrl = { ...data, shortCode };
        return this.toDTO(await this.repo.create(shortUrl));
    }

    async getOriginalUrl(shortCode: string): Promise<ShortUrlDto | null> {
        const shortUrl = await this.repo.findOne({ shortCode });
        return shortUrl ? this.toDTO(shortUrl) : null;
    }

    async getMyShortUrls(userId: string, filter: { page: number; limit: number }): Promise<IPaginationResponse<ShortUrlDto>> {
        const { page, limit } = filter;
        const shortUrls = await this.repo.paginate({ userId }, page, limit, {sort: { createdAt: -1 }});
        return { ...shortUrls, data: shortUrls.data.map(this.toDTO) };
    }

    async incrementClick(shortCode: string): Promise<void> {
        await this.repo.incrementClick(shortCode);
    }

    async deactivateShortUrl(id: string): Promise<void> {
        await this.repo.update(id, { isActive: false });
    }

    async activateShortUrl(id: string): Promise<void> {
        await this.repo.update(id, { isActive: true });
    }

    private toDTO(shortUrl: IShortener): ShortUrlDto {
        return {
            id: shortUrl.id,
            userId: shortUrl.userId,
            originalUrl: shortUrl.originalUrl,
            shortCode: shortUrl.shortCode,
            clickCount: shortUrl.clickCount,
            isActive: shortUrl.isActive,
            createdAt: shortUrl.createdAt,
        };
    }

    private async generateShortCode(length=6): Promise<string> {
        const code = randomBytes(length).toString('base64url').slice(0, length);
        const existingUrl = await this.repo.findOne({ shortCode: code });
        if (existingUrl) {
            return this.generateShortCode();
        }
        return code;
    }
}