let cantidadTabla:number =8
let cantidad:number =10
let resultado:number=0


for (let NumeroDeTabla = 1; NumeroDeTabla <= cantidadTabla; NumeroDeTabla++) {
    
    for ( let Cifra = 1; Cifra <= cantidad; Cifra++) {
        
        resultado= NumeroDeTabla * Cifra
         console.log(NumeroDeTabla+" * "+Cifra +" = " +resultado)
        }

        console.log("-----------------");
}




