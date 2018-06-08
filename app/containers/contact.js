import React, {Component} from 'react';
import EditContact from './edit-contact';

class Contact extends Component {

    render () {
         if (this.props.contact.editMode) {
            return (
                <div>
                    <li onClick={() => this.props.select(this.props.contact)}>
                        {this.props.contact.name}
                    </li>
                    <button onClick={() => this.props.delete(this.props.contact)}>Удалить</button>
                    <button onClick={() => this.props.setEditMode(this.props.contact, false)}>Отменить редактирование</button>
                    <EditContact contact={this.props.contact} edit={this.props.edit}/>
                </div>
            );
        } else {
            return (
                <div>
                    <li onClick={() => this.props.select(this.props.contact)}>
                        {this.props.contact.name}
                    </li>
                    <button onClick={() => this.props.delete(this.props.contact)}>Удалить</button>
                    <button onClick={() => this.props.setEditMode(this.props.contact, true)}>Редактировать</button>
                </div>
            );
        }

    }
}

export default Contact;