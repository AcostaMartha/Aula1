//variables /** */
alert("Bienvenido al juego Adivina un numero");
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 al 10:");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto){
    /**si fue verdadera */
    alert('Numero correcto ' + numeroUsuario);
}else{/**Si no fue verdadero */
    alert('numero: ' + numeroUsuario + ' No fue correcto, intentalo de nuevo')
    
}


