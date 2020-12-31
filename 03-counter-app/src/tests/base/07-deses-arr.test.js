import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en 07-deses-arr.js', () => {
	test('debe de retornar un String y un número', () => {
		const [letras, numeros] = retornaArreglo();
		console.log(typeof letras);

		expect(letras).toBe('ABC');
		expect(typeof letras).toBe('string');

		expect(numeros).toBe(123);
		expect(typeof numeros).toBe('number');
	});
});
