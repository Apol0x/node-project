//ciclo de vida del proceso
//primero Node crea un metodo Main()
//Se empieza a ejecutar con todo el codigo
//Registra la función saludar (no la ejecuta)
function saluda(name) {
  let message = `Hola ${name}`;
  return message;
}
//Registra la siguiente declaracion
//se dispara el metodo saluda()
let saludo = saluda('Bart Simpson');
//Devuelve el message y termina la funcion
//se ejecuta el siguiente console log
console.log(saludo);
//y termina el main()
