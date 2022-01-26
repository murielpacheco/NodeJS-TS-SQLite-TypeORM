import { getCustomRepository } from 'typeorm';
import { UserRepositories } from '../repositories/UserRepositories';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';


interface IAuthenticateUserRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateUserRequest) {
    const userRepositories = getCustomRepository(UserRepositories)

    const user = await userRepositories.findOne({ email })

    if (!user) throw new Error("Email or password incorrect")


    const passwordCheck = await compare(password, user.password)

    if (!passwordCheck) throw new Error("Email or password incorrect")

    const token = sign({ email: user.email }, "b4aeb7832a13b57621e6a58febd1afe6", {
      subject: user.id,
      expiresIn: "3d"
    })

    return token

  }

}

export { AuthenticateUserService }