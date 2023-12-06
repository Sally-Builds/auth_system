"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const service_1 = __importDefault(require("../resources/auth/service"));
const datasource_1 = __importDefault(require("../resources/auth/datasource"));
const BcryptAdapter_1 = require("../helpers/cryptography/BcryptAdapter");
const handleEnv_1 = require("../config/handleEnv");
class AuthFactory {
    constructor() {
        this.Authentication = new service_1.default(new datasource_1.default(), new BcryptAdapter_1.BcryptAdapter(handleEnv_1.PASSWORD_SALT));
    }
    async register(data) {
        try {
            const message = await this.Authentication.register(data);
            return message;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async login(data) {
        try {
            const user = await this.Authentication.login(data);
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.default = AuthFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvZmFjdG9yeS9hdXRoRmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHdFQUF1RDtBQUN2RCw4RUFBMEQ7QUFDMUQseUVBQXNFO0FBQ3RFLG1EQUFvRDtBQUdwRCxNQUFxQixXQUFXO0lBSTVCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGlCQUFjLENBQUMsSUFBSSxvQkFBYyxFQUFFLEVBQUUsSUFBSSw2QkFBYSxDQUFDLHlCQUFrQyxDQUFDLENBQUMsQ0FBQTtJQUN6SCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVEsQ0FBRSxJQUFzQjtRQUNsQyxJQUFJO1lBQ0EsTUFBTSxPQUFPLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUV4RCxPQUFPLE9BQU8sQ0FBQTtTQUNqQjtRQUFDLE9BQU8sS0FBUyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQUssQ0FBRSxJQUFtQjtRQUM1QixJQUFJO1lBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtZQUVsRCxPQUFPLElBQUksQ0FBQTtTQUNkO1FBQUMsT0FBTyxLQUFTLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUN6QjtJQUNMLENBQUM7Q0FDSjtBQTNCRCw4QkEyQkMifQ==