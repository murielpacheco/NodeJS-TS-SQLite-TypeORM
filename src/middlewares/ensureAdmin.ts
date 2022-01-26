import { NextFunction, Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepositories } from "../repositories/UserRepositories";

export async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
  const { user_id } = request

  const userRepositories = getCustomRepository(UserRepositories)

  const { admin } = await userRepositories.findOne(user_id) as User

  if (admin) {
    return next()
  }
 
  return response.status(401).json({ error: "You must be an admin to create a tag" })

}
