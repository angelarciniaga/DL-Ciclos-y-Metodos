let persona = prompt("Por vavor ingrese un numero del 1 al 6", "1");

if (persona == 1){
    let opcion = prompt("Elije un número del 1 al 100");
    if (opcion <= 100){
        for (let i = 0; i<= opcion; i++){
            console.log("Número "+ i);
        }
    }else {
        alert("No es un numero valido");
    }
} else if(persona == 2){
    let opcion = prompt("¿De qué color es el cabalo blanco de Napoleón?");
    while (opcion != "blanco")
        opcion = prompt("¿De qué color es el cabalo blanco de Napoleón?");
}else if (persona == 3){
    let mate = prompt("Nota de matematica");
    let fisica = prompt("Nota de Física");
    let ciencia = prompt("Nota de Ciencias");
    let promedio = (parseFloat(mate)+parseFloat(fisica)+parseFloat(ciencia))/3;
    alert("Su promedio es: " + parseInt(promedio));
}else if (persona == 4){
    let frutas = prompt("Escribe al menos 3 Frutas")
        if (frutas == manzana) {
            break;
        }
        console.log(frutas);
    }