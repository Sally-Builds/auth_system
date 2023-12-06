import Authentication from "../resources/auth/service";
import UserRepository from "../resources/auth/datasource";
import { BcryptAdapter } from "../helpers/cryptography/BcryptAdapter";
import { PASSWORD_SALT } from "../config/handleEnv";
import { Login, Register } from "../resources/auth/interface";

export default class AuthFactory {
    private Authentication;


    constructor() {
        this.Authentication = new Authentication(new UserRepository(), new BcryptAdapter(PASSWORD_SALT as unknown as number))
    }

    async register (data: Register.Request): Promise<Register.Response> {
        try {
            const message = await this.Authentication.register(data)

            return message
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async login (data: Login.Request): Promise<Login.Response> {
        try {
            const user = await this.Authentication.login(data)

            return user
        } catch (error:any) {
            throw new Error(error)
        }
    }
}