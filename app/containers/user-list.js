import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import User from './user';
import {select, filter} from '../actions/index';
import SearchPlugin from './search-plugin';

class  UserList extends Component {

    render() {
        return (
            <div>
                <SearchPlugin filter={this.props.filter}/>
                <ol>
                    {

                        this.props.filtered.map ((user) => {
                            return (
                                <User key={user.id} user={user} select={this.props.select}/>
                            );
                        })
                    }
                </ol>
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
        filter: filter
    },
        dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);