
const API = 'http://localhost:3000';



///////////////////////----PRODUCTOS----///////////////////////

//CARGA LISTADO DE PRODUCTOS
const cargarProductos = async () => {
    try {
        const respuesta = await fetch(API + '/products');
        const products = await respuesta.json();

        const HTMLResponse = document.querySelector("#productos")

        products[0].map((product) => HTMLResponse.insertAdjacentHTML("afterbegin",'<tr><td class="text-center">'+ product.code +'</td><td class="text-center">'+ product.brand +'</td><td class="text-left">'+ product.description + '</td><td class="text-center">'+ product.price + '</td><td class="text-center">'+ product.quentity +'</td><td class="text-center">'+ product.unit +'</td><td class="text-center"> <button onclick="modificarProducto(' + product.code + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><i class="pe-7s-settings btn-icon-wrapper"> </i></button> </td><td class="text-center"> <button onclick="eliminarProducto(' + product.code + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button> </td></tr>'));

    } catch (error) {
        console.log(error)
    }
}
cargarProductos();


//AGREGAR UN PRODUCTO
function agregarProducto(){
    var code = document.getElementById("code").value
    var brand = document.getElementById("brand").value
    var price = document.getElementById("price").value
    var quentity = document.getElementById("quentity").value
    var unit = document.getElementById("unit").value
    var description = document.getElementById("description").value
    const agregarProducto = async () => {
        try {
            const respuesta = await fetch(API + '/products/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(

                    {
                        "code": code,
                        "brand": brand,
                        "description": description,
                        "price": price,
                        "quentity": quentity,
                        "unit": unit
                        
                   }
                  )
                });

        } catch (error) {
            console.log(error)
        }
    }
    agregarProducto();
    location.reload();
}

//BOTON MODIFICAR EN LISTADO DE PRODUCTOS
function modificarProducto(code){
    const cargarUnProductoEnInputs = async () => {
        try {
            const respuesta = await fetch(API + '/products/' + code, {
                    method: 'GET',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors'
                });
            const products = await respuesta.json();
    
            document.getElementById("code").value = products[0].code
            document.getElementById("price").value = products[0].price
            document.getElementById("quentity").value = products[0].quentity
            document.getElementById("unit").value = products[0].unit
            document.getElementById("brand").value = products[0].brand
            document.getElementById("description").value = products[0].description

            document.getElementById("botonModificar").innerHTML = '<button onclick="actualizarProducto('+ code +')" class="btn btn-primary" style="width: 100%; font-size: 110%;">Modificar</button>';
            
        } catch (error) {
            console.log(error)
        }
    }
    cargarUnProductoEnInputs();
}


//ACTUALIZA DATOS DE PRODUCTOS
function actualizarProducto(code){
    var code = document.getElementById("code").value
    var brand = document.getElementById("brand").value
    var price = document.getElementById("price").value
    var quentity = document.getElementById("quentity").value
    var unit = document.getElementById("unit").value
    var description = document.getElementById("description").value
    var option = confirm("Desea modificar este producto?");
    if (option == true) {
    const actualizarProducto = async () => {
        try {
            const respuesta = await fetch(API + '/products/' + code, {
                    method: 'PUT',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors',
                    body: JSON.stringify(
                    {
                        "brand": brand,
                        "description": description,
                        "price": price,
                        "quentity": quentity,
                        "unit": unit
                   }
                  )
                });
        } catch (error) {
            console.log(error)
        }
    }
    actualizarProducto();
    location.reload();

}
}
//BOTON ELIMINAR EN LISTADO DE PRDUCTOS
function eliminarProducto(code){
    var option = confirm("Desea eliminar este producto?");
    if (option == true) {
            const eliminarProducto = async () => {
        try {
            const respuesta = await fetch(API + '/products/' + code, {
                    method: 'DELETE',
                    headers: {'Content-type': 'application/json'}
                })
        } catch (error) {
            console.log(error)
        }
        ;
}
eliminarProducto();
location.reload();
	} 

}




///////////////////////----CLIENTES----///////////////////////

