import express from 'express'
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'



const app = express();
app.use(express.json())
app.use(morgan('dev'))

// Routes

app.use('/api/auth', authRoutes)

export default app;