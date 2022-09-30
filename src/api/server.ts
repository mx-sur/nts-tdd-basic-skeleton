import express from 'express';
import * as http from 'http';
import helmet from 'helmet';
import errorHandler from 'errorhandler';
import compress from 'compression';
import Logger from '../shared/domain/Logger';
import container from './dependency-injection';
import Router from 'express-promise-router';

export class Server {
  private express: express.Express;
  readonly port: string;
  private logger: Logger;
  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.logger = container.get('Shared.Logger');
    this.express = express();
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: 'deny' }));
    this.express.use(compress());
    const router = Router();
    router.use(errorHandler());
    this.express.use(router);
  }
}
