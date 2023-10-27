import mongoose from 'mongoose'


const options = {
    keepAlive: true,
    serverSelectionTimeoutMS: 30000, // Defaults to 30000 (30 seconds)
    useNewUrlParser: true,
    useUnifiedTopology: true,
}


class DB {
    constructor(private readonly LOG: any, private readonly DB_URL: string){}

    public connect(){
        mongoose.set("strictQuery", false);
        mongoose
          .connect(this.DB_URL, options)
          .then(async () => {
            this.LOG.info(`Successfully connected to`, this.DB_URL);
            // new DefaultScripts();
          })
          .catch((err: any) => {
            this.LOG.error(`There was a db connection error`, err);
            process.exit(0);
          });
        mongoose.connection.once("disconnected", () => {
            this.LOG.error(`Successfully disconnected from ${this.DB_URL}`);
        });
        process.on("SIGINT", () => {
          mongoose.connection.close().then(() => {
            this.LOG.error("dBase connection closed due to app termination");
            process.exit(0);
          });
        });
    }
}

export default DB