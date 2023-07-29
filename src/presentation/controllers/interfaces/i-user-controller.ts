import { User } from "../../../domain/models/user";
import { HttpResponse } from "../../../domain/objects/responses/response-base";

export interface IUserController {
    handle(): Promise<HttpResponse<User[]>>;
}
