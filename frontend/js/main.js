

let codigo;
let codigo2;
let cantidad;
let total = 0;
let item = 0;

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

