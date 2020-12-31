
import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from '../../Hooks/useFetchGifs';


describe('Pruebas en el useFetchGift', () => {
    
    test('debe de retornar el estado inicial', async() => {
        
        const {result, waitForNextUpdate} = renderHook( () => useFetchGifs('One punch'))
        const { data, loading } = result.current;

        await waitForNextUpdate();
        
        expect(data).toEqual([]);
        expect(loading).toBe(true);
    
    });

    test('debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('One punch'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

		expect(data.length).toBe(10);
		expect(loading).toBe(false);
    
    });

});