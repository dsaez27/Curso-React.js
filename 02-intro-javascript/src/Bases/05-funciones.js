
//? Función común
const saludar =  function(nombre) {
    return `hola, ${nombre}`;
}
//? Función de flecha es6 en adelante
const saludar2 =  (nombre) =>{
    return `hola, ${nombre}`;
}
//? Función de flecha corta es6 en adelante 
const saludar3 =  (nombre) => `hola, ${nombre}`;

//console.log(saludar('goku'));
console.log(saludar('Daniel'));
console.log(saludar2('Karen'));
console.log(saludar3('Isamar'))

/**
** const getUser = () => {
**    return {
**        uid: 'ABC123',
**        username: 'dsaez27'
**  }
** } */
const getUser = () => ({
    uid:'ABC123',
    username:'dsaez27'
})

console.log(getUser())

//! Tarea
//* 1 Transformar a función de flecha
//* 2 Retornar un objeto implicito
//* 3 Pruebas
function getUsuarioActivo(nombre){
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const usurioActivo = getUsuarioActivo('Daniel');
console.log(usurioActivo);

//* Resultado
console.log('Resultado Tarea Funciones ->');
 const usuarioActivo = (nombre) => ({
        uid: 'ABC567',
        username: nombre
    });


console.log(usuarioActivo('Daniel'));