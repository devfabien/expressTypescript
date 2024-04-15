import { Request, Response } from "express";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}
