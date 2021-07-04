import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getUserPosts} from '../../actions/index'
import moment from 'moment-js'
import {Link} from 'react-router-dom'

 class UserPosts extends Component {

    //WARNING! To be deprecated in React v17. Use componentDidMount instead.
    componentWillMount() {
        this.props.dispatch(getUserPosts(this.props.user.login.id))
    
    }

    showUserPosts = (user)=>(
        user.userPosts ?
        user.userPosts.map(item=>(
            <tr key={item._id}>
                <td><Link to={`/user/edit-post/${item._id}`}>{item.name}</Link></td>
                <td>{item.author}</td>
                <td>{moment(item.createAt).format("MM/DD/YY")}</td>
            </tr>
        )) 
        :null
    )

    render() {
       let user = this.props.user;
       console.log(user)
        return (
            <div className="user_posts">
                <h4>Your reviews</h4>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Author</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showUserPosts(user)}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(UserPosts)
