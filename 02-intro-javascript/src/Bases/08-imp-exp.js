import heroes/*, {owners}*/ from '../data/heroes'

//?  Find
export const getHeroesById = (id) => heroes.find((heroe) => heroe.id === id);
//*console.log(getHeroeById(4));

//? Filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);
//*console.table(getHeroesByOwner('DC'));

//*console.log(owners);
