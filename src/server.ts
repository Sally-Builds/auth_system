import { config } from "dotenv";
import App from "./app";
import {MONGO_URL, PORT} from './config/handleEnv'
import DB from "./config/database";
import controllers from "./controllers";


config()
//connect database
new DB(console, (MONGO_URL as string)).connect()
//start server
new App(controllers(), PORT as string).listen()

