import prismaClient from "../prisma"

interface AddressRequest {
    address: string,
    number: string,
    complement: string,
    district: string,
    city: string,
    estate: string,
    zip_code: string
}

class AddressService {

    // async create({ address,
    //     number,
    //     complement,
    //     district,
    //     city,
    //     estate,
    //     zip_code }: AddressRequest) {

    //     //cadastra novo endereco
    //     const newAddress = await prismaClient.address.create({
    //         data: {
    //             address: address,
    //             number: number,
    //             complement: complement,
    //             district: district,
    //             city: city,
    //             estate: estate,
    //             zip_code: zip_code
    //         },
    //         select: {
    //             address: true,
    //             number: true,
    //             district: true,
    //             city: true
    //         }
    //     })

    //     return newAddress;
    // }
}

export { AddressService }