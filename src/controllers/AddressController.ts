import { Request, Response } from "express";
import { AddressService } from "../services/AddressService";

class AddressController {
    // o controller pega os dados e passa para o serviço executar alguma operação
    async create(req: Request, res: Response) {

        const { address,
            number,
            complement,
            district,
            city,
            estate,
            zip_code } = req.body;

        const service = new AddressService();
        const obj = await service.create({
            address,
            number,
            complement,
            district,
            city,
            estate,
            zip_code
        });
        return res.json(obj);
    }

}

export { AddressController };