import UserController from "./user.controller";
import AuthFactory from "../factory/authFactory";
import { Router } from "express";


export interface IController {
    path: string,
    router: Router
}

const controllers =  (): IController[] => {
return [
        {
            path: "/api/users",
            router: new UserController(new AuthFactory()).getRouter()
        }
    ]
}

export default controllers