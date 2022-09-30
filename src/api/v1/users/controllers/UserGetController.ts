import { Request, Response } from 'express';
import { Controller } from '../../../shared/controller';
import { InternalServerError, Ok } from '../../../shared/http-handler';

export default class UserGetController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    try {
      Ok(res, { id: 1, name: 'Cesar Tapia', email: 'cesartapia@multiplica.com'});
    } catch (err) {
      InternalServerError(err, req, res);
    }
  }
}
