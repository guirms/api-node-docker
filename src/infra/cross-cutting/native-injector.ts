import { container } from "tsyringe";
import { UserRepository } from "../repositories/user-repository";
import { IUserRepository } from "../repositories/interfaces/i-user-repository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)