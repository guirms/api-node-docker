import { Router } from 'express';
import { container } from 'tsyringe';
import { UserController } from '../../presentation/controllers/user-controller';

export const userRoute = Router();

userRoute.get('/getUser', async (req, res) => {
    const userController = container.resolve(UserController);
    res.send(await userController.handle());
});
