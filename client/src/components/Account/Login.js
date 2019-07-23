import React, { useState } from 'react';
import FormField from '../utils/Form';
import { update, generateData, isFormValid } from '../utils/Form/actions_form';

import { connect } from 'react-redux';
import { loginUser } from '../../store/actions/actions_user';
import { withRouter } from 'react-router-dom';

const Login = (props) => {
    // eslint-disable-next-line
    const [state, setState] = useState({
        formError: false,
        formSuccess: false,
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
                    placeholder: 'your password',
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
    })

    const updateForm = (element) => {
        const newFormdata = update(element, state.formData, 'login');
        setState({
            formError: false,
            formData: newFormdata
        })
    }

    const submitForm = (event) => {
        event.preventDefault();
        event.stopPropagation();

        let dataToSubmit = generateData(state.formData, 'login');
        let formIsValid = isFormValid(state.formData, 'login')

        if(formIsValid){
            // console.log(dataToSubmit);
            props.dispatch(loginUser(dataToSubmit)).then(res => {
                if(res.payload.loginSuccess){
                    // console.log(res);
                    // setState({formSuccess: true})
                    setTimeout(() => {
                        props.close()
                        props.history.push('/user/dashboard')
                    }, 100);
                }else{
                    setState({formError: true})
                }
            })
        }else{
            setState({formError: true})
        }
    }

    // console.log(props)
    return (
        <div style={props.style} className='form-wrapper'>
            {/* <label className='form-label'>Login</label> */}
            <form onSubmit={(event) => submitForm(event)} autoComplete='on'>
                <FormField
                    id={'email'}
                    formdata={state.formData.email}
                    change={(element) => updateForm(element)}
                />
                <FormField
                    id={'password'}
                    formdata={state.formData.password}
                    change={(element) => updateForm(element)}
                />

                {/* <div className='notes'>Required field (*)</div> */}

                {state.formSuccess ?
                    <div className='dialog'>
                        <div className='main-dialog'>
                            Successfully logged in!
                        </div>
                        You will be redirect to dashboard page.
                    </div>
                    : state.formError ?
                        <div className='dialog'>
                            <div className='main-dialog error-label'>
                                Please check your data.
                            </div>
                        </div>
                        :
                        <button
                            type='submit'
                            onClick={(event) => submitForm(event)}
                            className={state.formError ? 'gray' : ''}
                            disabled={!state.formData.email.value || !state.formData.password.value}
                        >
                            Login
                        </button>
                }
            </form>
        </div>
    );
};

export default connect()(withRouter(Login));