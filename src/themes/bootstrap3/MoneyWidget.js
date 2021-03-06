import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import {Field} from 'redux-form';

const renderInput = field => {
    var className = classNames([
        'form-group',
        {'has-error' : field.meta.touched && field.meta.error}
    ]);
    return (
        <div className={className}>
            <label className="control-label" htmlFor={'field-'+field.name}>{field.label}</label>
            <div className="input-group">
            <span className="input-group-addon">€ </span>
            <input {...field.input} type="number" className="form-control" id={'field-'+field.name} required={field.required} placeholder={field.placeholder}/>
            </div>
            {field.meta.touched && field.meta.error && <span className="help-block">{field.meta.error}</span>}
            {field.description && <span className="help-block">{field.description}</span>}
        </div>
    );
}


const NumberWidget = props =>  {
    return (
        <Field
            component={renderInput}
            label={props.label}
            name={props.fieldName}
            required={props.required}
            id={'field-'+props.fieldName}
            placeholder={props.schema.default}
            description={props.schema.description}
        />
    );
}

NumberWidget.propTypes = { schema: React.PropTypes.object.isRequired };

export default NumberWidget;
