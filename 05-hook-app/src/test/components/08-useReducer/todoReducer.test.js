import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from './../../fixtures/demoTodos';

describe('Pruebas en mi todoReducer', () => {
    test('Debe de retornar el estado por defecto', () => {
        const state = todoReducer(demoTodos, {});
        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un nuevo todo', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Mongo',
            done: false,
        };

        const action = {
            type: 'add',
            payload: newTodo,
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(3);
        expect(state).toEqual([...demoTodos, newTodo]);
    });

    test('Debe de elimina un todo', () => {
        const id = 1;

        const action = {
            type: 'delete',
            payload: id,
        };

        const state = todoReducer(demoTodos, action);
        expect(state.length).toBe(1);
        expect(state).toEqual([demoTodos[1]]);
        expect(state).toEqual(demoTodos.filter((todo) => todo.id !== action.payload));
    });

    test('Debe de marcar todo(done:true)', () => {
        const id = 1;

        const action = {
            type: 'toggle',
            payload: id,
        };

        const state = todoReducer(demoTodos, action);
        expect(state[0].done).toBe(true);
        expect(state[1]).toBe(demoTodos[1]);
        const stateDone = demoTodos.map((demoTodo) =>
            demoTodo.id === action.payload ? { ...demoTodo, done: !demoTodo.done } : demoTodo
        );
        expect(state[0].done).toEqual(stateDone[0].done);
    });

    //test todo
    
});
