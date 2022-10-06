import prismaClient from "../prisma";
import { hash } from 'bcryptjs';

interface UserRequest {
    name: string,
    email: string,
    password: string,
    //phone: string,
    //active: boolean,
    //userType: UserType
    //cpf: string,
    //addressId: string
}

class UserService {

    //===================================================================================
    async create({ name,
        email,
        password
        //phone,
        //active,
        //userType,
        //cpf,
        //addressId
    }: UserRequest) {

        // verifica email vazio
        if (!email) {
            throw new Error("Email incorreto");
        }

        //verifica email cadastrado
        const userAlreadyExists = await prismaClient.user.findFirst({
            where: {
                email: email
            }
        })
        if (userAlreadyExists) {
            throw new Error("Usuário já Cadastrado!")
        }

        // verifica se endereço é de outro usuário
        //const addressError = await prismaClient.user.findFirst({
        //    where: {
        //        addressId: addressId
        //    }
        //})
        //if (addressError) {
        //    throw new Error("Endereço de outro usuário!!!");
        //}

        const passHash = await hash(password, 8);


        //cadastra novo usuario
        try {
            const user = await prismaClient.user.create({
                data: {
                    name: name,
                    email: email,
                    password: passHash
                    //phone: phone,
                    //active: active,
                    //userType: userType,
                    //cpf: cpf,
                    //addressId: addressId
                },
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            })
            return user;
        } catch {
            throw new Error("Erro ao gravar o registro!!");
        }

    }

    //===================================================================================
    async detail(user_email: string) {

        const user = await prismaClient.user.findFirst({
            where: { email: user_email },
            select: {
                name: true,
                email: true
            }
        })
        return user
    }
}

export { UserService }