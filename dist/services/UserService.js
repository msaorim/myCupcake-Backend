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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
const bcryptjs_1 = require("bcryptjs");
class UserService {
    //===================================================================================
    create({ name, email, password
    //phone,
    //active,
    //userType,
    //cpf,
    //addressId
     }) {
        return __awaiter(this, void 0, void 0, function* () {
            // verifica email vazio
            if (!email) {
                throw new Error("Email incorreto");
            }
            //verifica email cadastrado
            const userAlreadyExists = yield prisma_1.default.user.findFirst({
                where: {
                    email: email
                }
            });
            if (userAlreadyExists) {
                throw new Error("Usuário já Cadastrado!");
            }
            // verifica se endereço é de outro usuário
            //const addressError = await prismaClient.user.findFirst({
            //    where: {
            //        addressId: addressId
            //    }
            //})
            //if (addressError) {
            //    throw new Error("Endereço de outro usuário!!!");
            //}
            const passHash = yield (0, bcryptjs_1.hash)(password, 8);
            //cadastra novo usuario
            try {
                const user = yield prisma_1.default.user.create({
                    data: {
                        name: name,
                        email: email,
                        password: passHash
                        //phone: phone,
                        //active: active,
                        //userType: userType,
                        //cpf: cpf,
                        //addressId: addressId
                    },
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                });
                return user;
            }
            catch (_a) {
                throw new Error("Erro ao gravar o registro!!");
            }
        });
    }
    //===================================================================================
    detail(user_email) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.user.findFirst({
                where: { email: user_email },
                select: {
                    name: true,
                    email: true
                }
            });
            return user;
        });
    }
}
exports.UserService = UserService;
