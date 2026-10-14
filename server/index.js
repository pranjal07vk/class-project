import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express()

const PORT = 8765

dotenv.config()

mongoose.connect(process.env.dbURL).then(() => {
    console.log('Database connected successfully')
}).catch((err) => {
    console.log('Database connection failed')
})

app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`)
})