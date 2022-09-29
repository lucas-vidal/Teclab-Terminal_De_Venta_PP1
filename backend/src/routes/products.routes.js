
import {Router} from 'express'

import { createNewProducts, getProducts, getProductByCode, deleteProductByCode, getTotalProducts, updateProductsByCode
<<<<<<< HEAD
        } from '../controllers/products.controller'
=======
        } from '../controllers/products.controller.js'
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea

const router = Router()
//Consulta productos
router.get('/products', getProducts)
//Consulta una linea de productos
router.get('/products/:code', getProductByCode)
//Contar total de productos
router.get('/products/count', getTotalProducts)
//Insertar un producto
router.post('/products', createNewProducts)
//Borrar productos
router.delete('/products/:code', deleteProductByCode)
//Actualizar productos
router.put('/products/:code', updateProductsByCode)


export default router