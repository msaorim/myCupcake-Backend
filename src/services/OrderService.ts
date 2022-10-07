import prismaClient from "../prisma";
//import { StatusType } from "@prisma/client";

interface OrderCreateRequest {
    userid: string
}

interface OrderCancelRequest {
    id: string
}

class OrderService {

    // async create({ userid }: OrderCreateRequest) {

    //     const newOrder = await prismaClient.order.create({
    //         data: {
    //             userId: userid,
    //         }, select: {
    //             id: true,
    //             userId: true
    //         }
    //     })
    //     return newOrder;
    //     //return { module: "Order", sub: "create", running: true, userid: userid }
    // }

    // async cancel({ id }: OrderCancelRequest) {

    //     // procura pedido
    //     const order = await prismaClient.order.findFirst({
    //         where: {
    //             id: id
    //         }
    //     })

    //     if (!order) {
    //         throw new Error("Pedido não encontrado!!!");
    //     } else {
    //         await prismaClient.order.delete({
    //             where: {
    //                 id: id
    //             }
    //         });
    //         return { module: "Order", sub: "cancel", running: true, OrderId: id, Cancel: true }
    //     }

    // }
}

export { OrderService }