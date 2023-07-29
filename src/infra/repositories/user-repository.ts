import { User } from "../../domain/models/user";
import { IUserRepository } from "./interfaces/i-user-repository";

export class UserRepository implements IUserRepository {
  async getUsers(): Promise<User[]> {
    return [
        {
            id: '1',
            firstName: 'Teste',
            lastName: 'Teste2',
            email: 'teste3@',
            password: 'teste4'
        }
    ];
  }
}