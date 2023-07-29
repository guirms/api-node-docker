import 'reflect-metadata'
import { config } from 'dotenv';
import express from 'express';
import { userRoute } from './infra/routes/user-route';
import "./infra/cross-cutting/native-injector"
import { MongoContext } from './infra/database/mongo-context';

const initApp = async () => {
    config();
    
    const app = express();
    
    const port = process.env.Port || 8000;

    app.use('/user', userRoute);

    await MongoContext.connect();

    app.listen(port, () => {
        console.log('listening on port ' + port);
    });
};

initApp();
