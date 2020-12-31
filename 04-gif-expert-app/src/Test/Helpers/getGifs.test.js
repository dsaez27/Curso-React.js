import { getGifs } from '../../Helpers/getGifs'

describe('pruebas con getGifs fetch', () => {

    test('debe de traer 10 elementos', async() => {

        const gifs = await getGifs('Linkin park');
        expect(gifs.length).toBe(10)
        
    });

    test('debe de traer 0 elementos', async() => {

        const gifs = await getGifs('');
        expect(gifs.length).toBe(0)
        
    });
    
});