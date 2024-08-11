import React from 'react'
import {Form,Formik} from 'formik';
import CustumInput from './CustumInput';
import { adviceSchema } from '../schemas';
import CustumSelect from './CustumSelect';
import CustumCheckBox from './CustomCheckBox';
import {Link} from 'react-router-dom'

const onSubmit= async(values, actions)=>{
    console.log(values)
    console.log(actions)
    await new Promise((resolve)=>{
        setTimeout(resolve,1000)
    });
    actions.resetForm();

}


function PortalForm() {
    return (
        <>
            <Formik
       initialValues={{ username: '', university: 'red', isAccepted:false }}
       onSubmit={onSubmit}
       validationSchema={adviceSchema
       }
        >
       {({isSubmitting}) => (
         <Form>
          <CustumInput
          label="Username" name="username" type="text" placeholder="Enter username.."
          />
          <CustumSelect
          label="Your University"
          name="university"
          placeholder="Select your university.."
          >
            <option value="">Select your university</option>
            <option value="Oslomet">Oslomet</option>
            <option value="University of Oslo">University of Oslo</option>
            <option value="University of Tromso">University of Tromso</option>
            <option value="University of Cukurova">University of Cukurova</option>
          </CustumSelect>
          <CustumCheckBox type="checkbox" name="isAccepted"/>
          <button disabled={isSubmitting} type='submit'>Save</button>
          <Link class to='/' >Main Page</Link>
         </Form>
       )}
     </Formik>
        </>
    )
}

export default PortalForm
