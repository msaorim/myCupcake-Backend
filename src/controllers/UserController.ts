import { Request, Response } from "express";
import { UserService } from "../services/UserService";

class UserController {

    //===================================================================================
    async create(req: Request, res: Response) {

        const { name,
            email,
            password
            //phone,
            //active,
            //userType,
            //cpf,
            //addressId
        } = req.body;

        const service = new UserService();
        const obj = await service.create({
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
    }

    //===================================================================================
    async detail(req: Request, res: Response) {
        const user_email = req.user_email;
        const service = new UserService();
        const obj = await service.detail(user_email);
        return res.json(obj);
    }
}

export { UserController }