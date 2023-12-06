"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BcryptAdapter = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class BcryptAdapter {
    constructor(salt) {
        this.salt = salt;
    }
    async hash(password) {
        console.log(typeof this.salt);
        const hash = await bcryptjs_1.default.hash(password, this.salt * 1);
        return hash;
    }
    async verify(dbPassword, inputtedPassword) {
        return await bcryptjs_1.default.compare(inputtedPassword, dbPassword);
    }
}
exports.BcryptAdapter = BcryptAdapter;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmNyeXB0QWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9oZWxwZXJzL2NyeXB0b2dyYXBoeS9CY3J5cHRBZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdEQUE2QjtBQUc3QixNQUFhLGFBQWE7SUFDeEIsWUFBOEIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBRyxDQUFDO0lBRTlDLEtBQUssQ0FBQyxJQUFJLENBQUUsUUFBZ0I7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixNQUFNLElBQUksR0FBRyxNQUFNLGtCQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ3ZELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELEtBQUssQ0FBQyxNQUFNLENBQUUsVUFBa0IsRUFBRSxnQkFBd0I7UUFDeEQsT0FBTyxNQUFNLGtCQUFNLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLFVBQVUsQ0FBQyxDQUFBO0lBQzNELENBQUM7Q0FDRjtBQVpELHNDQVlDIn0=