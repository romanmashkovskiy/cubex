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
                    <button onClick={() => this.props.setAddMode(false)}>Отменить добавление</button>
                    <SearchPlugin filter={this.props.filter}/>
                    <ol>
                        {

                            this.props.filtered.map ((contact) => {
                                return (
                                    <Contact key={contact.id} contact={contact} select={this.props.select}
                                             delete={this.props.deleteContact} edit={this.props.editContact}
                                             setEditMode={this.props.setEditMode}/>
                                );
                            })
                        }
                    </ol>
                    <h3>Внесите данные</h3>
                    <AddContact addContact={this.props.addContact} setAddMode={this.props.setAddMode}/>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={() => this.props.setAddMode(true)}>Добавить контакт</button>
                    <SearchPlugin filter={this.props.filter}/>
                    <ol>
                        {

                            this.props.filtered.map ((contact) => {
                                return (
                                    <Contact key={contact.id} contact={contact} select={this.props.select}
                                             delete={this.props.deleteContact} edit={this.props.editContact}
                                             setEditMode={this.props.setEditMode}/>
                                );
                            })
                        }
                    </ol>
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