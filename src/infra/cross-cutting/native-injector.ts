import { container } from "tsyringe";
import { UserRepository } from "../repositories/user-repository";
import { IUserRepository } from "../repositories/interfaces/i-user-repository";

export const NativeInjector = {

    registerContainers(): void {
        container.registerSingleton<IUserRepository>(
            "UserRepository",
            UserRepository
        );
    }
}
