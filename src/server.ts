import express from 'express';
import router from './routes';
import cors from 'cors';
import { createNewUser, signIn } from './handlers/user';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use

app.post('login', signIn);
app.post('signup', createNewUser);

