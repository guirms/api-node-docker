import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
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