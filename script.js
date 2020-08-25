
let persona = prompt("Por vavor ingrese un numero del 1 al 6", "1");

switch (persona){
    case '1':
        let opcion = prompt("Elije un número del 1 al 100");
        if (opcion <= 100){
            for (let i = 0; i<= opcion; i++){
                console.log("Número "+ i);
            }
        }else {
            alert("No es un numero valido");
        }
        break;

    case '2':
        let caballo = prompt("¿De qué color es el cabalo blanco de Napoleón?");
        while (caballo != "blanco")
            caballo = prompt("¿De qué color es el cabalo blanco de Napoleón?");
            console.log(caballo);
        break;

    case '3':
        let mate = prompt("Nota de matematica");
        let fisica = prompt("Nota de Física");
        let ciencia = prompt("Nota de Ciencias");
        let promedio = (parseFloat(mate)+parseFloat(fisica)+parseFloat(ciencia))/3;
        alert("Su promedio es: " + Math.round(promedio));
        break;

    case '4':
        let frutas = prompt('Escribe el nombre de 3 Frutas', "pera, manzana, banana");
        let arrayFrutas = frutas.split(', ');
        /* console.log(arrayFrutas); */
        for (const interator of arrayFrutas) {
            if (interator == "manzana") {
                continue
            }
            console.log(interator);
        }
        break;

    case '5':
        let nombre = prompt('Escribe tu nomnre', 'Angel');
        let vocales = nombre.match(/[aeiou]/gi).length;
        let consonantes = nombre.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
        console.log(nombre);
        console.log(vocales);
        console.log(consonantes);
        alert(`La cantida de vocales son: ${vocales} La cantidad de consonantes son: ${consonantes}`);
        break;

    case '6':
        alert('Gracias. Chao!!');
        break;
}


//Opción #4
/* else if (persona == 4){
    let frutas = prompt("Escribe al menos 3 Frutas")
    for (frutas)
      
    } */