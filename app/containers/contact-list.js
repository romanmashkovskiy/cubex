import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Contact from './contact';
import SearchPlugin from './search-plugin';
import  AddContact from '../containers/add-contact'
import { setEditMode, setAddMode, editContact, deleteContact, addContact, select, filter} from "../actions";


class  ContactList extends Component {

    render() {
        if (this.props.addMode) {
            return (
                <div>
                    <SearchPlugin filter={this.props.filter}/>
                    <button className="ui secondary button right floated" onClick={() => this.props.setAddMode(false)}>Отменить добавление</button>
                    <h3 className="ui header">Внесите данные</h3>
                    <AddContact addContact={this.props.addContact} setAddMode={this.props.setAddMode}/>
                    <div className="ui middle aligned divided list">
                        {

                            this.props.filtered.map ((contact) => {
                                return (
                                    <Contact key={contact.id} contact={contact} select={this.props.select}
                                             delete={this.props.deleteContact} edit={this.props.editContact}
                                             setEditMode={this.props.setEditMode}/>
                                );
                            })
                        }
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <SearchPlugin filter={this.props.filter}/>
                    <button className="ui positive button right floated" onClick={() => this.props.setAddMode(true)}>Добавить контакт</button>
                    <div className="ui middle aligned divided list">
                        {

                            this.props.filtered.map ((contact) => {
                                return (
                                    <Contact key={contact.id} contact={contact} select={this.props.select}
                                             delete={this.props.deleteContact} edit={this.props.editContact}
                                             setEditMode={this.props.setEditMode}/>
                                );
                            })
                        }
                    </div>
                </div>
            )
        }

    }
}

function mapStateToProps (state) {
    return {
        filtered: state.filtered,
        addMode: state.addMode,
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        select: select,
        filter: filter,
        addContact: addContact,
        deleteContact: deleteContact,
        editContact: editContact,
        setAddMode: setAddMode,
        setEditMode: setEditMode
    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);