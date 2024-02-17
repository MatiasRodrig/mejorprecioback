import express from 'express'
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'
import productsRoutes from './routes/products.routes.js'
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';


const app = express();
app.use(morgan('dev'))
app.use(bodyParser.json());
app.use(cookieParser());




// Pages routes

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/api', authRoutes)

app.use('/api', productsRoutes)


export default app;