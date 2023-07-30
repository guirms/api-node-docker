import 'reflect-metadata'
import { config } from 'dotenv';
import express from 'express';
import "./infra/cross-cutting/native-injector"
import { MongoContext } from './infra/database/mongo-context';
import { UserRoute } from './presentation/routes/user-route';
import { NativeInjector } from './infra/cross-cutting/native-injector';
import { UserController } from './presentation/controllers/user-controller';
import { container } from 'tsyringe';

const initApp = async () => {
    config();

    const app = express();

    app.use(express.json())
    
    const port = process.env.Port || 8000;

    NativeInjector.registerContainers();

    app.use('/user', new UserRoute(container.resolve(UserController)).userRoute);

    await MongoContext.connect();

    app.listen(port, () => {
        console.log('listening on port ' + port);
    });
};

initApp();
