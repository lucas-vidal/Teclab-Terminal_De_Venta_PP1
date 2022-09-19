
let cd = document.getElementById('codigo').value;

let codigo1 = parseInt(document.getElementById('codigo').value, 10);
let cantidad1 = parseInt(document.getElementById('cantidad').value, 10);

function agregarItem(codigo, cantidad)
{

const app = document.querySelector("#registro");

var item = 10;
var codigo;
var descripcion = "Fideito Moñito";
var cantidad;
var precio = 150;
var deshacer = '<button onclick="eliminaritem()" id="delete'+ item +'" class="mr-2 btn-icon btn-icon-only btn btn-outline-danger"><i class="pe-7s-trash btn-icon-wrapper"> </i></button>';

app.insertAdjacentHTML("afterbegin", '<tr><td class="text-center">'+ item +'</td><td class="text-center">'+ codigo +'</td><td class="text-left">'+ descripcion +'</td><td class="text-center">'+ cantidad +'</td><td class="text-center">'+ precio +'</td><td class="text-center">' + deshacer + '</td></tr>');

};