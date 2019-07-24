import React, { useState, Component } from 'react';
import FormField from '../utils/Form';
import { update, generateData, isFormValid } from '../utils/Form/actions_form';

import { connect } from 'react-redux';
import { registerUser } from '../../store/actions/actions_user';
import { withRouter } from 'react-router-dom';

class Register extends Component {
    state = {
        formError: false,
        formSuccess: false,
        errorMeassage: 'please check your data',
        formData: {
            firstname: {
                element: 'input',
                value: '',
                config: {
                    name: 'firstname_input',
                    type: 'input',
                    placeholder: 'Maria',
                    label: 'firstname',
                    autoFocus: true,
                    autoComplete: 'firstname'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLable: true
            },
            lastname: {
                element: 'input',
                value: '',
                config: {
                    name: 'lastname_input',
                    type: 'input',
                    placeholder: 'Anders',
                    label: 'lastname',
                    autoComplete: 'lastname'
                },
                validation: {
                    required: true
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLable: true
            },
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    placeholder: 'hi@satchel.com',
                    label: 'email',
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
                    name: 'password_input',
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
            confirmPassword: {
                element: 'input',
                value: '',
                config: {
                    name: 'confirm_password_input',
                    type: 'password',
                    placeholder: '******',
                    label: 'confirm',
                    autoComplete: 'password'
                },
                validation: {
                    required: true,
                    confirm: 'password'
                },
                valid: false,
                touched: false,
                validationMessage: '',
                showLable: true
            }
        }
    }
    updateForm = (element) => {
        const newFormdata = update(element, this.state.formData, 'register');
        this.setState({
            formError: false,
            formData: newFormdata
        })
    }

    submitForm = (event) => {
        event.preventDefault();
        event.stopPropagation();

        let dataToSubmit = generateData(this.state.formData, 'register');
        let formIsValid = isFormValid(this.state.formData, 'register')

        if (formIsValid) {
            // console.log(dataToSubmit);
            this.props.dispatch(registerUser(dataToSubmit))
                .then(res => {
                    if (res.payload.success) {
                        this.setState({
                            formError: false,
                            formSuccess: true
                        })
                        setTimeout(() => {
                            // this.props.history.push('/user/dashboard')
                            this.props.switcher()
                        }, 500);
                    } else {
                        if(res.payload.err.code === 11000){
                            this.setState({
                                errorMeassage: 'Email has been registered'
                            })
                        }
                        this.setState({ formError: true })
                        setTimeout(() => {
                            this.setState({ formError: false })
                        }, 1500);
                    }
                }).catch(e => {
                    this.setState({ formError: true })
                    console.log(e);
                })
        } else {
            this.setState({ formError: true })
            setTimeout(() => {
                this.setState({ formError: false })
            }, 1500);
        }
    }
    render() {
        const { formData, formSuccess, formError, errorMeassage } = this.state;
        return (
            <div style={this.props.style} className='form-wrapper'>
                <form onSubmit={(event) => this.submitForm(event)} autoComplete='on'>
                    <div style={{ display: 'flex' }}>
                        <FormField
                            id={'firstname'}
                            formdata={formData.firstname}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={'lastname'}
                            formdata={formData.lastname}
                            change={(element) => this.updateForm(element)}
                        />
                    </div>
                    <FormField
                        id={'email'}
                        formdata={formData.email}
                        change={(element) => this.updateForm(element)}
                    />
                    <div style={{ display: 'flex' }}>
                        <FormField
                            id={'password'}
                            formdata={formData.password}
                            change={(element) => this.updateForm(element)}
                        />
                        <FormField
                            id={'confirmPassword'}
                            formdata={formData.confirmPassword}
                            change={(element) => this.updateForm(element)}
                        />
                    </div>

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
                                    {errorMeassage}
                                </div>
                            </div>
                            :
                            <button
                                type='submit'
                                onClick={(event) => this.submitForm(event)}
                                className={formError ? 'gray' : ''}
                                disabled={!formData.email.value || !formData.password.value}
                            >
                                Register
                            </button>
                    }
                </form>
            </div>
        );

    }
};

export default connect()(withRouter(Register));