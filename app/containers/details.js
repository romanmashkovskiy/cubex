import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render () {
        if (!this.props.user) {
            return (
              <p>Выберите пользователя</p>
            );
        }
        return (
            <div>
                <h2>{this.props.user.name}</h2>
                <img src={this.props.user.picture} />
                <p>Организация: {this.props.user.company}</p>
                <p>Электронная почта: {this.props.user.email}</p>
                <p>Телефон: {this.props.user.phone}</p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        user: state.active
    };
}

export default connect(mapStateToProps)(Details);