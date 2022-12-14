import { Request, Response, Router } from 'express';
import StatusGetController from './controllers/StatusGetController';

export const register = (router: Router): void => {
  const controller: StatusGetController = new StatusGetController();
  router.get('/status', (req: Request, res: Response) => controller.run(req, res));
};
