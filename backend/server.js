// packages
import express from 'express'
import env from 'dotenv'
import colors from 'colors'

// files
import productRoutes from './routes/productRoutes.js'
import connectDB from './config/db.js'

// methods
env.config()
connectDB()

// constants
const app = express()
const PORT = process.env.PORT || 5000

// routes
app.use('/api/products', productRoutes)

// port listener
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}...`.yellow
      .bold
  )
)
