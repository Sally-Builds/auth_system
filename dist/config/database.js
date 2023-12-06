"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const options = {
    keepAlive: true,
    serverSelectionTimeoutMS: 30000,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};
class DB {
    constructor(LOG, DB_URL) {
        this.LOG = LOG;
        this.DB_URL = DB_URL;
    }
    connect() {
        mongoose_1.default.set("strictQuery", false);
        mongoose_1.default
            .connect(this.DB_URL, options)
            .then(async () => {
            this.LOG.info(`Successfully connected to`, this.DB_URL);
            // new DefaultScripts();
        })
            .catch((err) => {
            this.LOG.error(`There was a db connection error`, err);
            process.exit(0);
        });
        mongoose_1.default.connection.once("disconnected", () => {
            this.LOG.error(`Successfully disconnected from ${this.DB_URL}`);
        });
        process.on("SIGINT", () => {
            mongoose_1.default.connection.close().then(() => {
                this.LOG.error("dBase connection closed due to app termination");
                process.exit(0);
            });
        });
    }
}
exports.default = DB;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uZmlnL2RhdGFiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsd0RBQStCO0FBRy9CLE1BQU0sT0FBTyxHQUFHO0lBQ1osU0FBUyxFQUFFLElBQUk7SUFDZix3QkFBd0IsRUFBRSxLQUFLO0lBQy9CLGVBQWUsRUFBRSxJQUFJO0lBQ3JCLGtCQUFrQixFQUFFLElBQUk7Q0FDM0IsQ0FBQTtBQUdELE1BQU0sRUFBRTtJQUNKLFlBQTZCLEdBQVEsRUFBbUIsTUFBYztRQUF6QyxRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQW1CLFdBQU0sR0FBTixNQUFNLENBQVE7SUFBRSxDQUFDO0lBRWxFLE9BQU87UUFDVixrQkFBUSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDbkMsa0JBQVE7YUFDTCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDN0IsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELHdCQUF3QjtRQUMxQixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxpQ0FBaUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2RCxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsa0JBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsa0NBQWtDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3BFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFO1lBQ3hCLGtCQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7Z0JBQ2pFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7Q0FDSjtBQUVELGtCQUFlLEVBQUUsQ0FBQSJ9