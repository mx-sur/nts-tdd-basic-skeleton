import { ContainerBuilder } from 'node-dependency-injection';
import StatusGetController from '../v1/status/controllers/StatusGetController';
import UserGetController from '../v1/users/controllers/UserGetController';
import UserPutController from '../v1/users/controllers/UserPutController';

const container = new ContainerBuilder();

container.register('api.v1.controllers.status', StatusGetController);
container.register('api.v1.controllers.users', UserGetController);
container.register('api.v1.controllers.users.update', UserPutController);

export default container;
