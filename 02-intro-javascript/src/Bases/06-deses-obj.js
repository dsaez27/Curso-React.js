//? Destructuración
//? Asignación destructurante

const persona = {
    nombre: 'Tony',
    edad : 45,
    clave: 'Ironman'
};

//*const {nombre, edad, clave} = persona;

/* console.log(`${nombre}
${edad}
${clave}`);
 */
const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
    //console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.2342343,
            lng: 21.234234,
        },
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = useContext(persona);

console.log(`${nombreClave} ${anios}`);
console.log(`Latitud:${lat}, Longitud:${lng}`);
console.log(lat, lng);