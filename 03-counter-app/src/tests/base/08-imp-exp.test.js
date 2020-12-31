import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Prueba en funciones de heroes', () => {
	test('debe de retornar un héroe por id', () => {
		const id = 2;
		const heroe = getHeroeById(id);

		const heroeData = heroes.find((h) => h.id === id);

		console.log(heroe, heroeData);

		expect(heroe).toEqual(heroeData);
	});

	test('debe de retornar un undefined si heroe no existe', () => {
		const id = 2;
		const heroe = getHeroeById(id);

		const heroeData = heroes.find((h) => h.id === id);

		console.log(heroe, heroeData);

		expect(heroe).toEqual(heroeData);
	});

	test('debe de retornar un arreglo con los heroes de dc', () => {
		const owner = 'DC';
		const heroes = getHeroesByOwner(owner);

		const heroesData = heroes.filter((h) => h.owner === owner);

		expect(heroes).toEqual(heroesData);
	});

	test('debe de retornar un arreglo con los heroes de marvel', () => {
		const owner = 'Marvel';
		const heroes = getHeroesByOwner(owner);

		expect(heroes.length).toBe(2);
	});
});
