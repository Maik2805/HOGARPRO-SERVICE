import * as usuarioController from "./controller/UsuarioController";
import * as loginController from "./controller/LoginController";

interface IRoute {
    path: string;
    method: string;
    action: Function;
    adminRequired?: boolean;
    isAdmin?: boolean;
    notLogged?: boolean;
}

export const AppRoutes: IRoute[] = [
    {
        path: "/app/login",
        method: "post",
        action: loginController.login,
        adminRequired: false,
        notLogged: true
    },
    {
        path: "/app/register",
        method: "post",
        action: loginController.register,
        notLogged: true
    },
    {
        path: "/usuarios/all",
        method: "get",
        action: usuarioController.all
    },
    {
        path: "/usuarios/find/:id",
        method: "get",
        action: usuarioController.findById
    },
    {
        path: "/usuarios/getPublicInfo/:id",
        method: "get",
        action: usuarioController.getPublicInfo
    },
    {
        path: "/usuarios",
        method: "post",
        action: usuarioController.save
    },
    {
        path: "/usuarios/addLaborUsuario",
        method: "post",
        action: usuarioController.addLaborUsuario
    }, {
        path: "/usuarios/inactiveLaborUsuario",
        method: "post",
        action: usuarioController.inactiveLaborUsuario
    }
];

