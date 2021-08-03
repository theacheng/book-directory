import express from 'express'
import dotenv from 'dotenv'
import connectDB from './configs/db_config.js'
import bookRouter from './routes/book_routes.js'
 
dotenv.config()
connectDB();

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('API is running....')
})

app.use('/books', bookRouter)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} `)
})