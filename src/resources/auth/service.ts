import IAuth, {Login, Register, IUserRepo} from "./interface";
import PasswordEncryption from "../../helpers/cryptography/interface";


/**
 * @class Authentication - This class handles the authentication business logic of a user in our application.
 */
export default class Authentication implements IAuth {

    /**
     * 
     * @param UserRepo - handles the data repository of the users database
     * @param PassEncrypt handles the password encryption - hashing and verifying the password
     */
    constructor(private readonly UserRepo: IUserRepo, private readonly PassEncrypt: PasswordEncryption){}

    /**
     * 
     * @param data user register data request object
     * @returns string indicating the success of the operation
     * @throws throws an error if first_name, last_name, email is not provided or email already taken
     */
    async register(data: Register.Request): Promise<Register.Response> {
       try {
         await this.registrationValidation(data)

         let initials = data.first_name[0] + data.last_name[0]
         let full_name = data.first_name + " " + data.last_name
         await this.UserRepo.create({...data, initials, full_name, password: await this.PassEncrypt.hash(data.password as string)})
 
         return "Registration Successful. Please Login"
       } catch (error:any) {
        throw new Error(error)
       }
    }

    async registrationValidation(data: Register.Request): Promise<void> {
        if(!data.first_name) throw new Error("provide a first name")
        if(!data.last_name) throw new Error("provide a last name")
        if(!data.email) throw new Error("provide an email")
        //check if email exist
       if(await this.UserRepo.getUserByEmail(data.email)) throw new Error("User with this email already exist")
       if(!data.password || data.password.length < 8) throw new Error("provide a password greater than 8 characters")
    }

    /**
     * 
     * @param data login object which is the email and password of the user who want to login
     * @returns object containing the user object
     * @throws throws an error if either email or password is incorrect
     */
    async login(data: Login.Request): Promise<Login.Response> {
        try {
            const user = await this.UserRepo.getUserByEmail(data.email)
        
        if(!user) throw new Error("incorrect email or password")
        //check if password is correct
        if(!await this.PassEncrypt.verify(user.password as string, data.password)) throw new Error("incorrect email or password")
        
        user.password = undefined
        return user
        } catch (error:any) {
            throw new Error(error)
        }
    }

}