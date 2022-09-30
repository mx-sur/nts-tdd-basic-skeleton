import { Request, Response } from 'express';
import { Controller } from '../../../shared/controller';
import { InternalServerError } from '../../../shared/http-handler';

export default class UserPutController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    InternalServerError(null, req, res);
  }
}
