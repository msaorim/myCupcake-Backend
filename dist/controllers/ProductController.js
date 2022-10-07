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
exports.ProductConstroller = void 0;
const ProductService_1 = require("../services/ProductService");
class ProductConstroller {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, price, description, category_id } = req.body;
            const serv = new ProductService_1.ProductService();
            if (!req.file) {
                throw new Error("Erro no arquivo de imagem!!!");
            }
            else {
                const { filename: banner } = req.file;
                const obj = yield serv.create({
                    name,
                    price,
                    description,
                    banner,
                    category_id
                });
                return res.json(obj);
            }
        });
    }
    findAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serv = new ProductService_1.ProductService();
            const list = yield serv.findAll();
            return res.json(list);
        });
    }
    findByCategory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const category_id = req.query.category_id;
            const serv = new ProductService_1.ProductService();
            const obj = yield serv.findByCategory({ category_id });
            return res.json(obj);
        });
    }
    findByCategories(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const serv = new ProductService_1.ProductService();
            const obj = yield serv.findByCategories();
            return res.json(obj);
        });
    }
}
exports.ProductConstroller = ProductConstroller;
