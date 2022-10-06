import prismaClient from "../prisma";
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

interface AuthRequest {
    email: string,
    password: string
};


class LogginService {

    async auth({ email, password }: AuthRequest) {

        // verificar email cadastrado ------------

        const user = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (!user) {
            throw new Error("Erro em Email/Senha!!!");
        }

        // verificar se a senha está correta -----
        const passMatch = await compare(password, user.password);
        if (!passMatch) {
            throw new Error("Erro em Email/Senha!!!");
        }

        // gerar token JWT e devolver dados
        const token = sign(
            {
                name: user.name,
                email: user.email
            },
            process.env.JWT_SECRET, (
            {
                subject: email,
                expiresIn: "30d"
            }
        )
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            token: token
        };
    }
}

export { LogginService };