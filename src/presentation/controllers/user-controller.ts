import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../infra/repositories/interfaces/i-user-repository";
import { IUserController } from "./interfaces/i-user-controller";

@injectable()
export class UserController implements IUserController {
    constructor(
        @inject("UserRepository")
        private readonly userRepository: IUserRepository) { }

    public async handle() {
        try {
            const users = await this.userRepository.getUsers();

            return {
                statusCode: 200,
                body: users
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong'
            };
        }
    }
}