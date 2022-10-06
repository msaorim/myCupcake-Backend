import { Router, Request, Response } from 'express';
import multer from 'multer';
// import { AddressController } from './controllers/AddressController';
import { CategoryController } from './controllers/CategoryController';
import { LoginController } from './controllers/LoginController';
import { ProductConstroller } from './controllers/ProductController';
import { UserController } from './controllers/UserController';

import { IsAuthenticated } from './middlewares/IsAuthenticated';

import uploadConfig from './config/multer';
// import { OrderController } from './controllers/OrderController';

const router = Router();
const upload = multer(uploadConfig.upload('./images'));

// Rotas User -----------
router.post('/user', new UserController().create);
router.get('/detail', IsAuthenticated, new UserController().detail);

// Rotas Address---------
// router.post('/address', new AddressController().create);

// Rotas Login ----------
router.post('/login', new LoginController().auth);

// Rotas Category -------
router.post('/category', IsAuthenticated, new CategoryController().create);
router.get('/categories', IsAuthenticated, new CategoryController().findAll);

// Rotas Product --------
router.post('/product', IsAuthenticated, upload.single('file'), new ProductConstroller().create);
router.get('/products', new ProductConstroller().findAll);
router.get('/products/categories', IsAuthenticated, new ProductConstroller().findByCategories);
router.get('/products/category', IsAuthenticated, new ProductConstroller().findByCategory);

// Rotas Order ----------
//router.post('/order', IsAuthenticated, new OrderController().create);
//router.delete('/order/cancel', IsAuthenticated, new OrderController().cancel);

export { router }
