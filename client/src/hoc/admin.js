import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { auth } from '../store/actions/actions_user';

export default function (Composed) {
    class Admin extends Component {
        state = { loading: true }
        componentDidMount = () => {
            this.props.dispatch(auth()).then(response => {
                let user = this.props.user.userData;

                if (!user.isAdmin) {
                    this.props.history.push('/')
                }
                setTimeout(() => {
                    this.setState({ loading: false })
                }, 500);
            })
        };

        render() {
            if (this.state.loading) return <div className='dashboard'>Are you an administrator?</div>
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
    return connect(mapStateToProps)(withRouter(Admin));
}