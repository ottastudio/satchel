import React, { useState, Component } from 'react';
import FormField from '../utils/Form';
import { update, generateData, isFormValid } from '../utils/Form/actions_form';

import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/actions_user';
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
            // console.log(dataToSubmit);
            this.props.dispatch(loginUser(dataToSubmit)).then(res => {
                if (res.payload.loginSuccess) {
                    // console.log(res);
                    setTimeout(() => {
                        this.setState({ formSuccess: true })
                        setTimeout(() => {
                            this.props.close()
                        }, 1000);
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
            }, 1500);
        }
    }
    render() {

        const { formData, formSuccess, formError, errorMessage } = this.state;

        // console.log(props)
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

                    {/* <div className='notes'>Required field (*)</div> */}

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
            </div>
        );

    }
};

export default connect()(withRouter(Login));