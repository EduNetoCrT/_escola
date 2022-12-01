import { Router } from "express";

const apiRoutes = Router();


apiRoutes.get("/", (request, response) => {
    console.log("rota funcionando")
    response.send("Primeira rota")
} )





export default apiRoutes