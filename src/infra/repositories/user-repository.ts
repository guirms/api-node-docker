import { injectable } from "tsyringe";
import { User } from "../../domain/models/user";
import { MongoContext } from "../database/mongo-context";
import { IUserRepository } from "./interfaces/i-user-repository";
import { CreateUserRequest } from "../../domain/objects/requests/user-requests";

@injectable()
export class UserRepository implements IUserRepository {

  async getUsers(): Promise<User[]> {
    const users = await MongoContext.db
      .collection<Omit<User, 'id'>>('users')
      .find({})
      .toArray();

    return users.map(({ _id, ...rest }) => ({
      ...rest,
      id: _id.toHexString(),
    }));
  }

  async createUser(createUserRequest: CreateUserRequest): Promise<string> {
    await MongoContext.db
      .collection('users')
      .insertOne(createUserRequest);

    return 'User successfully created';
  }
}