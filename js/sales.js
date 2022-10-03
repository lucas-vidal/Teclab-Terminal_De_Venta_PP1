
const API = 'http://localhost:3000';

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

///////////////////////----VENTAS----///////////////////////


//DETECTAR EL PRODUCTO POR EL CODIGO E INGRESARLO EN LOS INPUTS
const code = document.querySelector('#code')
code.addEventListener("change", () => {
    detectarProducto();
})

function detectarProducto(){
var code = document.getElementById("code").value
document.getElementById("quantity").value = ""
document.getElementById("price").value = ""
document.getElementById("unit").value = ""
document.getElementById("brand").value = ""
document.getElementById("description").value = ""

const cargarUnProductoEnInputs = async () => {
    try {
        const respuesta = await fetch(API + '/products/' + code, {
                method: 'GET',
                headers: new Headers({ 'Content-type': 'application/json'}),
                mode: 'cors'
            });
        const products = await respuesta.json();

        document.getElementById("quantity").value = 1
        document.getElementById("price").value = products[0].price
        document.getElementById("unit").value = products[0].unit
        document.getElementById("brand").value = products[0].brand
        document.getElementById("description").value = products[0].description

    } catch (error) {
        console.log(error)
    }
}
cargarUnProductoEnInputs();
}


//MULTIPLICA LA CANTIDAD POR EL PRECIO Y MUESTRA EN INPUT
const quantity = document.querySelector('#quantity')
quantity.addEventListener("change", () => {
    sumarPrecioEnProducto();
})

function sumarPrecioEnProducto(){
    var price
    var code = document.getElementById("code").value
    const consultarPrecioProducto = async () => {
        try {
            const respuesta = await fetch(API + '/products/' + code, {
                    method: 'GET',
                    headers: new Headers({ 'Content-type': 'application/json'}),
                    mode: 'cors'
                });
            const products = await respuesta.json();
    
            price = products[0].price
            var quantity = parseInt(document.getElementById("quantity").value, 10);
            var total = price * quantity
            document.getElementById("price").value = total

        } catch (error) {
            console.log(error)
        }
    }

    consultarPrecioProducto();
}


//AGREGAR UN PRODUCTO A LA VENTA
function agregarProductoVenta(){
    var code = document.getElementById("code").value
    var price = document.getElementById("price").value
    var quantity = document.getElementById("quantity").value

    const agregarProductoVenta = async () => {
        try {
            const respuesta = await fetch(API + '/sales/', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(

                    {
                        "code": code,
                        "price": price,
                        "quantity": quantity,
                   }
                  )
                });

        } catch (error) {
            console.log(error)
        }
    }
    agregarProductoVenta();
    location.reload();
}

//CARGA LISTADO DE PRODUCTOS EN LA VENTA
function cargarProductos(id_sale){
const cargarProductos = async () => {
    try {

        const respuesta1 = await fetch(API + '/sales/' + id_sale);
        const products = await respuesta1.json();


        const HTMLResponse = document.querySelector("#venta")

        products.map((product) => cargarProductos1(product))

        function cargarProductos1(product){

            var code = product.code
            var quantity = product.quantity
            var price = product.price

            const cargarProducto2 = async () => {
                const respuesta2 = await fetch(API + '/products/' + code);
                const product = await respuesta2.json();

                var brand = product[0].brand
                var description = product[0].description
                var unit = product[0].unit

            HTMLResponse.insertAdjacentHTML("afterbegin",
                '<tr><td class="text-center">'
                + code +'</td><td class="text-center">'
                + brand +'</td><td class="text-left">'
                + description + '</td><td class="text-center">'
                + quantity + '</td><td class="text-center">'
                + price +'</td><td class="text-center">'
                + unit +'</td><td class="text-center"> <button onclick="eliminarProducto('
                + code + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button> </td></tr>');
            }
            cargarProducto2()
        }
       
    } catch (error) {
        console.log(error)
    }
}
cargarProductos()
}

//BOTON ELIMINAR EN LISTADO DE PRDUCTOS
function eliminarProducto(code){
    var option = confirm("Desea eliminar este producto?");
    if (option == true) {
            const eliminarProducto = async () => {
        try {
            const respuesta = await fetch(API + '/sales/2/' + code, {
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

//BOTON CANCELAR VENTA
function cancelarVenta(id_sale){
    var option = confirm("Desea eliminar este producto?");
    if (option == true) {
        const eliminarProductosDeVenta = async () => {
        try {
            const respuesta = await fetch(API + '/sales/' + id_sale, {
                    method: 'DELETE',
                    headers: {'Content-type': 'application/json'}
                })
            } catch (error) {
            console.log(error)
            };
        }
        const eliminarVenta = async () => {
            try {
                const respuesta = await fetch(API + '/id_sales/' + id_sale, {
                        method: 'DELETE',
                        headers: {'Content-type': 'application/json'}
                    })
                } catch (error) {
                console.log(error)
                };
            }

eliminarVenta();
eliminarProductosDeVenta();
location.reload();
	} 

}


//TOTAL DE LOS ITEMS
function sumarProductos(id_sale){
    var total = 0
    const cargarProductos = async () => {
        try {
    
            const respuesta1 = await fetch(API + '/sales/' + id_sale);
            const products = await respuesta1.json();
    
    
            const HTMLResponse = document.querySelector("#venta")
    
            products.map((product) => cargarProductos1(product))
    
            function cargarProductos1(product){
                var price = product.price
                total = total + price;
                document.getElementById("total").innerHTML = "$ " + total + ",00";
            }
           
        } catch (error) {
            console.log(error)
        }
    }
    cargarProductos()
    
    }


    function cargarClientesEnInput(){

        const cargarClientes = async () => {
            try {
                const respuesta = await fetch(API + '/customers');
                const customers = await respuesta.json();

                const HTMLResponse = document.querySelector("#customer")
                customers[0].map((customer) => HTMLResponse.insertAdjacentHTML("afterbegin", '<option>' + customer.dni + ' - ' + customer.surname + ' ' + customer.name + '</option>'));

            } catch (error) {
                console.log(error)
            }
        }
        cargarClientes()
    }