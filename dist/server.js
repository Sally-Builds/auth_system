"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const app_1 = __importDefault(require("./app"));
const handleEnv_1 = require("./config/handleEnv");
const database_1 = __importDefault(require("./config/database"));
const controllers_1 = __importDefault(require("./controllers"));
(0, dotenv_1.config)();
//connect database
new database_1.default(console, handleEnv_1.MONGO_URL).connect();
//start server
new app_1.default((0, controllers_1.default)(), handleEnv_1.PORT).listen();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFnQztBQUNoQyxnREFBd0I7QUFDeEIsa0RBQWtEO0FBQ2xELGlFQUFtQztBQUNuQyxnRUFBd0M7QUFHeEMsSUFBQSxlQUFNLEdBQUUsQ0FBQTtBQUNSLGtCQUFrQjtBQUNsQixJQUFJLGtCQUFFLENBQUMsT0FBTyxFQUFHLHFCQUFvQixDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDaEQsY0FBYztBQUNkLElBQUksYUFBRyxDQUFDLElBQUEscUJBQVcsR0FBRSxFQUFFLGdCQUFjLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQSJ9