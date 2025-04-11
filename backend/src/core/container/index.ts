import { Container } from "inversify";
import { loadExternalContainer } from "../../module/external/external.module";
import { loadUserContainer } from "../../module/user/user.module";
import { loadShortenerContainer } from "../../module/shortener/shortener.module";

const container = new Container();

loadExternalContainer(container);
loadUserContainer(container);
loadShortenerContainer(container);

export { container };

