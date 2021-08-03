import express from 'express'
import dotenv from 'dotenv'
import connectDB from './configs/db_config.js'
 
dotenv.config()
connectDB();

const app = express()
app.use(express.json())

app.get('/', (_req, res) => {
  res.send('API is running....')
})

app.get('/books', (_req, res) => {
  res.send('API is running....')
})

app.post('/books', (_req, res) => {
  res.send('API is running....')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT} `)
})