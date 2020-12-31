import { getSaludo } from "../../base/02-template-string";

describe("Pruebas en 02-template-string.js", () => {
	test("Prueba en el método getSaludo", () => {
        const nombre = 'Daniel';
        
        const saludo = getSaludo( nombre );

        expect( saludo ).toBe( 'Hola Daniel!' );
    });
    
    test('getSaludo debe de retornar Hola Carlos si no hay argumento nombre', () => {
        const saludo = getSaludo();

        expect( saludo ).toBe( 'Hola Carlos!' );
    })
    
});

