import { Request, Response, NextFunction, Router } from "express";
import AuthFactory from "../factory/authFactory";


export default class UserController {
    private router = Router()

    constructor(private readonly AuthFactory: AuthFactory){
        this.initializeRouter()
    }


    private initializeRouter() {
        this.router.route('/register').post(this.register)
        this.router.route('/login').post(this.login)
    }

    private register = async (req: Request, res: Response, next: NextFunction): Promise<Response>  =>
    {
        try {
            const message = await this.AuthFactory.register(req.body)
            
            return res.status(201).json({
                status: "success",
                message,
            })
        } catch (error: any) {
            return res.status(400).json({
                status: "fail",
                error: error.message,
            })
        }
        
    }

    private login = async (req: Request, res: Response, next: NextFunction): Promise<Response> =>
    {
        try {
            const user = await this.AuthFactory.login(req.body)
            
            return res.status(201).json({
                status: "success",
                data: user,
            })
        } catch (error: any) {
            return res.status(400).json({
                status: "fail",
                error: error.message,
            })
        }
        
    }

    public getRouter() {
        return this.router
    }
}