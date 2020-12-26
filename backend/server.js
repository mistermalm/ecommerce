// packages
import express from 'express'
import env from 'dotenv'
import colors from 'colors'

// files
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// methods
env.config()
connectDB()

// constants
const app = express()
const PORT = process.env.PORT || 5000

// body parser
app.use(express.json())

// routes
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

// middleware error handlers
app.use(notFound)
app.use(errorHandler)

// port listener
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  )
)
