import { User } from "../../../domain/models/user";

export interface IUserRepository {
    getUsers(): Promise<User[]>;
}