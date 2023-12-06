import express, {Application} from 'express'
import cors from 'cors'
import { IController } from './controllers';


class App {
    private PORT;
    public app: Application
    
    constructor(controller: IController[], port: string){
        this.PORT = port;
        this.app = express();
        this.initializeMiddlewares();
        this.initializeControllers(controller);
    }

    private initializeMiddlewares() {
        this.app.use(cors())
        this.app.use(express.json())
    }

    private initializeControllers(controllers: IController[]) {
        controllers.map((controller: IController) => {
            this.app.use(controller.path, controller.router);
        });
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server is Running on port ${this.PORT}`)
        })
    }

}

export default App