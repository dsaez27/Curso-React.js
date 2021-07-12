
import { shallow } from 'enzyme';
import { TodoAdd } from './../../../components/08-useReducer/TodoAdd';

describe('Pruebas en  <TodoAdd />', () => {

    const handleAddTodo = jest.fn()
    const wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);

    test('Debe de mostrarse Correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('No debe llamar a handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({ preventDefault() { } });
    })
    
})
