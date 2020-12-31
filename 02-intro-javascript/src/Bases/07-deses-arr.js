const personajes = ['Goku', 'Vegetta', 'Trunks'];
//? F2 para cambiar las referencias en todo el archivo
const [, ,p3] = personajes;
//* Las comas ignoran a goku y vegetta
console.log(p3);

const retornaArreglo  = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//?Tarea
//* 1 El primer valor del arreglo se llamará nombre
//* 2 Se llamará setNombre


const useState = (valor) => {
    return [valor, () =>{ console.log('Hola Mundo') } ];
}

const [nombre, setNombre] = useState('Goku');
console.log(nombre);
setNombre();