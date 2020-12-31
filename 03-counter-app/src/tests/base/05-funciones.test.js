import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones', () => {
	test('getUser debe de retornar un objeto', () => {
		const userTest = {
			uid: 'ABC123',
			username: 'El_Papi1502',
		};

		const user = getUser();

		expect(user).toEqual(userTest);
	});

	test('getUsusarioActivo debe de retornar un objeto', () => {
		const nombre = 'Daniel';
		const usuarioActivoTest = {
			uid: 'ABC567',
			username: nombre,
		};

		const usuarioActivo = getUsuarioActivo('Daniel');

		expect(usuarioActivo).toEqual(usuarioActivoTest);
		console.log(usuarioActivo);
	});
});
