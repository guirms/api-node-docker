import { User } from "../../../domain/models/user";
import { CreateUserRequest } from "../../../domain/objects/requests/user-requests";
import { HttpResponse } from "../../../domain/objects/responses/response-base";

export interface IUserController {
    getUsers(): Promise<HttpResponse<User[]>>;
    createUser(createUserRequest: CreateUserRequest): Promise<HttpResponse<string>>;
}
