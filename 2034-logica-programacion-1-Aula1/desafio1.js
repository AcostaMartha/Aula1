//1. Pregunta al usuario qué día de la semana es. Si la respuesta es 
//"Sábado" o "Domingo", muestra "¡Buen fin de semana!". 
//En caso contrario, muestra "¡Buena semana!".
let diasSemanas = prompt("Que dia de la semanas Es?");
if (diasSemanas == 'Sabado'){
    alert('Buen Fin de Samana!');
}else{
    alert('Buen inicio de semana.')
}
//2. Verifica si un número ingresado por el usuario es positivo o negativo. 
//Muestra una alerta informativa.
let numerod = prompt("ingresa un numero:");
if(numerod < 0){
    alert('Numero negativo')
}else if (numerod > 0){
    alert('Numero positivo')
}else{
    alert('Numero es 0')
}
//3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
//muestra "¡Enhorabuena, has ganado!". En caso contrario,
// muestra "Inténtalo de nuevo para ganar."
let puntuacion = 100
if (puntuacion >= 100){
    console.log('Felicidades has ganado!');
}else{
    console.log('Perdiste puntos');
}
//4. Crea un mensaje que informe al usuario sobre el saldo de la cuenta, 
//utilizando un template string para incluir el valor del saldo.
let SaldoCuenta = 1500;
alert('El saldo de su cuenta es:' + SaldoCuenta);
//5. Pide al usuario que ingrese su nombre usando prompt. Luego,
// muestra una alerta de bienvenida utilizando ese nombre.
let nombreUs = prompt("Ingrese su nombre:")
alert("Bienvenido!" + nombreUs)