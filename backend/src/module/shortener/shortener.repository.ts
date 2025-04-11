import { injectable } from "inversify";
import { MongoBaseRepository } from "../../core/repository/mongo.base.repository";
import { IShortener, Shortener } from "./shortener.modal";
import { IShortenerRepository } from "./interfaces/shortener.respository.interface";
import { InternalError } from "../../core/utils/app.errors";

@injectable()
export class ShortenerRepository extends MongoBaseRepository<IShortener> implements IShortenerRepository {
    constructor() {
        super(Shortener);
    }

    async incrementClick(shortCode: string) {
        try {            
            const updates = await this.repository.updateOne({ shortCode }, { $inc: { clickCount: 1 } });
            return updates.acknowledged;
        } catch (error) {
            throw new InternalError("Error incrementing click count");
        }
    }
}