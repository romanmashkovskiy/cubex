import React, {Component} from 'react';
import { connect } from 'react-redux';

class Details extends Component {
    render () {
        if (!this.props.contact) {
            return (
                <h4 className="ui header">Выберите пользователя</h4>
            );
        }
        return (
            <div className="ui segment">
                <img style={{height: '200px', width: '150px'}} className="ui centered medium image" src={this.props.contact.picture}/>
                <form className="ui form">
                    <div className="field">
                        <label>Фамилия и имя</label>
                        <input type="text" value={this.props.contact.name}/>
                    </div>
                    <div className="field">
                        <label>Компания</label>
                        <input type="text" value={this.props.contact.company}/>
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" value={this.props.contact.email}/>
                    </div>
                    <div className="field">
                        <label>Телефон</label>
                        <input type="text" value={this.props.contact.phone}/>
                    </div>
                </form>
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