//CARGA LISTADO DE CLIENTES
const cargarClientes = async () => {
    try {
        const respuesta = await fetch(API + '/customers');
        const customers = await respuesta.json();

        const HTMLResponse = document.querySelector("#clientes")
        customers[0].map((customer) => HTMLResponse.insertAdjacentHTML("afterbegin", '<tr><td class="text-center">'+ customer.dni +'</td><td class="text-center">'+ customer.name +'</td><td class="text-center">'+ customer.surname + '</td><td class="text-center"> <button onclick="modificarCliente(' + customer.dni + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><i class="pe-7s-settings btn-icon-wrapper"> </i></button> </td><td class="text-center"> <button onclick="eliminarCliente(' + customer.dni + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button> </td></tr>'));

    } catch (error) {
        console.log(error)
    }
}
cargarClientes();


//AGREGAR UN CLIENTES
function agregarCliente(){
    var dni = document.getElementById("dni").value
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    const agregarCliente = async () => {
        try {

            const respuesta = await fetch(API + '/customers/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(

                    {
                        "dni": dni,
                        "name": name,
                        "surname": surname
                   }
                  )
                });

        } catch (error) {
            console.log(error)
        }
    }
    agregarCliente();
    location.reload();


}

//BOTON MODIFICAR EN LISTADO DE CLIENTES
function modificarCliente(dni){
    const cargarUnClienteEnInputs = async () => {
        try {
            const respuesta = await fetch(API + '/customers/' + dni, {
                    method: 'GET',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors'
                });
            const customers = await respuesta.json();
    
            document.getElementById("dni").value = customers[0].dni
            document.getElementById("name").value = customers[0].name
            document.getElementById("surname").value = customers[0].surname

            document.getElementById("botonModificar").innerHTML = '<button onclick="actualizarCliente('+ dni +')" class="btn btn-primary" style="width: 100%; font-size: 110%;">Modificar</button>';
            
        } catch (error) {
            console.log(error)
        }
    }
    cargarUnClienteEnInputs();
}


//ACTUALIZA DATOS DE CLIENTES
function actualizarCliente(dni){
    var dni = document.getElementById("dni").value
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var option = confirm("Desea modificar este cliente?");
    if (option == true) {
    const actualizarCliente = async () => {
        try {
            const respuesta = await fetch(API + '/customers/' + dni, {
                    method: 'PUT',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors',
                    body: JSON.stringify(
                    {
                        "dni": dni,
                        "name": name,
                        "surname": surname
                   }
                  )
                });
        } catch (error) {
            console.log(error)
        }
    }
    actualizarCliente();
    location.reload();

}
}
//BOTON ELIMINAR EN LISTADO DE CLIENTES
function eliminarCliente(dni){
    var option = confirm("Desea eliminar este cliente?");
    if (option == true) {
            const eliminarCliente = async () => {
        try {
            const respuesta = await fetch(API + '/customers/' + dni, {
                    method: 'DELETE',
                    headers: {'Content-type': 'application/json'}
                })
        } catch (error) {
            console.log(error)
        }
        ;
}
eliminarCliente();
location.reload();
	} 

}





///////////////////////----PROVEEDORES----///////////////////////

//CARGA LISTADO DE PROVEEDORES
const cargarProveedores = async () => {
    try {
        const respuesta = await fetch(API + '/suppliers');
        const suppliers = await respuesta.json();

        const HTMLResponse = document.querySelector("#proveedores")
        suppliers[0].map((supplier) => HTMLResponse.insertAdjacentHTML("afterbegin", '<tr><td class="text-center">'+ supplier.supplier +'</td><td class="text-center">'+ supplier.address +'</td><td class="text-center">'+ supplier.city +'</td><td class="text-center">'+ supplier.phone + '</td><td class="text-center"> <button onclick="modificarProveedor(' + supplier.id + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><i class="pe-7s-settings btn-icon-wrapper"> </i></button> </td><td class="text-center"> <button onclick="eliminarProveedor(' + supplier.id + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button> </td></tr>'));

    } catch (error) {
        console.log(error)
    }
}
cargarProveedores();


//AGREGAR UN PROVEEDOR
function agregarProveedor(){
    var supplier = document.getElementById("supplier").value
    var address = document.getElementById("address").value
    var city = document.getElementById("city").value
    var phone = document.getElementById("phone").value
    const agregarProveedor = async () => {
        try {

            console.log("ante agregar")
            const respuesta = await fetch(API + '/suppliers/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(

                    {
                        "supplier": supplier,
                        "address": address,
                        "city": city,
                        "phone": phone
                   }
                  )
                });
        } catch (error) {
            console.log(error)
        }
    }
    agregarProveedor();
    location.reload();


}

