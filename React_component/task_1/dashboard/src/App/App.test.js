import React from 'react';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import App from './App';


configure({ adapter: new Adapter() });

describe('App component', () => {
  // Test pour vérifier la gestion de la déconnexion lors de la pression des touches contrôle et h
  it('calls logOut function and displays alert when control and h keys are pressed', () => {
    // Mock de la fonction logOut
    const logOutMock = jest.fn();
    // Création du composant avec la fonction logOut mockée
    const wrapper = shallow(<App logOut={logOutMock} />);
    // Simulation de la pression des touches contrôle et h
    wrapper.find('window').simulate('keydown', { ctrlKey: true, key: 'h' });
    // Vérification que la fonction logOut a été appelée
    expect(logOutMock).toHaveBeenCalled();
    // Vérification que la fonction d'alerte a été appelée avec la bonne chaîne
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });
});