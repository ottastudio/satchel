import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../store/actions/actions_user';

export default function (Composed, reload, adminRoute = null) {
    class Authentication extends Component {
        state = {
            loading: true
        }
        componentDidMount = () => {
            this.props.dispatch(auth()).then(response =>{
                let user = this.props.user.userData;

                if(!user.isAuth){
                    if(reload){
                        this.props.history.push('/')
                    }
                } else{
                    if(adminRoute && !user.isAdmin){
                        this.props.history.push('/user/dashboard')
                    } else{
                        if(reload === false){
                            this.props.history.push('/user/dashboard')
                        }
                    }
                }
                setTimeout(() => {
                    this.setState({loading:false})
                }, 500);
            })
        };

        render() {
            if (this.state.loading) {
                return <div className='container'>Loading...</div>
            }
            return (
                <Composed {...this.props} user={this.props.user} />
            )
        }

    }
    const mapStateToProps = state => {
        return {
            user: state.user
        }
    }
    return connect(mapStateToProps)(withRouter(Authentication));
}