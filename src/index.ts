import { AppDataSource } from "./data-source"
import { Request, Response } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import * as usuarioController from "./controller/UsuarioController";

const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');



AppDataSource.initialize().then(async () => {
    //INICIA CON npm start
    //nodemon --exec "npm run start"
    dotenv.config()
    const app = express();
    const path = require('path')
    app.use('/public', express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());

    const AppRoutes = [
        {
            path: "/usuarios/all",
            method: "get",
            action: usuarioController.all
        }
    ]

    AppRoutes.forEach(route => {
        app[route.method](route.path, (request: Request, response: Response, next: Function) => {
            route.action(request, response)
                .then(() => next)
                .catch(err => next(err));
        });
    });
    app.listen(3000);

}).catch(error => console.log(error))
