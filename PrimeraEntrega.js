console.log('Primera Entrega Diego Reyes');

const precio = 10000;
let interes = 1.4;
let precioFinanciado = 0;
let pago;


function formaPago() {
    do {
        pago = prompt("desea pagar en 1,6 o 10 pagos");
              if (pago !== '1'&& pago !== '6' && pago !== '10'){
            alert(' ingrese 1, 6 o 10');
        }
        
    } while (pago !== '1'&& pago !=='6' && pago !=='10');
    if (pago == 1) {
        alert('Total a pagar por el lote '+ precio);  
    }
    else if (pago == 6 || pago == 10){
        precioFinanciado = precio * interes
        alert ('Total a pagar financiado $' + precioFinanciado)
       // totalCuotas(precioFinanciado)
       const valor = totalCuotas(precioFinanciado);
       alert ('El valor de cada cuota es $' + valor)
    }
}
// funcion flecha 
const totalCuotas = precio => precio/pago

formaPago()
/*function totalCuotas(precio) {
    const result = precio/pago
    alert ('El valor de cada cuota es $' + result)
}

formaPago()*/ 
     
      
    




// Se incorpora el objeto/array calles para cumplir con la consigna del desafio complementario 2
var calles = [];
var esSalir = false

const agregarCalles = () => {

    do {
        let calle = prompt(`Ingrese el nombre de una calle, escriba salir para saltar este paso`).toLowerCase()
        if(calle === 'salir'){
            esSalir = true   
                } 

        calles.push(calle)
        if (calles.length ===3 ) {
            for (const xx of calles) {
                console.log(`usted eligio la calle ${xx}`)
            }
            break
        }
    } while (!esSalir);
    if (esSalir){

        alert('Otros usuarios seleccionaran los nombres')        
    } else {

        alert('Los 3 nombres de calle que elejiste son: ' + calles)
        alert ('Las opciones que hayan sido mas votadas seran las seleccionadas')
        alert('probar git')
    }
    
}

//console.log(calles)
//no se porque no puedo acceder al primer elemento del array por medio del indice

agregarCalles()
//funciono haciendolo despues de la funcion
console.log( calles [0] +' Participara en la eleccion de avenida principal')

