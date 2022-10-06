import React from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { SingleModuleButton } from '../UI-Components/Button/SingleModuleButton';
// Shape of form values

const InnerForm = (props) => {
  const { errors, touched } = props;

  return (
    <Form className='register-form'>
      <div>
        <div className='form-group'>
          <Field
            type='text'
            className='form-control login-input'
            name='name'
            placeholder='Name'
          />
          {touched.name && errors.name && (
            <p className='field-invalid'>{errors.name}</p>
          )}
        </div>
        <div className='form-group'>
          <Field
            type='email'
            className='form-control login-input'
            name='identifier'
            placeholder='Your email...'
          />
          {touched.identifier && errors.identifier && (
            <p className='field-invalid'>{errors.identifier}</p>
          )}
        </div>

        <div className='form-group'>
          <Field
            type='password'
            className='form-control password-input'
            name='password'
            placeholder='Your password...'
          />
          {touched.password && errors.password && (
            <p className='field-invalid'>{errors.password}</p>
          )}
        </div>

        <p>
          <Link to='/login'>Already have an account?</Link>
        </p>
      </div>

      <SingleModuleButton text='Create your account' type='submit' />
    </Form>
  );
};

// Wrap our form with the using withFormik HoC
export const RegisterForm = withFormik({
  // Transform outer props into form values
  mapPropsToValues: () => ({ identifier: '', password: '' }),

  // Add a custom validation function (this can be async too!)
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Name is required'),
    identifier: Yup.string()
      .required('Email is required')
      .email('This is not a valid email'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Your password has to be at least 6 characters'),
  }),

  // Submission handler
  handleSubmit: (values, { props }) => {
    props.onLoginSubmit(values.identifier, values.password);
  },
})(InnerForm);
