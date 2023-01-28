import { useField } from 'formik'

const CustomSelect = ({label, ...props}) => {
  const [field, meta] = useField(props)
  console.log('meta', meta)
  console.log('field', field)
  return (
    <>
      <label>{label}</label>
      <select
      {...field} 
      {...props} 
       className={meta.touched &&meta.error ? 'input-error' : ''}
       />

     {meta.touched && meta.error && <div className='error'></div>} 
    </>
  )
}

export default CustomSelect;
 

