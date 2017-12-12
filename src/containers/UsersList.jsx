import React from 'react'
import UserHeader from '../components/UserHeader'
import Counter from '../components/Counter'
import {connect} from 'react-redux'

class UsersList extends React.Component {
  render (){
    const {users} = this.props
    return (

      <div>
      {/*<Counter />*/}
      <UserHeader/>
        <ul>
      {users.map((user, index)=> 
            <li key={index}>{index+1} {user.name} {user.age}</li>
        )}
        </ul>
      </div>)
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps)(UsersList)