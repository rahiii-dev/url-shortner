import { Container } from "inversify";
import { loadExternalContainer } from "../../module/external/external.module";
import { loadUserContainer } from "../../module/user/user.module";

const container = new Container();

loadExternalContainer(container);
loadUserContainer(container);

export { container };

