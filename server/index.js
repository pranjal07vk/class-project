import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from "../server/routes/user.routes.js"

const app = express()

const PORT = 8765

dotenv.config()

mongoose.connect(process.env.dbURL).then(() => {
    console.log('Database connected successfully')
}).catch((err) => {
    console.log('Database connection failed')
})

app.use(express.json())

app.use('/users' , userRoutes)

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})