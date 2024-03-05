import { Prisma, PrismaClient } from '@prisma/client'
import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()
const app: Express = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('API IS WORKING')
})

app.get('/users', async (req: Request, res: Response) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.get('/users/:id', async (req: Request, res: Response) => {
  const { id } = req.params
  const user = await prisma.user.findUnique({
    where: {
      id: Number(id)
    }
  })
  res.json(user)
})

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})
