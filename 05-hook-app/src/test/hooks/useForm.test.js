import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en el useForm', () => {
    const initialForm = {
        name: 'daniel',
        email: 'dssh27',
    };

    test('Debe de regresar un formulario por defecto', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [values, handleInputChange, reset] = result.current;
        expect(values).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toEqual('function');
    });

    test('Debe de cambiar valor del formulario (cambiar name)', () => {
        const { result } = renderHook(() => useForm(initialForm));
        const [, handleInputChange] = result.current;
        act(() => {
            handleInputChange({
                target: {
                    name: 'name',
                    value: 'camila',
                },
            });
        });
        const [formValues] = result.current;
        expect(formValues).toEqual({ ...initialForm, name: 'camila' });
    });

    test('Debe de resetear los valores por defecto', () => {
         const { result } = renderHook(() => useForm(initialForm));
         const [, handleInputChange, reset] = result.current;
         act(() => {
             handleInputChange({
                 target: {
                     name: 'name',
                     value: 'camila',
                 },
             });
             reset();
         });
         const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    });
});
