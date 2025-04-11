export interface IShortUrl {
    id: string;
    userId: string;
    originalUrl: string;
    shortCode: string;
    clickCount: number;
    isActive: boolean;
    createdAt: Date;
}