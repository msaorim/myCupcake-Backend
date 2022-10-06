import prismaClient from "../prisma";

interface ProductRequest {
    name: string,
    price: string,
    description: string,
    banner: string,
    category_id: string
}

interface ProductByCategoryRequest {
    category_id: string
}

class ProductService {

    async create({
        name,
        price,
        description,
        banner,
        category_id }: ProductRequest) {
        const prod = await prismaClient.product.create({
            data: {
                name: name,
                price: price,
                description: description,
                banner: banner,
                category_id: category_id
            }, select: {
                name: true,
                price: true
            }
        })
        return prod;
    }

    async findAll() {
        const list = await prismaClient.product.findMany({
            select: {
                id: true,
                name: true,
                price: true
            }
        });
        return list;
    }

    async findByCategory({ category_id }: ProductByCategoryRequest) {

        const lista = await prismaClient.product.findMany(
            {
                where: {
                    category_id: category_id
                }, select: {
                    name: true,
                    price: true
                }
            }
        )

        return lista;
    }

    async findByCategories() {
        return {
            module: "product",
            sub: "find by categories",
            running: true
        }
    }
}

export { ProductService };