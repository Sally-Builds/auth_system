import express, {Application} from 'express'
import cors from 'cors'


class App {
    private PORT;
    public app: Application
    
    constructor(port: string){
        this.PORT = port;
        this.app = express();
    }

    listen(){
        this.app.listen(this.PORT, () => {
            console.log(`Server is Running on port ${this.PORT}`)
        })
    }

}

export default App