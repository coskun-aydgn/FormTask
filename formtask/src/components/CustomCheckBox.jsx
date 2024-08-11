import React from 'react'
import { useField } from 'formik'

function CustumCheckBox({label, ...props}) {
    const[field, meta]=useField(props);
   
    return (
      <>
       <div className='checkbox'>
            <input {...field}{ ...props} className={meta.error ? 'input-error':''}/>
            <span>Accept terms of use</span>
       </div>
        {meta.error && <div className='error'>{meta.error}</div>}
      </>
  )
}

export default CustumCheckBox
