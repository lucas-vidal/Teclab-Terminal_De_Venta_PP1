export default{
<<<<<<< HEAD
    getAllProducts : 'SELECT * FROM Stock',
    addNewProduct : 'INSERT INTO Stock (CodigoArticulo, Marca, Descripcion, Precio, Stock, Unidad) VALUES (@CodigoArticulo, @Marca, @Descripcion, @Precio, @Stock, @Unidad)',
    getProductByCode : 'SELECT * FROM Stock WHERE CodigoArticulo = @code',
    deleteProductByCode : 'DELETE FROM Stock WHERE CodigoArticulo = @code',
    getTotalProducts : 'SELECT COUNT (*) FROM Stock',
    updateProductsByCode : 'UPDATE Stock SET Marca = @Marca, Descripcion = @Descripcion, Precio = @Precio, Stock = @Stock, Unidad = @Unidad WHERE CodigoArticulo = @code'
=======
    //Productos
    getAllProducts : 'SELECT * FROM products',
    addNewProduct : 'INSERT INTO products (code, brand, description, price, quentity, unit) VALUES (@code, @brand, @description, @price, @quentity, @unit)',
    getProductByCode : 'SELECT * FROM products WHERE code = @code',
    deleteProductByCode : 'DELETE FROM products WHERE code = @code',
    getTotalProducts : 'SELECT COUNT (*) FROM products',
    updateProductsByCode : 'UPDATE products SET brand = @brand, description = @description, price = @price, quentity = @quentity, unit = @unit WHERE code = @code',

    //Clientes
    getAllCustomers : 'SELECT * FROM customers',
    addNewCustomer : 'INSERT INTO customers (dni, name, surname) VALUES (@dni, @name, @surname)',
    getCustomerByDni : 'SELECT * FROM customers WHERE dni = @dni',
    deleteCustomerByDni : 'DELETE FROM customers WHERE dni = @dni',
<<<<<<< HEAD
    updateCustomerByDni : 'UPDATE customers SET name = @name, surname = @surname WHERE dni = @dni',
=======
    updateCustomerByDni : 'UPDATE customers SET name = @name, surname = @surname WHERE dni = @dni'
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
>>>>>>> 24e25486f4a15eb16b255d16f06288d7aa49f518

    //Proveedores
    getAllSuppliers : 'SELECT * FROM suppliers',
    addNewSupplier : 'INSERT INTO suppliers (supplier, adress, city, phone) VALUES (@supplier, @adress, @city, @phone)',
    getSupplierById : 'SELECT * FROM suppliers WHERE id = @id',
    deleteSupplierById : 'DELETE FROM suppliers WHERE id = @id',
    updateSupplierById : 'UPDATE suppliers SET supplier = @supplier, adress = @address, city = @city, phone = @phone WHERE id = @id'
    
}