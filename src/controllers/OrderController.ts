import { Request, Response } from "express";
import { OrderService } from "../services/OrderService";

class OrderController {

    async create(req: Request, res: Response) {

        const { userid } = req.body;

        const serv = new OrderService();
        const obj = await serv.create({ userid });

        return res.json(obj);
    }

    async cancel(req: Request, res: Response) {

        const id = req.query.id as string;

        const serv = new OrderService();
        const obj = await serv.cancel({ id });

        return res.json(obj);
    }
}

export { OrderController }