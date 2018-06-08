import React from 'react';
import ContactList from '../containers/contact-list';
import Details from '../containers/details'
import  AddContact from '../containers/add-contact'

const App = () => (
    <div>
        <h3>Список контактов:</h3>
        <ContactList/>

        <hr/>
        <h3>Детальная информация:</h3>
        <Details />

    </div>
);

export default App;


