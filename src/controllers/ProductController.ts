import { Request, Response } from "express";
import { ProductService } from "../services/ProductService";

class ProductConstroller {

    async create(req: Request, res: Response) {
        const {
            name,
            price,
            description,
            category_id } = req.body;

        const serv = new ProductService();

        if (!req.file) {
            throw new Error("Erro no arquivo de imagem!!!");
        } else {
            const { filename: banner } = req.file;
            const obj = await serv.create({
                name,
                price,
                description,
                banner,
                category_id
            });

            return res.json(obj);
        }

    }

    async findAll(req: Request, res: Response) {
        const serv = new ProductService();
        const list = await serv.findAll();
        return res.json(list);
    }

    async findByCategory(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const serv = new ProductService();
        const obj = await serv.findByCategory({ category_id });

        return res.json(obj);
    }

    async findByCategories(req: Request, res: Response) {
        const serv = new ProductService();
        const obj = await serv.findByCategories();

        return res.json(obj);
    }
}

export { ProductConstroller }