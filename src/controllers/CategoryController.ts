import { Request, Response } from "express";
import { CategoryService } from "../services/CategoryService";

class CategoryController {

    async create(req: Request, res: Response) {
        const { name } = req.body;
        const service = new CategoryService();
        const obj = await service.create({ name });
        return res.json(obj);
    }

    async findAll(req: Request, res: Response) {
        const serv = new CategoryService();
        const lista = await serv.findAll();
        return res.json(lista);
    }
}
export { CategoryController }