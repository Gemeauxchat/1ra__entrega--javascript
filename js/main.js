let prestamo = prompt("Ingrese el monto que desea solicitar");
let plazo = prompt("Ingrese el plazo del préstamo en meses. Máximo 12.");

let cheque = prestamo * 1.68 * (plazo / 12)

if(prestamo > 3000000){
    alert("El valor máximo a descontar es de 3000000")
    let prestamo = prompt("Ingrese el monto que desea solicitar");
}

if(plazo > 12){
    alert("El plazo máximo es de 12 meses")
    let plazo = prompt("Ingrese el plazo del préstamo en meses. Máximo 12.");
}

if(plazo >= 6){
    alert("Podemos descontarte tres cheques de " + (prestamo * (1.68*plazo/12) / 3).toFixed(2) + " a " + (plazo/3)*30 + ", " + 2*(plazo/3)*30 +" y " + 3*(plazo/3)*30 + " días")
}
else{
    alert("Podemos descontarte dos cheques de " + (prestamo * (1.68*plazo/12) / 2).toFixed(2) + " a " + (plazo/3)*30 + " y " + 2*(plazo/3)*30 + " días")
}

for(let i = 1;i<13;i++){

    console.log("La cuota número " + i + " vence en " + i*30 + " días")
    if(i == plazo){
        break;
    }
}

