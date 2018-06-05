import React, {Component} from 'react';

class User extends Component {
    render () {
        return (
            <li onClick={() => this.props.select(this.props.user)}>
               {this.props.user.name}
            </li>
        );
    }
}

export default User;