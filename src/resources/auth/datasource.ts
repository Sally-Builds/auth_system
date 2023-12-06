import { IUserRepo, IUser } from "./interface";
import UserModel from './model'

export default class UserRepository implements IUserRepo {
    async create(data: IUser): Promise<IUser> {
        try {
            const user = await UserModel.create(data);

            return user
        } catch (error:any) {
            throw new Error(error)
        }
    }

    async getUserByEmail(email: string): Promise<IUser | null> {
        try {
            const user = await UserModel.findOne({email});
            return user
        } catch (error:any) {
            throw new Error(error)
        }
    }
}