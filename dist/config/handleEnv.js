"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PASSWORD_SALT = exports.PORT = exports.MONGO_URL = exports.isDev = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.isDev = process.env.NODE_ENV !== 'production';
const requiredEnvs = [
    'MONGO_URL',
    'PORT',
    'PASSWORD_SALT'
];
const envs = requiredEnvs.reduce((acc, key) => {
    acc[key] = process.env[key];
    return acc;
}, {});
const missingEnvs = requiredEnvs.filter((key) => !envs[key]);
if (missingEnvs.length > 0) {
    console.error('ENV Error, the following ENV variables are not set:');
    console.table(missingEnvs);
    console.log(missingEnvs);
    throw new Error('Fix Env and rebuild');
}
_a = process.env, exports.MONGO_URL = _a.MONGO_URL, exports.PORT = _a.PORT, exports.PASSWORD_SALT = _a.PASSWORD_SALT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlRW52LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9oYW5kbGVFbnYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLG9EQUEyQjtBQUUzQixnQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFBO0FBQ0YsUUFBQSxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEtBQUssWUFBWSxDQUFBO0FBRTFELE1BQU0sWUFBWSxHQUFHO0lBQ2pCLFdBQVc7SUFDWCxNQUFNO0lBQ04sZUFBZTtDQUNULENBQUE7QUFNVixNQUFNLElBQUksR0FBUyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBUyxFQUFFLEdBQVcsRUFBRSxFQUFFO0lBQzlELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBcUIsQ0FBQTtJQUMvQyxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUMsRUFBRSxFQUFVLENBQUMsQ0FBQTtBQUVkLE1BQU0sV0FBVyxHQUF3QixZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBRWpGLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDeEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFBO0lBQ3BFLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7Q0FDekM7QUFFWSxLQUlULE9BQU8sQ0FBQyxHQUFHLEVBSFgsaUJBQVMsaUJBQ1QsWUFBSSxZQUNKLHFCQUFhLG9CQUNGIn0=