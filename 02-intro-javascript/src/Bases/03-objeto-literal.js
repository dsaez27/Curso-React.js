const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion : {
        ciudad: 'new york',
        zip: 555321321,
        lat: 32.18237182,
        lng: 92.12317931212,
    },
}

console.log(`Bienvenido ${persona.nombre} ${persona.apellido}`);
console.log(`Su edad es de: ${persona.edad}`)
//? Para ver el nombre desde la primera variable se imprime console.log({persona})
//?  -> SALIDA ->
console.log({persona})
//?  -> SALIDA EN TABLA ->
console.log(`
Salidas en tablas`)
console.table({persona}); //* Para ver tabla horizontal
console.table(persona); //* Para ver tabla en vertical

//? clonar y editar variables clonadas
console.log(`
Clonar Variables`);
const persona2 = {...persona}; 
/** 
  **Para copiar variable de buena manera se pone de la siguiente manera -> {...variable a copiar} 
*/ 
persona2.nombre = 'peter';
console.log(persona);
console.log(persona2);
console.log({persona2});
console.table({persona2});
console.table(persona2);