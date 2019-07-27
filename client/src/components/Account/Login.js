import React, { Component } from 'react';
import FormField from '../utils/Form';
import { update, generateData, isFormValid } from '../utils/Form/actions_form';

import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/actions_user';
import { turnAllFalse } from '../../store/actions/actions_ui';
import { withRouter } from 'react-router-dom';

class Login extends Component {
    state = {
        formError: false,
        formSuccess: false,
        errorMessage: 'Please check your data',
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    naame: 'email_input',
                    type: 'email',
                    placeholder: 'hi@satchel.com',
                    label: 'email',
                    autoFocus: true,
                    autoComplete: 'email'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLable: true
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    naame: 'password_input',
                    type: 'password',
                    placeholder: '******',
                    label: 'password',
                    autoComplete: 'password'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLable: true
            },
        }
    }
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formData, 'login');
        this.setState({
            formError: false,
            formData: newFormdata
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        event.stopPropagation();

        let dataToSubmit = generateData(this.state.formData, 'login');
        let formIsValid = isFormValid(this.state.formData, 'login')

        if (formIsValid) {
            this.props.dispatch(loginUser(dataToSubmit)).then(res => {
                if (res.payload.loginSuccess) {
                    setTimeout(() => {
                        this.setState({ formSuccess: true })
                        // setTimeout(() => {
                        //     this.props.dispatch(turnAllFalse())
                        // }, 1000);
                    }, 200);
                    setTimeout(() => {
                        this.props.history.push('/user/dashboard')
                    }, 2000);
                } else {
                    this.setState({
                        formError: true,
                        errorMessage: res.payload.message
                    })
                    setTimeout(() => {
                        this.setState({ formError: false })
                    }, 1500);
                }
            })
        } else {
            this.setState({
                formError: true
            })
            setTimeout(() => {
                this.setState({ formError: false })
            }, 3000);
        }
    }
    render() {
        const { formData, formSuccess, formError, errorMessage } = this.state;

        if (formSuccess) {
            return (
                <div style={this.props.style} className='form-wrapper'>
                    <div className='dialog'>
                        <div className='main-dialog'>
                            Successfully logged in!
                        </div>
                        You will be redirect to dashboard page.
                    </div>
                </div>
            )
        }
        return (
            <div style={this.props.style} className='form-wrapper'>
                <form onSubmit={(event) => this.submitForm(event)} autoComplete='on'>
                    <FormField
                        id={'email'}
                        formdata={formData.email}
                        change={(element) => this.updateForm(element)}
                    />
                    <FormField
                        id={'password'}
                        formdata={formData.password}
                        change={(element) => this.updateForm(element)}
                        submit={this.submitForm}
                    />

                    {formSuccess ?
                        <div className='dialog'>
                            <div className='main-dialog'>
                                Successfully logged in!
                            </div>
                            You will be redirect to dashboard page.
                        </div>
                        : formError ?
                            <div className='dialog'>
                                <div className='main-dialog error-label'>
                                    {/* Please check your data. */}
                                    {errorMessage}
                                </div>
                            </div>
                            :
                            <button
                                type='submit'
                                onClick={(event) => this.submitForm(event)}
                                className={formError ? 'gray' : ''}
                                disabled={!formData.email.value || !formData.password.value}
                            >
                                Login
                            </button>
                    }
                </form>

                <div className='footnote'>
                    For faster and secure checkout, you can register new account by clicking register button below.
                </div>
            </div>
        );

    }
};

const mapStateToProps = state => {
    return {
        ui: state.ui
    }
}

export default connect(mapStateToProps)(withRouter(Login));