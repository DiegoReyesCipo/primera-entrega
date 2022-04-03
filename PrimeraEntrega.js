console.log('Primera Entrega Diego Reyes');
let productos = [
    {id: 1, titulo: 'Cebollita Soñador', precio: 10000, stock: 15, superficie: 200},
    {id: 2, titulo: 'Napolitano Ganador', precio: 12000, stock: 10, superficie: 250},
    {id: 3, titulo: 'Campeon Mexico 86', precio: 15000, stock: 10, superficie: 300},
]
let precio = 10000;
let interes = 1.3;
let precioFinanciado = 0;

const URL= 'https://criptoya.com/api/dolar'

const dropDown = document.getElementById('opcionTerreno')
const btn = document.getElementById('btn')
let valorImput
//guardar productos en local Storage

// llamar dato del select y traer precio
dropDown.onchange = (e) => {
    valorImput = e.target.value
    console.log(e.target.value)
}

 btn.onclick = (e)=> {
     const existe = productos.find(x => x.titulo === valorImput);
     existe ?  precio = existe.precio : console.log('NO hay Nada');
     document.getElementById("valorDeSelect").value = precio  
     Swal.fire(
  'El precio esta expresado en Dolares!',
  'USD '+ precio,
  'success'
  
    );
    
    }


localStorage.setItem( "Listaproductos", JSON.stringify(productos));
productos=JSON.parse(localStorage.getItem("Listaproductos"));
console.log(typeof(productos));


      //prueba aplicar after input para cuotas
      
function addElementToList (){
    const inputRef = document.getElementById('inputPago');
    const value = inputRef.value;
    
    if (value !== '1'&& value !== '6' && value !== '10'){
        Swal.fire (' Ingrese 1, 6 o 10')
      }
      else if (value == 1) {
               alert('Total a pagar por el lote'+ precio );//cambiar alert por DOM
               console.log(value);
      }
      else if (value == 6 || value == 10){
        precioFinanciado = precio * interes

      console.log( 'el precio finnciado es: $' +(  precioFinanciado));}//calcular cuotas
// falta calcular valor cuotas y mostrarlo en DOM



    }

    //peticion a la API Crypto ya para obtener valor dolar
    fetch (URL)
.then(respuesta => respuesta.json())
.then (datos => {
    
    console.log("Console log datos.blue", datos.blue);
    let totalBlue = datos.blue;

      // agregarNameAlDOM()// recien aca llamo la funcion para modificar DOM

});
//console.log(typeof(datos));
console.log("total", precio * datos.blue );
const fetchBlue = () => {
    fetch (URL)
    .then(res=> res.json())
    .then( datos => {
        let totalBlue = datos.blue;
        console.log('console log fetch.Blue', totalBlue );
    }) 
}
 


    
   
    

      
 

// let pago;


// function formaPago() {
//     do {
//         pago = prompt("desea pagar en 1,6 o 10 pagos");
//               if (pago !== '1'&& pago !== '6' && pago !== '10'){
//             alert(' ingrese 1, 6 o 10');
//         }
        
//     } while (pago !== '1'&& pago !=='6' && pago !=='10');
//     if (pago == 1) {
//         alert('Total a pagar por el lote '+ precio);  
//     }
//     else if (pago == 6 || pago == 10){
//         precioFinanciado = precio * interes
//         alert ('Total a pagar financiado $' + precioFinanciado)
//        // totalCuotas(precioFinanciado)
//        const valor = totalCuotas(precioFinanciado);
//        alert ('El valor de cada cuota es $' + valor)
//     }
// }
// // funcion flecha 
// const totalCuotas = precio => precio/pago

// formaPago()
// /*function totalCuotas(precio) {
//     const result = precio/pago
//     alert ('El valor de cada cuota es $' + result)
// }

// formaPago()*/ 
     
      
    




// // Se incorpora el objeto/array calles para cumplir con la consigna del desafio complementario 2
// var calles = [];
// var esSalir = false

// const agregarCalles = () => {

//     do {
//         let calle = prompt(`Ingrese el nombre de una calle, escriba salir para saltar este paso`).toLowerCase()
//         if(calle === 'salir'){
//             esSalir = true   
//                 } 

//         calles.push(calle)
//         if (calles.length ===3 ) {
//             for (const xx of calles) {
//                 console.log(`usted eligio la calle ${xx}`)
//             }
//             break
//         }
//     } while (!esSalir);
//     if (esSalir){

//         alert('Otros usuarios seleccionaran los nombres')        
//     } else {

//         alert('Los 3 nombres de calle que elejiste son: ' + calles)
//         alert ('Las opciones que hayan sido mas votadas seran las seleccionadas')
//         alert('probar git')
//     }
    
// }

// //console.log(calles)
// //no se porque no puedo acceder al primer elemento del array por medio del indice

// agregarCalles()
// //funciono haciendolo despues de la funcion
// console.log( calles [0] +' Participara en la eleccion de avenida principal')

