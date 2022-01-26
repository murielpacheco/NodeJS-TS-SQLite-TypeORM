import { getCustomRepository } from "typeorm"
import { ComplimentRepositories } from "../repositories/ComplimentRepositories"
import { UserRepositories } from "../repositories/UserRepositories"

interface IComplimentRequest {
  user_sender: string;
  user_receiver: string;
  tag_id: string;
  message: string;
}

class CreateComplimentService {
  async execute({ user_sender, user_receiver, tag_id, message }: IComplimentRequest) {
    const complimentRepositories = getCustomRepository(ComplimentRepositories)
    const userRepositories = getCustomRepository(UserRepositories)

    if (user_sender === user_receiver) {
      throw new Error("You can't send a compliment to yourself.")
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver)

    if (!userReceiverExists) throw new Error("User Receiver doesn't exists.")

    const compliment = complimentRepositories.create({
      user_sender,
      user_receiver,
      tag_id,
      message
    })

    await complimentRepositories.save(compliment)

    return compliment

  }
}

export { CreateComplimentService }