import { Request, Response } from 'express';
import { ServerResponse } from 'http';
import httpStatus from 'http-status';

export const Ok = (res: Response, data: any = undefined) => {
  res.status(httpStatus.OK);
  res.send(data);
};

export const InternalServerError = (err: any, req: Request, res: Response) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR);
  res.end();
};

export const NoContent = (res: Response) => {
  res.status(httpStatus.NO_CONTENT);
  res.end();
};

export const NotFound = (
  res: Response,
  data: any = {
    message: 'Requested resource not found'
  }
) => {
  res.status(httpStatus.NOT_FOUND);
  res.end(data);
};

export const Created = (res: Response, data: any = undefined) => {
  res.status(httpStatus.CREATED);
  res.send(data);
};

export const BadRequest = (res: Response, data: any = { message: 'Bad request' }) => {
  res.status(httpStatus.BAD_REQUEST);
  res.end(data);
};
