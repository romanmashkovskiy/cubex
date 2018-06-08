import React, {Component} from 'react';
import EditContact from './edit-contact';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {isEditMode: false};
    }
    render () {
        const isEditMode=this.state.isEditMode;
        if (isEditMode) {
            return (
                <div>
                    <li onClick={() => this.props.select(this.props.contact)}>
                        {this.props.contact.name}
                    </li>
                    <button onClick={() => this.props.delete(this.props.contact)}>Удалить</button>
                    <button onClick={() => this.setState({isEditMode: false})}>Отмена редактирования</button>
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
                    <button onClick={() => this.setState({isEditMode: true})}>Редактировать</button>
                </div>
            );
        }

    }
}

export default Contact;