//BOTON MODIFICAR EN LISTADO DE PROVEEDORES
function modificarProveedor(id){
    const cargarUnProveedorEnInputs = async () => {
        try {
            const respuesta = await fetch(API + '/suppliers/' + id, {
                    method: 'GET',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors'
                });
            const suppliers = await respuesta.json();
    
             const tpl = suppliers.map((supplier) => supplier.address);

            document.getElementById("supplier").value = suppliers[0].supplier
            document.getElementById("address").value = suppliers[0].address
            document.getElementById("city").value = suppliers[0].city
            document.getElementById("phone").value = suppliers[0].phone

            document.getElementById("botonModificar").innerHTML = '<button onclick="actualizarProveedor('+ id +')" class="btn btn-primary" style="width: 100%; font-size: 110%;">Modificar</button>';
            
        } catch (error) {
            console.log(error)
        }
    }
    cargarUnProveedorEnInputs();
}


//ACTUALIZA DATOS DE PROVEEDOR
function actualizarProveedor(id){
    var supplier = document.getElementById("supplier").value
    var address = document.getElementById("address").value
    var city = document.getElementById("city").value
    var phone = document.getElementById("phone").value
    var option = confirm("Desea modificar este proveedor?");
    if (option == true) {
    const actualizarProveedor = async () => {
        try {
            const respuesta = await fetch(API + '/suppliers/' + id, {
                    method: 'PUT',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors',
                    body: JSON.stringify(
                    {
                        "supplier": supplier,
                        "address": address,
                        "city": city,
                        "phone": phone
                   }
                  )
                });
                // document.getElementById("supplier").value = ""
                // document.getElementById("address").value = ""
                // document.getElementById("city").value = ""
                // document.getElementById("phone").value = ""

        } catch (error) {
            console.log(error)
        }
    }
    actualizarProveedor();
    location.reload();

}
}
//BOTON ELIMINAR EN LISTADO DE PROVEEDORES
function eliminarProveedor(id){
    var option = confirm("Desea eliminar este proveedor?");
    if (option == true) {
            const eliminarPorveedor = async () => {
        try {
            const respuesta = await fetch(API + '/suppliers/' + id, {
                    method: 'DELETE',
                    headers: {'Content-type': 'application/json'}
                })
        } catch (error) {
            console.log(error)
        }
        ;
}
eliminarPorveedor();
location.reload();
	} 

}

//BORRA EL CONTENIDO DE LOS INPUTS
function limpiarInputs(in1, in2, in3, in4, in5, in6, in7) {
    document.getElementById(in1).value = ""
    document.getElementById(in2).value = ""
    document.getElementById(in3).value = ""
    document.getElementById(in4).value = ""
    document.getElementById(in5).value = ""
    document.getElementById(in6).value = ""
    document.getElementById(in7).value = ""
    }


























var descripcion;

var precio;

function agregarItem(codigo, cantidad)
{
codigo = parseInt((document.getElementById('codigo')).value, 10);
cantidad = parseInt((document.getElementById('cantidad')).value, 10);

if (document.getElementById('codigo').value != "" && document.getElementById('cantidad') != "" ) {
    const app = document.querySelector("#registro");
    total = total + precio;
    item = item + 1;

    var deshacer = '<button onclick="eliminarItem(\'#registro' + item + '\')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>';
 
    app.insertAdjacentHTML("afterbegin", '<tr id="registro' + item + '"><td class="text-center">'+ item +'</td><td class="text-center">'+ codigo +'</td><td class="text-left">'+ descripcion +'</td><td class="text-center">'+ cantidad +'</td><td class="text-center">'+ precio +'</td><td class="text-center">' + deshacer + '</td></tr>');

    limpiarInput('codigo');
    limpiarInput('cantidad')

    document.getElementById("total").innerHTML = "$ " + total ;

} else {
    
    window.alert("Complete los campos.");
}

};

// document.getElementById('codigo').addEventListener("change","three")


// if (codigo2 =! document.getElementById('codigo').value) {
//     buscarProducto();
    
// };





function buscarProducto(){
    window.alert("Se ejecuto ok.");
    codigo2 = document.getElementById('codigo').value;
};


function limpiarInput(id){
    document.getElementById(id).value = "";

};

// function eliminarItem(id){
    
//     var app = document.querySelector(id);

//     app.isConnected;
//     app.remove();
//     app.isConnected;

//     total = total - precio;

//     document.getElementById("total").innerHTML = "$ " + total 
// }