import { NextFunction, Request, Response } from "express";
import { verify } from 'jsonwebtoken';

interface Payload {
    sub: string;
}

export function IsAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    // verifica a existencia do token
    if (!authToken) {
        return res.status(401).end();
    }

    // trata informação do token
    const [, token] = authToken.split(" ");

    // verifica autenticidade do token
    try {
        const { sub } = verify(
            token,
            process.env.JWT_SECRET
        ) as Payload;

        req.user_email = sub;
        return next();
    } catch (e) {
        return res.status(401).end();
    }
}