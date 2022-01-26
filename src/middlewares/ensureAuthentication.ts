import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthentication(request: Request, response: Response, next: NextFunction) {
  //Receber o token
  const authToken = request.headers.authorization

  if (!authToken) return response.status(401).end()

  const [, token] = authToken.split(" ")

  // Validar token
  try {
    const { sub } = verify(token, "b4aeb7832a13b57621e6a58febd1afe6") as IPayload

    //Recuperar info do user
    request.user_id = sub;

    return next()
  } catch (error) {
    return response.status(401).end()
  }



}

