import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import Contact from './contact';
import {select, filter} from '../actions/index';
import SearchPlugin from './search-plugin';
import  AddContact from '../containers/add-contact'
import {addContact} from "../actions";

class  ContactList extends Component {

    render() {
        return (
            <div>
                <SearchPlugin filter={this.props.filter}/>
                <ol>
                    {

                        this.props.filtered.map ((contact) => {
                            return (
                                <Contact key={contact.id} contact={contact} select={this.props.select}/>
                            );
                        })
                    }
                </ol>
                <h3>Добавить контакт:</h3>
                <AddContact addContact={this.props.addContact}/>
            </div>
        );
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
        addContact: addContact
    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(ContactList);