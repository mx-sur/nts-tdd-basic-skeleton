import { Request, Response } from 'express';
import { Controller } from '../../../shared/controller';
import { Ok } from '../../../shared/http-handler';

export default class StatusGetController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    Ok(res, { time: new Date() });
  }
}
