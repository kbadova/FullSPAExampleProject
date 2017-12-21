import React from 'react';
import {connect} from 'react-redux';

import UserHeader from 'components/UserHeader';

class UsersList extends React.Component {
  render() {
    const {users} = this.props;
    return (
      <div>
        <UserHeader />
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {index + 1} {user.name} {user.age}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(UsersList);
