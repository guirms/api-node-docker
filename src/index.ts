import 'reflect-metadata'
import { config } from 'dotenv';
import express from 'express';
import { userRoute } from './infra/routes/user-route';
import "./infra/cross-cutting/native-injector" 

config();

const app = express();

const port = process.env.PORT || 8000;

app.use('/user', userRoute);

app.listen(port, () => {
    console.log('listening on port ' + port);
});

