import React from 'react'
import { useFormik } from 'formik'

function GenerelForm() {
    const /* formik */ { values, errors, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            comfirmPassword: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        }
    })
    return (
        <form>
            <div className='inputDiv'>
                <label > Email</label>
                <input type="email"
                    value={values.email}
                    onChange={handleChange}
                    id='email'
                    placeholder='Please enter your email...' />
            </div>
            <div className='inputDiv'>
                <label > Age</label>
                <input type="number"
                    value={values.age}
                    onChange={handleChange}
                    id='age'
                    placeholder='Please enter your age...' />
            </div>
            <div className='inputDiv'>
                <label > Password</label>
                <input type="password"
                    value={values.password}
                    onChange={handleChange}
                    id='password'
                    placeholder='Please enter your password...' />
            </div>
            <div className='inputDiv'>
                <label > Again Password</label>
                <input type="password"
                    value={values.comfirmPassword}
                    onChange={handleChange}
                    id='comfirmPassword'
                    placeholder='Please enter your password again...' />
            </div>
            <button type='submit'>
                Save
            </button>
        </form>
    )
}

export default GenerelForm
