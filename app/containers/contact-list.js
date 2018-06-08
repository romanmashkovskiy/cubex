import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Contact from './contact';
import SearchPlugin from './search-plugin';
import  AddContact from '../containers/add-contact'
import { editContact, deleteContact, addContact, select, filter} from "../actions";


class  ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {isNewAddMode: false};
    }
    render() {
        const isNewAddMode=this.state.isNewAddMode;
        if (isNewAddMode) {
            return (
                <div>
                    <button onClick={() => this.setState({isNewAddMode: false})}>Отмена добавления</button>
                    <SearchPlugin filter={this.props.filter}/>
                    <ol>
                        {

                            this.props.filtered.map ((contact) => {
                                return (
                                    <Contact key={contact.id} contact={contact} select={this.props.select}
                                             delete={this.props.deleteContact} edit={this.props.editContact}/>
                                );
                            })
                        }
                    </ol>
                    <h3>Внесите данные</h3>
                    <AddContact addContact={this.props.addContact}/>
                </div>
            );
        } else {
            return (
                <div>
                    <button onClick={() => this.setState({isNewAddMode: true})}>Добавить контакт</button>
                    <SearchPlugin filter={this.props.filter}/>
                    <ol>
                        {

                            this.props.filtered.map ((contact) => {
                                return (
                                    <Contact key={contact.id} contact={contact} select={this.props.select}
                                             delete={this.props.deleteContact} edit={this.props.editContact}/>
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
        filtered: state.filtered
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        select: select,
        filter: filter,
        addContact: addContact,
        deleteContact: deleteContact,
        editContact: editContact
    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);