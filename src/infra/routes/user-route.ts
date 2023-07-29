import { Router } from 'express';
import { IUserController } from '../../presentation/controllers/interfaces/i-user-controller';

export class UserRoute {
    userRoute = Router();

    constructor(private userController: IUserController) {
        this.userRoute.get('/getUsers', async (req, res) => {        
            res.send(await this.userController.getUsers());
        });
        
        this.userRoute.post('/createUser', async (req, res) => {        
            res.send(await this.userController.createUser(req.body));
        });
    }
}



