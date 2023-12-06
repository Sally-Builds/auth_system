"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("./model"));
class UserRepository {
    async create(data) {
        try {
            const user = await model_1.default.create(data);
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
    async getUserByEmail(email) {
        try {
            const user = await model_1.default.findOne({ email });
            return user;
        }
        catch (error) {
            throw new Error(error);
        }
    }
}
exports.default = UserRepository;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yZXNvdXJjZXMvYXV0aC9kYXRhc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0Esb0RBQStCO0FBRS9CLE1BQXFCLGNBQWM7SUFDL0IsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFXO1FBQ3BCLElBQUk7WUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGVBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFMUMsT0FBTyxJQUFJLENBQUE7U0FDZDtRQUFDLE9BQU8sS0FBUyxFQUFFO1lBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDekI7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLGNBQWMsQ0FBQyxLQUFhO1FBQzlCLElBQUk7WUFDQSxNQUFNLElBQUksR0FBRyxNQUFNLGVBQVMsQ0FBQyxPQUFPLENBQUMsRUFBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDO1lBQzlDLE9BQU8sSUFBSSxDQUFBO1NBQ2Q7UUFBQyxPQUFPLEtBQVMsRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3pCO0lBQ0wsQ0FBQztDQUNKO0FBbkJELGlDQW1CQyJ9