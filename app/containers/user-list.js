import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import User from './user';
import {select} from '../actions/index';

class  UserList extends Component {
    showList () {
      return this.props.users.map ((user) => {
          return (
              <User key={user.id} user={user} select={this.props.select}/>
          );
      });
    }
    render() {
        return (
            <ol>
                {this.showList()}
            </ol>

        );
    }
}

function mapStateToProps (state) {
    return {
        users: state.users
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({select: select}, dispatch)

}

export default connect(mapStateToProps, matchDispatchToProps)(UserList);