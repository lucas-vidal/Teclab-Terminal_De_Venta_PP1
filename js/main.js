let codigo;
let codigo2;
let cantidad;
let total = 0;
let item = 0;

//  const API_URL = 'http://jsonplaceholder.typicode.com';
   const API_URL = 'http://localhost:3000';

function cargar(){
       let formData={
       "DNI": 88999000,
       "Nombre": "Gonzalo",
       "Apellido": "Vidal"
   }

   fetch("http://localhost:3000/costumers", {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData),
    mode: 'no-cors'
    })
    .then(res=>{
        console.log(res.json())
        return res.json()
        
    })
}










// const HTMLResponse = document.querySelector("#registro");

// fetch(API_URL + '/products',
// { method: 'GET',
//    mode: 'no-cors',
//    headers: {
//       'Content-Type': 'application/json',
//     }
// })
// .then((response) => response.body)
// .then((users) => {
//     const tpl = users.map((user) => '<li>' + user.Descripcion + '</li>');
//     HTMLResponse.innerHTML = '<ul>' + tpl + '</ul>';
//     });


// const xhr = new XMLHttpRequest();

// function onRequestHandeler(){
//     if (this.readyState == 4 && this.status == 200){
//         const data = JSON.parse(this.response);
   
//         const HTMLResponse = document.querySelector("#registro")

//         const tpl = data.map((user) => '<li>' + user.Descripcion + '</li>');
//         HTMLResponse.innerHTML = '<ul>' + tpl + '</ul>';
//     }
// }
// xhr.addEventListener("load", onRequestHandeler);
// xhr.open("GET", API_URL + '/products');
// xhr.send();








var descripcion = "Fideito Moñito";

var precio = 100;

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

document.getElementById('codigo').addEventListener("change","three")


if (codigo2 =! document.getElementById('codigo').value) {
    buscarProducto();
    
};





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

