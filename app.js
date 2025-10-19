// let entrada = parseInt(prompt("Ingrese numero de tabla a multiplicar:"))

// if (!isNaN (entrada)) {
//      for (let i = 1; i <=10; i++) {
//         let resultado = entrada *i;
//     if (resultado % 2 === 0) {
//            console.log(`${entrada} x ${i} = ${resultado}`);
 
//     }else { 
// console.log("por favor ingrese un valor valido");
    
//  } 
//  }

// }

    let bandera = 0
    while (true) {
    let entrada = prompt("Ingrese el valor")
    if(entrada == "a"){
        bandera = sumar (bandera, parseInt(entrada))

    }else if (entrada == "b")
             bandera = restar (bandera, parseInt(entrada))


    break;
    console.log(bandera)
    }

function sumar (anterior, nuevo){
    return anterior += nuevo;

    function resta ( anterior, nuevo){
        return anterior -= nuevo
    }

}