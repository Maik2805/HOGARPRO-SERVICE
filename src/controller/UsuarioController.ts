import { AppDataSource } from "../data-source";
import { validate } from "class-validator"
import { Usuario } from "../entity/Usuario";
import { Request, Response } from "express";

import * as usuarioService from "../service/UsuarioService"

const userRepository = AppDataSource.getRepository(Usuario);


export async function all(req: Request, res: Response) {
    const usuarios: Usuario[] = await usuarioService.all();
    res.send(usuarios);
};
