import express from 'express';
import 'reflect-metadata'
import dotenv from 'dotenv'
import apiRoutes from './routers/routes';
const app = express();
dotenv.config();


app.use(express.json())
app.use(apiRoutes)

app.use((request, response) => {
    response.json( {msg: "Rota não encontrada"} )
} );





app.listen(process.env.PORT, () => { console.log(` Servidor rodando na porta ${ process.env.PORT }`) })







