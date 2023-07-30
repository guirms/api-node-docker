import { inject, injectable } from "tsyringe";
import { IUserRepository } from "../../infra/repositories/interfaces/i-user-repository";
import { IUserController } from "./interfaces/i-user-controller";
import { CreateUserRequest } from "../../domain/objects/requests/user-requests";
import { HttpResponse } from "../../domain/objects/responses/response-base";
import { User } from "../../domain/models/user";

@injectable()
export class UserController implements IUserController {
    constructor(
        @inject('UserRepository')
        private readonly userRepository: IUserRepository) { }

    public async getUsers(): Promise<HttpResponse<User[]>> {
        try {
            const users = await this.userRepository.getUsers();

            return {
                statusCode: 200,
                body: users
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: error
            };
        }
    }

    public async createUser(createUserRequest: CreateUserRequest): Promise<HttpResponse<string>> {
        try {
            const createUser = await this.userRepository.createUser(createUserRequest);

            return {
                statusCode: 200,
                body: createUser
            };
        } catch (error) {
            console.log(error);
            return {
                statusCode: 500,
                body: error
            };
        }
    }
}