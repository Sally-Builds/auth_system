"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("./user.controller"));
const authFactory_1 = __importDefault(require("../factory/authFactory"));
const controllers = () => {
    return [
        {
            path: "/api/users",
            router: new user_controller_1.default(new authFactory_1.default()).getRouter()
        }
    ];
};
exports.default = controllers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx3RUFBK0M7QUFDL0MseUVBQWlEO0FBU2pELE1BQU0sV0FBVyxHQUFJLEdBQWtCLEVBQUU7SUFDekMsT0FBTztRQUNDO1lBQ0ksSUFBSSxFQUFFLFlBQVk7WUFDbEIsTUFBTSxFQUFFLElBQUkseUJBQWMsQ0FBQyxJQUFJLHFCQUFXLEVBQUUsQ0FBQyxDQUFDLFNBQVMsRUFBRTtTQUM1RDtLQUNKLENBQUE7QUFDTCxDQUFDLENBQUE7QUFFRCxrQkFBZSxXQUFXLENBQUEifQ==