import React from 'react';
import { shallow } from 'enzyme';
import { HookApp } from '../HookApp';

describe('Pruebas en <HookApp />', () => {
    test('Debe de mostrarse <HookApp /> correctamente', () => {
        const wrapper = shallow(<HookApp />);
        expect(wrapper).toMatchSnapshot();
    });
});
