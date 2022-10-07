"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
// import { AddressController } from './controllers/AddressController';
const CategoryController_1 = require("./controllers/CategoryController");
const LoginController_1 = require("./controllers/LoginController");
const ProductController_1 = require("./controllers/ProductController");
const UserController_1 = require("./controllers/UserController");
const IsAuthenticated_1 = require("./middlewares/IsAuthenticated");
const multer_2 = __importDefault(require("./config/multer"));
// import { OrderController } from './controllers/OrderController';
const router = (0, express_1.Router)();
exports.router = router;
const upload = (0, multer_1.default)(multer_2.default.upload('./images'));
// Rotas User -----------
router.post('/user', new UserController_1.UserController().create);
router.get('/detail', IsAuthenticated_1.IsAuthenticated, new UserController_1.UserController().detail);
// Rotas Address---------
// router.post('/address', new AddressController().create);
// Rotas Login ----------
router.post('/login', new LoginController_1.LoginController().auth);
// Rotas Category -------
router.post('/category', IsAuthenticated_1.IsAuthenticated, new CategoryController_1.CategoryController().create);
router.get('/categories', IsAuthenticated_1.IsAuthenticated, new CategoryController_1.CategoryController().findAll);
// Rotas Product --------
router.post('/product', IsAuthenticated_1.IsAuthenticated, upload.single('file'), new ProductController_1.ProductConstroller().create);
router.get('/products', new ProductController_1.ProductConstroller().findAll);
router.get('/products/categories', IsAuthenticated_1.IsAuthenticated, new ProductController_1.ProductConstroller().findByCategories);
router.get('/products/category', IsAuthenticated_1.IsAuthenticated, new ProductController_1.ProductConstroller().findByCategory);
