import express from 'express'
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'



const app = express();
app.use(morgan('dev'))

// Routes

app.use('/api/auth', authRoutes)
app.use(express.json())

export default app;