import React from 'react'
import { Formik, Form ,ErrorMessage} from 'formik';
import { TextField, colors } from '@mui/material';
import * as Yup from 'yup';
import { Button } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';


export const Register = () => {
  const validateSchema = Yup.object().shape({
    firstName: Yup.string()
      .max(15, 'Must be 15 character or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 character or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is required')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validateSchema}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {({ touched, value, errors, handleChange, handleBlur, handleSubmit }) => (
        <div >
          <h1 style={{textAlign:"center"}}>Registration</h1>
          <Form onSubmit={handleSubmit}>
            <div style={{
              padding: 5,
              display: "flex",
              flexDirection: "column",
              rowGap: 8

            }}>
              <TextField variant="outlined" label="First Name" id="firstName" name="firstName" type='text' onChange={handleChange} onBlur={handleBlur}></TextField>
              {/* <p><ErrorMessage name='firstName'></ErrorMessage></p> */}
              {touched.firstName && errors.firstName && <span style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}>{errors.firstName}</span>}
              <TextField variant="outlined" label="Last Name" name="lastName" type='text' onChange={handleChange} onBlur={handleBlur}></TextField>
              {touched.lastName && errors.lastName && <span style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}>{errors.lastName}</span>}
              <TextField variant="outlined" label="Email" name="email" type='email' onChange={handleChange} onBlur={handleBlur}></TextField>
              {touched.email && errors.email && <span style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}>{errors.email}</span>}
              <TextField variant="outlined" label="password" name="password" type='password' onChange={handleChange} onBlur={handleBlur}></TextField>
              {touched.password && errors.password && <span style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}>{errors.password}</span>}
              <TextField variant="outlined" label="Confirm Password" name="confirmPassword" type='password' onChange={handleChange} onBlur={handleBlur}></TextField>
              {touched.confirmPassword && errors.confirmPassword && <span style={{
                      padding: 5,
                      color: "red",
                      fontSize: 16,
                      fontWeight: 500,
                    }}>{errors.confirmPassword}</span>}
              <Button variant="contained" type='submit'>Submit</Button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  )
}