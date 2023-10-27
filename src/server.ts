import { config } from "dotenv";
import App from "./app";
import {MONGO_URL, PORT} from './config/handleEnv'
import DB from "./config/database";


config()
//connect database
new DB(console, (MONGO_URL as string)).connect()
//start server
new App(PORT as string).listen()

