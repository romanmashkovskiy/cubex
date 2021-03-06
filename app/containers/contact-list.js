import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Contact from './contact';
import SearchPlugin from './search-plugin';
import  AddContact from '../containers/add-contact'
import { setEditMode, setAddMode, editContact, deleteContact, addContact, select} from "../actions";

class  ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentlyDisplayed: this.props.contacts
        };
        this.filterList = this.filterList.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({currentlyDisplayed: nextProps.contacts});
    }

    filterList(text){
        let filteredList = this.props.contacts.filter(function(contact){
            return contact.name.toLowerCase().includes(text.toLowerCase());
        });
        this.setState({currentlyDisplayed: filteredList});
    }

    render() {
        if (this.props.addMode) {
            return (
                <div>
                    <SearchPlugin filter={this.filterList}/>
                    <button className="ui secondary button right floated" onClick={() => this.props.setAddMode(false)}>Отменить добавление</button>
                    <h3 className="ui header">Внесите данные</h3>
                    <AddContact state={this.state} addContact={this.props.addContact} setAddMode={this.props.setAddMode}/>
                    <div className="ui middle aligned divided list">
                        {
                            this.state.currentlyDisplayed.map ((contact) => {
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
                    <SearchPlugin filter={this.filterList}/>
                    <button className="ui positive button right floated" onClick={() => this.props.setAddMode(true)}>Добавить контакт</button>
                    <div className="ui middle aligned divided list">
                        {
                            this.state.currentlyDisplayed.map ((contact) => {
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
        contacts: state.contacts,
        addMode: state.addMode,
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({
        select: select,
        addContact: addContact,
        deleteContact: deleteContact,
        editContact: editContact,
        setAddMode: setAddMode,
        setEditMode: setEditMode
    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);