import React from 'react'
import { HomeScreen } from './../../../components/09-useContext/HomeScreen';
import { mount } from 'enzyme';
import { UserContext } from './../../../components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'daniel',
        email: 'daniel@example.com',
    }
    
    const wrapper = mount(
        <UserContext.Provider value={{
            user
        }} >
            <HomeScreen />
        </UserContext.Provider>);
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    
})
