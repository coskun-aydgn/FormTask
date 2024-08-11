import React from 'react'
import { useFormik } from 'formik'
import { basicSchema } from '../schemas'
import {Link} from 'react-router-dom'

const onSubmit= async(values, actions)=>{
    console.log(values)
    console.log(actions)
    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    });
    actions.resetForm();

}

function GenerelForm() {
    const /* formik */ { values, errors, isSubmitting,handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: '',
            age: '',
            password: '',
            comfirmPassword: ''
        },
        validationSchema:basicSchema,
        onSubmit,
    })
    return (
        <form onSubmit={handleSubmit}>
            <div className='inputDiv'>
                <label > Email</label>
                <input type="email"
                    value={values.email}
                    onChange={handleChange}
                    id='email'
                    placeholder='Please enter your email...' 
                    className={errors.email ? 'inputError' : ''}
                    />
                    {errors.email && <p className='error'>{errors.email}</p>} 
            </div>
            <div className='inputDiv'>
                <label > Age</label>
                <input type="number"
                    value={values.age}
                    onChange={handleChange}
                    id='age'
                    placeholder='Please enter your age...' 
                    className={errors.age ? 'inputError' : ''}/>
                     {errors.age && <p className='error'>{errors.age}</p>} 
            </div>
            <div className='inputDiv'>
                <label > Password</label>
                <input type="password"
                    value={values.password}
                    onChange={handleChange}
                    id='password'
                    placeholder='Please enter your password...' 
                    className={errors.password ? 'inputError' : ''}/>
                     {errors.password && <p className='error'>{errors.password}</p>} 
            </div>
            <div className='inputDiv'>
                <label > Again Password</label>
                <input type="password"
                    value={values.comfirmPassword}
                    onChange={handleChange}
                    id='comfirmPassword'
                    placeholder='Please enter your password again...'
                    className={errors.comfirmPassword ? 'inputError' : ''}/>
                     {errors.comfirmPassword && <p className='error'>{errors.comfirmPassword}</p>} 
            </div>
            <button  disabled={isSubmitting} type='submit'>
                Save
            </button>
            <Link class to='/portal' >Portal Page</Link>
        </form>
    )
}

export default GenerelForm
