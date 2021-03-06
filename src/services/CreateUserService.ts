import { getCustomRepository } from "typeorm"
import { UserRepositories } from "../repositories/UserRepositories"
import { hash } from "bcryptjs"

interface IUserRequest {
  name: string;
  email: string;
  admin: boolean;
  password: string;
}

class CreateUserService {
  async execute({ name, email, admin = false, password }: IUserRequest) {

    if (!email) throw new Error("Email incorrect")

    const usersRepository = getCustomRepository(UserRepositories)

    // SELECT * FROM USERS WHERE NAME = 'email'
    const userAlreadyExists = await usersRepository.findOne({
      email
    })

    if (userAlreadyExists) throw new Error("Email already used")

    const passwordHash = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      admin,
      password: passwordHash,
    })

    await usersRepository.save(user)

    return user
  }
}

export { CreateUserService }