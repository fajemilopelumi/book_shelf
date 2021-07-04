import React, { Component } from 'react'
import {auth} from '../actions'
import {connect} from 'react-redux'

export default function(ComposedClass, reload){
    class AuthenticationCheck extends Component {

        state = {
            loading:true
        }

        //WARNING! To be deprecated in React v17. Use componentDidMount instead.
        componentWillMount() {
            this.props.dispatch(auth())
        }

        //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
        componentWillReceiveProps(nextProps) {
            this.setState({
                loading: false
            })

            if(!nextProps.user.login.isAuth){
                if(reload){
                    this.props.history.push('/login')                }
                
            } else {
                if(reload === false){
                    this.props.history.push('/user')
                }
                
            }
        }

        render(){
            if(this.state.loading){
                return <div className="loader">loading..</div>
            }
            return(
                <ComposedClass {...this.props} user={this.props.user}/>
            )
        }
    }

    const mapStateToProps = (state) => {
       
        return {
            user: state.user
        }
    }
    return connect(mapStateToProps)(AuthenticationCheck)
}
