import TYPES from '../../core/container/container.types';
import { Container } from "inversify";
import { ShortenerService } from './shortener.service';
import { IShortenerService } from './interfaces/shortener.service.interface';
import { IShortenerRepository } from './interfaces/shortener.respository.interface';
import { ShortenerRepository } from './shortener.repository';
import { ShortenerController } from './shortner.controller';

function loadShortenerContainer(container: Container) {
    container.bind<ShortenerController>(TYPES.ShortenerController).to(ShortenerController);
    container.bind<IShortenerService>(TYPES.ShortenerService).to(ShortenerService);
    container.bind<IShortenerRepository>(TYPES.ShortenerRepository).to(ShortenerRepository);
}

export { loadShortenerContainer };