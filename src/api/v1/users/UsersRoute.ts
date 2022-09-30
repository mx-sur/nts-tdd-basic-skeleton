import { Request, Response, Router } from 'express';
import UserGetController from './controllers/UserGetController';
import UserPutController from './controllers/UserPutController';

export const register = (router: Router): void => {
    const userPutController = new UserPutController();
    router.put('/users/:id', (req: Request, res: Response) => userPutController.run(req, res));

    const userGetController = new UserGetController();
    router.get('/users', (req: Request, res: Response) => userGetController.run(req, res));
};
