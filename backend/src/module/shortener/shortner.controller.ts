import { inject, injectable } from "inversify";
import { IShortenerService } from "./interfaces/shortener.service.interface";
import asyncWrapper from "../../core/utils/asyncWrapper";
import { CreateShortUrlDto } from "./dto/shortener.dto";
import { AuthRequest } from "../../core/token/user/userRequest";
import TYPES from '../../core/container/container.types';
import { Request, Response } from "express";

@injectable()
export class ShortenerController {
    @inject(TYPES.ShortenerService) private shortenerService!: IShortenerService;

    /**
   * @route POST /shorten
   * @scope Private
   **/
    public createShortUrl = asyncWrapper(async (req: AuthRequest, res: Response) => {
        const { originalUrl } = req.body as CreateShortUrlDto;
        if(!originalUrl){
            return res.status(400).json({ error: "Original URL is required" });
        }

        const userId = req.payload!.userId;
        const shortened = await this.shortenerService.createShortUrl({ userId, originalUrl });
        res.json(shortened);
    });

    /**
   * @route GET /:shortCode 
   * @scope Private
   **/
    public redirectToOriginal = asyncWrapper(async (req: Request, res: Response) => {
        const url = await this.shortenerService.getOriginalUrl(req.params.shortCode);
        if (!url) {
            return res.status(404).json({ error: "URL not found" });
        } else if (!url.isActive) {
            return res.status(403).json({ error: "URL is not active" });
        }
        await this.shortenerService.incrementClick(req.params.shortCode);   
        return res.redirect(url.originalUrl);
    });

    /**
   * @route GET /my-short-urls 
   * @scope Private
   **/
    public myShortUrls = asyncWrapper(async (req: AuthRequest, res: Response) => {
        const userId = req.payload!.userId;
        const page = parseInt(req.query.page as string) || 1;
        const limit = parseInt(req.query.limit as string) || 10;
        const shortUrl = await this.shortenerService.getMyShortUrls(userId, { page, limit });
        res.json(shortUrl);
    });

    /**
   * @route PATCH /:shortCode/activate
   * @scope Private
   **/
    public activateUrl = asyncWrapper(async (req: AuthRequest, res: Response) => {
        const shortCode = req.params.shortCode;
        const userId = req.payload!.userId;
        const shortUrl = await this.shortenerService.getOriginalUrl(shortCode);
        if(!shortUrl){
            return res.status(404).json({ error: "URL not found" });
        } else if(shortUrl.userId !== userId){
            return res.status(403).json({ error: "You are not authorized to activate this URL" });
        } else if(shortUrl.isActive){
            return res.status(400).json({ error: "URL is already activated" });
        }

        await this.shortenerService.activateShortUrl(shortUrl.id);
        res.status(204).send();
    });

    /**
   * @route PATCH /:shortCode/deactivate
   * @scope Private
   **/
    public deactivateUrl = asyncWrapper(async (req: AuthRequest, res: Response) => {
        const shortCode = req.params.shortCode;
        const userId = req.payload!.userId;
        const shortUrl = await this.shortenerService.getOriginalUrl(shortCode);
        if(!shortUrl){
            return res.status(404).json({ error: "URL not found" });
        } else if(shortUrl.userId !== userId){
            return res.status(403).json({ error: "You are not authorized to deactivate this URL" });
        } else if(!shortUrl.isActive){
            return res.status(400).json({ error: "URL is already deactivated" });
        }
        await this.shortenerService.deactivateShortUrl(shortUrl.id);
        res.status(204).send();
    });
}