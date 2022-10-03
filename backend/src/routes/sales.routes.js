
import {Router} from 'express'
import { insertAProductToSale, getSales, getProductsByIdSaleOfTheSale , getProductByCodeOfTheSale, deleteProductByCodeOfTheSale, countTotalItemsOfTheSale, updateProductsByCode
        } from '../controllers/sales.controller.js'

const router = Router()
//Consulta ventas
router.get('/sales', getSales)
//Consulta una venta por ID
router.get('/sales/:id_sale', getProductsByIdSaleOfTheSale)
//Consulta una venta por ID
router.get('/sales/:id_sale/:code', getProductByCodeOfTheSale)
//Contar total de productos
router.get('/sales/count/:id_sale', countTotalItemsOfTheSale)
//Insertar un producto a la venta
router.post('/sales', insertAProductToSale)
//Borrar productos
router.delete('/sales/:id_sale/:code', deleteProductByCodeOfTheSale)
//Actualizar productos
router.put('/sales/:id_sale/:code', updateProductsByCode)

export default router