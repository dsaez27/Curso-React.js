import { finishLoading, removeError, setError, startLoading } from './../../../redux/actions/ui';
import { types } from './../../../redux/types';

describe('Pruebas en ui actions', () => {
    test('Todas las acciones deben de funcionar', () => {
        const error = setError('Holi');
        expect(error.payload).toEqual('Holi');

        const removeErrorAction = removeError();
        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError
        });

        const startLoadingAction = startLoading();
        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading
        });

        const finishLoadingAction = finishLoading();
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading
        });
        
    });
});
