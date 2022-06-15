import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type createNewUserProp = {
    email?:string,
    password?:string
}

export const User = {
    findOne:async (email:string) => {
        return await prisma.users.findFirst({where:{
            email
        }});
    },

    create:async (data:createNewUserProp) => {
        return await prisma.users.create({data})
    },

    findOneUser:async (email:string,password:string) => {
        return await prisma.users.findMany({where:{email, password}})
    },

    findAll:async () => {
        return await prisma.users.findMany({
            select: {
                email: true,
                name: true,
              }
        });
    }
};