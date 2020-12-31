const nombre = 'Daniel';
const apellido = 'Sáez';

//const nombreCompleto = nombre + '' + apellido;
const nombreCompleto = `Bienvenido ${nombre} ${apellido}`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return `Hola ${nombre} ${apellido}`;
}

console.log(`Este es un texto: ${getSaludo(nombre)}`)