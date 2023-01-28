import { useFormik } from "formik"
import { basicSchema } from "./schemas";

const onSubmit = async (values, actions ) => {
  console.log(values);
  console.log(actions)
  await new Promise((resolve)=>setTimeout(resolve, 500))
  actions.resetForm()
}

const BasicForm = () => {
const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
  initialValues: {
    email: '',
    age: '',
    password: '',
    confirmPasword: ''
  }, 

  validationSchema : basicSchema,
  onSubmit,

});
console.log(errors)


  return (
    <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email:</label>
        <input 
        value={values.email}
        onChange={handleChange}
        id="email" type='email' 
        placeholder="Enter your email"
        className={errors.email ? 'input-error': ''}
        />
        {errors.email && <p className="error">{errors.email}</p>}

      <label htmlFor="email">Age:</label>
        <input 
        value={values.age}
        onChange={handleChange}
        id="age" 
        type='number' 
        placeholder="Enter your age"
        onBlur={handleBlur}
        className={errors.age && touched.age ? 'input-error': ''}
        />
        {errors.age && touched.age && <p className="error">{errors.age}</p>}

      <label htmlFor="email">Password:</label>
        <input 
        value={values.password}
        onChange={handleChange}
        id="password" type='password' 
        placeholder="Enter your password"
        onBlur={handleBlur}
        className={errors.password ? 'input-error': ''}
        />
        {errors.password && <p className="error">{errors.password}</p>}

      <label htmlFor="email">Confirm Password:</label>
        <input 
        value={values.confirmPasword}
        onChange={handleChange}
        id="confirmPasword" 
        type='password' 
        placeholder="Confirm your password"
        onBlur={handleBlur}
        className={errors.confirmPasword ? 'input-error': ''}
        />
        {errors.confirmPasword && <p className="error">{errors.confirmPasword}</p>}

        <button disabled={isSubmitting} type="submit">Submit</button>
    </form>
  )
}

export default BasicForm
