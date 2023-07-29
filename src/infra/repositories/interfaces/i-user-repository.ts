import { User } from "../../../domain/models/user";
import { CreateUserRequest } from "../../../domain/objects/requests/user-requests";

export interface IUserRepository {
    getUsers(): Promise<User[]>;
    createUser(createUserRequest: CreateUserRequest): Promise<string>;
}
