import React from 'react';
import ContactList from '../containers/contact-list';
import Details from '../containers/details'

const App = () => (
    <div>
        <h1 className="ui center aligned icon header">
            <i className="circular users icon"></i>
            Справочник контактов
        </h1>

        <div className="ui grid">
            <div className="column ten wide">
                <ContactList/>
            </div>
            <div className="column six wide">
                <h3 className="ui header">Детальная информация о контакте</h3>
                <Details />
            </div>
        </div>
     </div>
);

export default App;


