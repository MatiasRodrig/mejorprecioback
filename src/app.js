import express from 'express'
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cookieParser());

// Routes

app.use('/api', authRoutes)

export default app;