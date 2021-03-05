import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from './screens/Login'
import Books from './screens/Books';

const Rotas = {
    Login: {
        nome: 'Login',
        screen: Login
    },
    Books: {
        nome: 'Books',
        screen: Books
    }
}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);