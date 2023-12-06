"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Authentication {
    /**
     *
     * @param UserRepo
     * @param PassEncrypt
     */
    constructor(UserRepo, PassEncrypt) {
        this.UserRepo = UserRepo;
        this.PassEncrypt = PassEncrypt;
    }
    /**
     *
     * @param data
     * @returns
     */
    async register(data) {
        try {
            //run validation according to your needs
            if (!data.first_name)
                throw new Error("provide a first name");
            if (!data.last_name)
                throw new Error("provide a last name");
            if (!data.email)
                throw new Error("provide an email");
            //check if email exist
            console.log(await this.UserRepo.getUserByEmail(data.email), data.email);
            if (await this.UserRepo.getUserByEmail(data.email))
                throw new Error("User with this email already exist");
            if (!data.password || data.password.length < 8)
                throw new Error("provide a password greater than 8 characters");
            let initials = data.first_name[0] + data.last_name[0];
            let full_name = data.first_name + " " + data.last_name;
            await this.UserRepo.create({ ...data, initials, full_name, password: await this.PassEncrypt.hash(data.password) });
            return "Registration Successful. Please Login";
        }
        catch (error) {
            throw new Error(error);
        }
    }
    /**
     *
     * @param data
     * @returns
     */
    async login(data) {
        try {
            const user = await this.UserRepo.getUserByEmail(data.email);
            if (!user)
                throw new Error("incorrect email or password");
            //check if password is correct
            if (!await this.PassEncrypt.verify(user.password, data.password))
                throw new Error("incorrect email or password");
            user.password = undefined;
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.default = Authentication;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvYXV0aC9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsTUFBcUIsY0FBYztJQUUvQjs7OztPQUlHO0lBQ0gsWUFBNkIsUUFBbUIsRUFBbUIsV0FBK0I7UUFBckUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFtQixnQkFBVyxHQUFYLFdBQVcsQ0FBb0I7SUFBRSxDQUFDO0lBRXJHOzs7O09BSUc7SUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLElBQXNCO1FBQ2xDLElBQUk7WUFDRix3Q0FBd0M7WUFDeEMsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQTtZQUM1RCxJQUFHLENBQUMsSUFBSSxDQUFDLFNBQVM7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO1lBQzFELElBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSztnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUE7WUFDbkQsc0JBQXNCO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ3ZFLElBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQTtZQUN4RyxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQTtZQUU3RyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDckQsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQTtZQUN0RCxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUMsR0FBRyxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBa0IsQ0FBQyxFQUFDLENBQUMsQ0FBQTtZQUUxSCxPQUFPLHVDQUF1QyxDQUFBO1NBQy9DO1FBQUMsT0FBTyxLQUFTLEVBQUU7WUFDbkIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN0QjtJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsS0FBSyxDQUFDLEtBQUssQ0FBQyxJQUFtQjtRQUMzQixJQUFJO1lBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7WUFFL0QsSUFBRyxDQUFDLElBQUk7Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBQ3hELDhCQUE4QjtZQUM5QixJQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBa0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNkJBQTZCLENBQUMsQ0FBQTtZQUV6SCxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQTtZQUN6QixPQUFPLElBQUksQ0FBQTtTQUNWO1FBQUMsT0FBTyxLQUFTLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN6QjtJQUNMLENBQUM7Q0FDSjtBQXRERCxpQ0FzREMifQ==