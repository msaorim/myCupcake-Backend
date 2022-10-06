import { Request, Response } from "express";
import { LogginService } from "../services/LoginService";

class LoginController {
    async auth(req: Request, res: Response) {

        const { email, password } = req.body;

        const service = new LogginService();
        const obj = await service.auth({ email: email, password: password });

        return res.json(obj);
    }
}

export { LoginController };