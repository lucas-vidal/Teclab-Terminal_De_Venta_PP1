import express from 'express'
<<<<<<< HEAD
<<<<<<< HEAD
import config from './config';
import productsRoutes from './routes/products.routes'
=======
=======
import cors from 'cors'
>>>>>>> e451447dab932c27c4872b1ea18c96b823faf5af
import config from './config.js';
import productsRoutes from './routes/products.routes.js';
import customersRoutes from './routes/customers.routes.js';
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea

const app = express()

app.use(cors())
//settings
app.set('port', config.port)
//middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

<<<<<<< HEAD
app.use(productsRoutes)
=======
app.use(productsRoutes);
app.use(customersRoutes);
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea

export default app