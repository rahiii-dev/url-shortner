
export interface CreateShortUrlDto {
    userId: string;
    originalUrl: string;
}

export interface ShortUrlDto {
    id: string;
    userId: string;
    originalUrl: string;
    shortCode: string;
    clickCount: number;
    isActive?: boolean;
    createdAt: Date;
}
