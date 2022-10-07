"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserService_1 = require("../services/UserService");
class UserController {
    //===================================================================================
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, email, password
            //phone,
            //active,
            //userType,
            //cpf,
            //addressId
             } = req.body;
            const service = new UserService_1.UserService();
            const obj = yield service.create({
                name,
                email,
                password
                //phone,
                //active,
                //userType
                //cpf,
                //addressId
            });
            return res.json(obj);
        });
    }
    //===================================================================================
    detail(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user_email = req.user_email;
            const service = new UserService_1.UserService();
            const obj = yield service.detail(user_email);
            return res.json(obj);
        });
    }
}
exports.UserController = UserController;
