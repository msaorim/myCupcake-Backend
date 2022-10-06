import prismaClient from "../prisma"

interface CategoryRequest {
    name: string
}

class CategoryService {
    async create({ name }: CategoryRequest) {


        if (name === "") {
            throw new Error("Nome não pode ser vazio!!!")
        }

        //verifica categoria cadastrada
        const categoryAlreadyExists = await prismaClient.category.findFirst({
            where: {
                name: name
            }
        })
        if (categoryAlreadyExists) {
            throw new Error("Categoria já Cadastrada!")
        }

        const category = await prismaClient.category.create({
            data: {
                name: name
            }, select: {
                id: true,
                name: true
            }
        })
        return category;
    }

    async findAll() {
        const lista = await prismaClient.category.findMany({
            select: {
                id: true,
                name: true
            }
        });
        return lista;
    }
}

export { CategoryService }