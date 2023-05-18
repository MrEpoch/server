import express from 'express';
import router from './router';
import cors from 'cors';
import { createNewUser, signIn } from './handlers/user';
import { protectRoute } from './modules/auth';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.post('login', signIn);
app.post('signup', createNewUser);
app.use("/api", protectRoute, router);

export default app;
