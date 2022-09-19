


let codigo1 = parseInt(document.getElementById('codigo').value, 10);
let cantidad1 = parseInt(document.getElementById('cantidad').value, 10);

var item = 0;
var codigo;
var descripcion = "Fideito Moñito";
var cantidad;
var precio = 150;

function agregarItem(codigo, cantidad)
{

const app = document.querySelector("#registro");



item = item + 1;

var deshacer = '<button onclick="eliminarItem("#registro3")" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>';

   return app.insertAdjacentHTML("afterbegin", '<tr id="registro' + item + '"><td class="text-center">'+ item +'</td><td class="text-center">'+ codigo +'</td><td class="text-left">'+ descripcion +'</td><td class="text-center">'+ cantidad +'</td><td class="text-center">'+ precio +'</td><td class="text-center">' + deshacer + '</td></tr>');
  
};

function eliminarItem(id){
    

    const app = document.querySelector(id);

    app.isConnected;    // true
    app.remove();
    app.isConnected;    // false
};
