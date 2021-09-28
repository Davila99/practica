var cantidadTabla = 8;
var cantidad = 10;
var resultado = 0;
for (var NumeroDeTabla = 1; NumeroDeTabla <= cantidadTabla; NumeroDeTabla++) {
    for (var Cifra = 1; Cifra <= cantidad; Cifra++) {
        resultado = NumeroDeTabla * Cifra;
        console.log(NumeroDeTabla + " * " + Cifra + " = " + resultado);
    }
    console.log("-----------------");
}
