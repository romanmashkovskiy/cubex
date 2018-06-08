import React, {Component} from 'react';

class Contact extends Component {
    render () {
        return (
            <li onClick={() => this.props.select(this.props.contact)}>
               {this.props.contact.name}
            </li>
        );
    }
}

export default Contact;