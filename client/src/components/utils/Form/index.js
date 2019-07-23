import React, { Fragment } from 'react';
import './form.scss';

const FormField = ({ formdata, change, id }) => {
    const renderTemplate = () => {
        let template = null;

        switch (formdata.element) {
            case 'input':
                template = (
                    <div className='form-block'>
                        <div className='form-header'>
                            <div className='label-inputs'>{
                                formdata.config.label} {formdata.validation.required === true ? '*' : null}
                            </div>
                            {/* {showError()} */}
                        </div>
                        <input
                            {...formdata.config}
                            value={formdata.value}
                            onBlur={(event) => change({ event, id, blur: true })}
                            onChange={(event) => change({ event, id })}
                            spellCheck={false}
                        />
                    </div>
                )
                break;

            default:
                break;
        }

        return template;
    }
    return (
        <Fragment>
            {renderTemplate()}
        </Fragment>
    );
};

export default FormField;