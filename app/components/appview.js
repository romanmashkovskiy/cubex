import React from 'react';
import UserList from '../containers/user-list';
import Details from '../containers/details'

const App = () => (
    <div>
        <h3>Список контактов:</h3>
        <UserList/>
        <hr/>
        <h3>Детальная информация:</h3>
        <Details />

    </div>
);

export default App;


