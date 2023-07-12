import { PrismaClient } from "@prisma/client";
import fastify from "fastify";
import { z } from 'zod';

const app = fastify();

const prisma = new PrismaClient();

app.get('/protocols', async () => {
    const users = await prisma.protocol.findMany()

    return { users }
})

app.post('/protocols', async (request, reply) => {
    const createProtocolSchema = z.object({
        tipoReq: z.string(),
    })

    const { tipoReq } = createProtocolSchema.parse(request.body);

    await prisma.protocol.create({
        data: {
            tipoReq,
        }
    })

    return reply.status(201).send();
})

app.listen({
    host: '0.0.0.0',
    port: process.env.PORT ? Number(process.env.PORT) : 3333,
}).then(() => {
    console.log("HTTP server running")
})