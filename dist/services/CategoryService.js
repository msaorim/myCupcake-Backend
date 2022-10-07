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
exports.CategoryService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CategoryService {
    create({ name }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name === "") {
                throw new Error("Nome não pode ser vazio!!!");
            }
            //verifica categoria cadastrada
            const categoryAlreadyExists = yield prisma_1.default.category.findFirst({
                where: {
                    name: name
                }
            });
            if (categoryAlreadyExists) {
                throw new Error("Categoria já Cadastrada!");
            }
            const category = yield prisma_1.default.category.create({
                data: {
                    name: name
                }, select: {
                    id: true,
                    name: true
                }
            });
            return category;
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const lista = yield prisma_1.default.category.findMany({
                select: {
                    id: true,
                    name: true
                }
            });
            return lista;
        });
    }
}
exports.CategoryService = CategoryService;
