var nota1 = parseInt(prompt("Ingrese la nota (en el rango de 0.0 a 5.0):"));
var nota2 = parseInt(prompt("Ingrese la nota (en el rango de 0.0 a 5.0):"));

var promedio = (nota1+nota2)/2;

document.write("Su promedio es: "+ promedio );


if (promedio >= 3.0 ) {
    document.write("Con su promedio, ud Paso!!!!")
    

} else {
    document.write("Con su promedio, Ud NO paso")

}