let codigo;
let codigo2;
let cantidad;
let total = 0;
let item = 0;

<<<<<<< HEAD
//  const API_URL = 'http://jsonplaceholder.typicode.com';
<<<<<<< HEAD
//   const API_URL = 'http://localhost:3000';
=======
   const API_URL = 'http://localhost:3000';
=======
   const API_URL1 = 'http://jsonplaceholder.typicode.com';
    const API_URL2 = 'http://localhost:3000/customers';
>>>>>>> e451447dab932c27c4872b1ea18c96b823faf5af

 const test = async () => {
    try {
        const respuesta = await fetch(API_URL2);
        console.log(respuesta);
        
        // const products = await respuesta.json();
        const products = JSON.parse(this.respuesta);

        const HTMLResponse = document.querySelector("#registro")
        const tpl = products.map((product) => '<li>' + product.code + '</li>' );

    //    HTMLResponse.insertAdjacentHTML("afterbegin", '<ul>' + tpl + '</ul>');
         HTMLResponse.innerHTML = '<ul>' + tpl + '</ul>';


    } catch (error) {
        console.log(error)
    }
}

test();


function cargarProductos(){

    const app = document.querySelector("#registro");

    var delete1 = '<button onclick="eliminarItem(\'#registro' + product.code + '\')" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>';
    var modify = '<button onclick="modificarItem(\'#registro' + product.code + '\')" class="mr-2 btn-icon btn-icon-only btn btn-outline-primary"><i class="pe-7s-settings btn-icon-wrapper"> </i></button>';
   
    app.insertAdjacentHTML("afterbegin", '<tr><td class="text-center">'+ product.code +'</td><td class="text-center">'+ product.brand +'</td><td class="text-left">'+ product.description + '</td><td class="text-center">'+ product.price + '</td><td class="text-center">'+ product.quentity +'</td><td class="text-center">'+ product.unit +'</td><td class="text-center">' + modify + '</td><td class="text-center">' + delete1 + '</td></tr>');


};


>>>>>>> d21f8273c2205695484788bc42561078f3fabfea


// const HTMLResponse = document.querySelector("#registro");
// const ul = document.createElement('ul')

// fetch(API_URL + '/products', {
//     method: 'GET',
//     headers: new Headers({ 'Content-type': 'application/json'}),
//     mode: 'no-cors'
// })
// .then((response) => response.json())
// .then((products) => {
//     products.forEach((product) => {
//     let elem = document.createElement('li');
//     elem.appendChild(
//         document.createTextNode(product.code)
//                 );
//             ul.appendChild(elem);
//         });
//     HTMLResponse.appendChild(ul);
// });

 

// const xhr = new XMLHttpRequest();

// function onRequestHandeler(){
//     if (this.readyState == 4 && this.status == 200){
//         console.log("hecho")
//         const data = JSON.parse(this.response);
   
//         const HTMLResponse = document.querySelector("#registro")

//         const tpl = data.map((user) => '<li>' + user.name + '</li>');
//         HTMLResponse.innerHTML = '<ul>' + tpl + '</ul>';
//     }
// }
// xhr.addEventListener("load", onRequestHandeler);
// xhr.open("GET", API_URL + '/customers');
// xhr.send();








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

function eliminarItem(id){
    
    var app = document.querySelector(id);

    app.isConnected;
    app.remove();
    app.isConnected;

    total = total - precio;

    document.getElementById("total").innerHTML = "$ " + total ;
};

