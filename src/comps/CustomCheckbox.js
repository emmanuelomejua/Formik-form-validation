import { useField } from 'formik'

const CustomCheckbox = ({label, ...props}) => {
  const [field, meta] = useField(props)
  console.log('meta', meta)
  console.log('field', field)
  return (
    <>
    <div>
      <input 
       {...field} 
       {...props} 
       className={meta.touched &&meta.error ? 'input-error' : ''}
       />
       <span>I accept with the terms of services</span>
    </div>
       
     {meta.touched && meta.error && <div className='error'></div>} 
    </>
  )
}

export default CustomCheckbox
 