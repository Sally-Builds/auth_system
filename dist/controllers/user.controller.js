"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserController {
    constructor(AuthFactory) {
        this.AuthFactory = AuthFactory;
        this.router = (0, express_1.Router)();
        this.register = async (req, res, next) => {
            try {
                const message = await this.AuthFactory.register(req.body);
                return res.status(201).json({
                    status: "success",
                    message,
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: "fail",
                    error: error.message,
                });
            }
        };
        this.login = async (req, res, next) => {
            try {
                const user = await this.AuthFactory.login(req.body);
                return res.status(201).json({
                    status: "success",
                    data: user,
                });
            }
            catch (error) {
                return res.status(400).json({
                    status: "fail",
                    error: error.message,
                });
            }
        };
        this.initializeRouter();
    }
    initializeRouter() {
        this.router.route('/register').post(this.register);
        this.router.route('/login').post(this.login);
    }
    getRouter() {
        return this.router;
    }
}
exports.default = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUFrRTtBQUlsRSxNQUFxQixjQUFjO0lBRy9CLFlBQTZCLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRjdDLFdBQU0sR0FBRyxJQUFBLGdCQUFNLEdBQUUsQ0FBQTtRQVlqQixhQUFRLEdBQUcsS0FBSyxFQUFFLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBc0IsRUFBRTtZQUU3RixJQUFJO2dCQUNBLE1BQU0sT0FBTyxHQUFHLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUV6RCxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4QixNQUFNLEVBQUUsU0FBUztvQkFDakIsT0FBTztpQkFDVixDQUFDLENBQUE7YUFDTDtZQUFDLE9BQU8sS0FBVSxFQUFFO2dCQUNqQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUN4QixNQUFNLEVBQUUsTUFBTTtvQkFDZCxLQUFLLEVBQUUsS0FBSyxDQUFDLE9BQU87aUJBQ3ZCLENBQUMsQ0FBQTthQUNMO1FBRUwsQ0FBQyxDQUFBO1FBRU8sVUFBSyxHQUFHLEtBQUssRUFBRSxHQUFZLEVBQUUsR0FBYSxFQUFFLElBQWtCLEVBQXFCLEVBQUU7WUFFekYsSUFBSTtnQkFDQSxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFFbkQsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztvQkFDeEIsTUFBTSxFQUFFLFNBQVM7b0JBQ2pCLElBQUksRUFBRSxJQUFJO2lCQUNiLENBQUMsQ0FBQTthQUNMO1lBQUMsT0FBTyxLQUFVLEVBQUU7Z0JBQ2pCLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7b0JBQ3hCLE1BQU0sRUFBRSxNQUFNO29CQUNkLEtBQUssRUFBRSxLQUFLLENBQUMsT0FBTztpQkFDdkIsQ0FBQyxDQUFBO2FBQ0w7UUFFTCxDQUFDLENBQUE7UUEzQ0csSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUE7SUFDM0IsQ0FBQztJQUdPLGdCQUFnQjtRQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQXNDTSxTQUFTO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFBO0lBQ3RCLENBQUM7Q0FDSjtBQXBERCxpQ0FvREMifQ==