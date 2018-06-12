import React, {Component} from 'react';
import EditContact from './edit-contact';

class Contact extends Component {

    render () {
         if (this.props.contact.editMode) {
            return (
                <div className="item">
                    <div className="right floated content">
                        <div className="ui secondary button" onClick={() => this.props.setEditMode(this.props.contact, false)}>Отменить редактирование</div>
                        <div className="ui negative button" onClick={() => this.props.delete(this.props.contact)}>Удалить</div>
                    </div>
                    <img className="ui avatar image" src={this.props.contact.picture}/>
                    <div className="content" onClick={() => this.props.select(this.props.contact)}>
                        <a>
                            {this.props.contact.name}
                        </a>
                    </div>
                    <EditContact contact={this.props.contact} edit={this.props.edit}/>
                </div>
            );
        } else {
            return (
                <div className="item">
                    <div className="right floated content">
                        <div className="ui primary button" onClick={() => this.props.setEditMode(this.props.contact, true)}>Редактировать</div>
                        <div className="ui negative button" onClick={() => this.props.delete(this.props.contact)}>Удалить</div>
                    </div>
                    <img className="ui avatar image" src={this.props.contact.picture}/>
                    <div className="content" onClick={() => this.props.select(this.props.contact)}>
                        <a>
                            {this.props.contact.name}
                        </a>
                    </div>
                </div>
            );
        }
    }
}

export default Contact;