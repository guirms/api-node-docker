import { IGetUsersController, IGetUsersRepository } from "./protocols";

export class GetUsersController implements IGetUsersController {

    constructor(private readonly getUsersRepository: IGetUsersRepository) { }

    public async handle() {
        try {
            const users = await this.getUsersRepository.getUsers();

            return {
                statusCode: 200,
                body: users
            };
        } catch (error) {
            return {
                statusCode: 500,
                body: 'Something went wrong'
            };
        }
    }
}