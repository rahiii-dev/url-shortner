import { IMongoRepository } from "../../../core/repository/repository.interface";
import { IShortener } from "../shortener.modal";

export interface IShortenerRepository extends IMongoRepository<IShortener> {
    incrementClick(shortCode: string): Promise<boolean>;
}