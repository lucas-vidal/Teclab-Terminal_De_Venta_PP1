export default{
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
    updateCustomerByDni : 'UPDATE customers SET name = @name, surname = @surname WHERE dni = @dni',

    //Proveedores
    getAllSuppliers : 'SELECT * FROM suppliers',
    addNewSupplier : 'INSERT INTO suppliers (supplier, adress, city, phone) VALUES (@supplier, @adress, @city, @phone)',
    getSupplierById : 'SELECT * FROM suppliers WHERE id = @id',
    deleteSupplierById : 'DELETE FROM suppliers WHERE id = @id',
    updateSupplierById : 'UPDATE suppliers SET supplier = @supplier, adress = @address, city = @city, phone = @phone WHERE id = @id'
    
}