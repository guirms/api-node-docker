import { Router } from 'express';
import { GetUsersController } from '../controllers/get-users/get-users';
import { MongoGetUsersRepository } from '../repositories/get-users/mongo-get-users';

export const userRoute = Router();

userRoute.get('/getUser', async (req, res) => {

    const userController = new GetUsersController(new MongoGetUsersRepository());
    res.send(await userController.handle());
});
