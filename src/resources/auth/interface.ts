import IBaseRepo from "../../helpers/baseRepoInterface"


export default interface IAuth {
    register(data: Register.Request): Promise <Register.Response>
    login(data: Login.Request): Promise<Login.Response>
}

export interface IUserRepo extends IBaseRepo<IUser> {
    getUserByEmail(email: string): Promise<IUser | null>
}

export namespace Register {
    export type Request = RegisterDTO
    export type Response = string
}

export namespace Login {
    export type Request = LoginDTO
    export type Response = IUser
}

interface LoginDTO {
    email: string,
    password: string,
}


export interface IUser {
    first_name: string,
    last_name: string,
    full_name?: string
    initials?: string,
    email: string,
    password?: string,
}

interface RegisterDTO {
    first_name: string,
    last_name: string,
    email: string,
    password?: string,
}