import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render () {
        if (!this.props.contact) {
            return (
              <p>Выберите пользователя</p>
            );
        }
        return (
            <div>
                <h2>{this.props.contact.name}</h2>
                <img style={{height: '150px', width: '150px'}} alt="ФОТО" src={this.props.contact.picture} />
                <p>Компания: {this.props.contact.company}</p>
                <p>Email: {this.props.contact.email}</p>
                <p>Телефон: {this.props.contact.phone}</p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        contact: state.active
    };
}

export default connect(mapStateToProps)(Details);