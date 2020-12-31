import {getHeroesById/* , getHeroesByOwner */} from './Bases/08-imp-exp'

/* const promesas = new Promise( (resolve, reject) => {
    setTimeout(() => {
        const heroe = getHeroesById(2);
        resolve(heroe);
    }, 2000);
});

promesas.then( (heroe) => {
    console.log(heroe);
});

promesas.catch( err => console.warn(err)); */

const getHeoesByIdAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            getHeroesById(id) ? resolve(getHeroesById(id)) : reject('No se pudo encontrar el héroe');
        }, 2000);
    });
}

getHeoesByIdAsync(3).then(console.log).catch(console.warn);
