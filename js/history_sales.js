

const API = 'http://localhost:3000';

// //CARGA LISTADO DE VENTAS
// const cargarVentas = async () => {
//     try {
//         const respuesta = await fetch(API + '/id_sales');
//         const sales = await respuesta.json();
//         var customer
//         var items
//         var total

//         const HTMLResponse = document.querySelector("#historial_venta")

//         sales[0].map((sale) => HTMLResponse.insertAdjacentHTML(
//             "afterbegin",'<tr><td class="text-center">'
//             + sale.id_sale +'</td><td class="text-center">'
//             + sale.data_time +'</td><td class="text-left">'
//             + customer + '</td><td class="text-center">'
//             + items + '</td><td class="text-center">'
//             + total +'</td><td class="text-center"> <button onclick="verDetalle(' 
//             + sale.id_sale + ')" class="mr-2 btn-icon btn-icon-only btn btn-primary">Ver más</button></td><td class="text-center"> <button onclick="eliminarVenta('
//              + sale.id_sale + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button></td></tr>'));

        
//     } catch (error) {
//         console.log(error)
//     }
// }

//CARGA LISTADO DE PRODUCTOS EN LA VENTA
function cargarVentas(){
    const cargarVentas = async () => {
        try {
    
            const respuesta = await fetch(API + '/id_sales/');
            const ventas = await respuesta.json();
    
    
            const HTMLResponse = document.querySelector("#historial_venta")
    
            ventas.map((venta) => cargarVentas1(venta))
    
            function cargarVentas1(venta){
    
                // var id_sale = venta.id_sale
                // var data_time = venta.data_time
                var dni_customer = venta.dni_customer
                console.log("dni "+ dni_customer)
                const cargarVentas2 = async () => {
                    const respuesta2 = await fetch(API + '/customers/' + dni_customer);
                    const customer = await respuesta2.json();
    
                    var name = customer[0].name
                    var surname = customer[0].surname
    console.log('lala' +name + surname)

                // sales[0].map((sale) => HTMLResponse.insertAdjacentHTML(
                //     "afterbegin",'<tr><td class="text-center">'
                //     + sale.id_sale +'</td><td class="text-center">'
                //     + sale.data_time +'</td><td class="text-left">'
                //     + name + ' ' + surname + '</td><td class="text-center">'
                //     + items + '</td><td class="text-center">'
                //     + total +'</td><td class="text-center"> <button onclick="verDetalle(' 
                //     + sale.id_sale + ')" class="mr-2 btn-icon btn-icon-only btn btn-primary">Ver más</button></td><td class="text-center"> <button onclick="eliminarVenta('
                //     + sale.id_sale + ')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button></td></tr>'));

                }
                cargarVentas2()
            }
           
        } catch (error) {
            console.log(error)
        }
    }
    cargarVentas()
    }





    //ELIMINAR VENTA Y SUS PRODUCTOS
function elimianarVenta(){

    var id_sale
    const idActual = async () => {
        try {
            const respuesta = await fetch(API + '/id_sales/id');
            const id = await respuesta.json();
            const ids = []

            for (const [key, value] of Object.entries(id[0][0])) {
                ids.push(`${key}`, value);
            }

            id_sale = ids[1]



            var option = confirm("Desea eliminar este producto?");
            if (option == true) {
                const eliminarProductosDeVenta = async () => {
                try {
                    console.log(id_sale)
                    const respuesta = await fetch(API + '/sales/' + id_sale, {
                            method: 'DELETE',
                            headers: {'Content-type': 'application/json'}
                        })
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
                    } catch (error) {
                    console.log(error)
                    };
                }
                eliminarProductosDeVenta();
            } 
        } catch (error) {
            console.log(error)
            };
    
}
idActual();  
 location.reload();
}