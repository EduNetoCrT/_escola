import express from 'express';
import dotenv, { config } from 'dotenv'
const app = express();
dotenv.config();






app.listen(process.env.PORT, () => { console.log(` Servidor rodando na porta ${ process.env.PORT }`) })







