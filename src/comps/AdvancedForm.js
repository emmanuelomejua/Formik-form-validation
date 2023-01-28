import { Formik, Form } from 'formik';
import React from 'react';
import CustomInput from './CustomInput';
import { advancedSchema } from './schemas';
import  CustomSelect from './CustomSelect'
import CustomCheckbox from './CustomCheckbox';


const AdvancedForm = () => {
  return (
    <Formik
    initialValues={{name: '', jobType: '', acceptedTo: false}}
    validationSchema={advancedSchema}
    >
        {(props) => (
              <Form>
                <CustomInput
                  label='Username:'
                  name='username'
                  type='text'
                  placeholder='Enter your Username'
                />

              <CustomSelect
                label='Job Type:'
                name='jobType'
                placeholder='Please select a specializtion'
              >
                <option value=''>Please select a job</option>
                <option value='developer'>Developer</option>
                <option value='designer'>Designer</option>
                <option value='editor'>Editor</option>
                <option value='others'>Others</option>
              </CustomSelect>

              <CustomCheckbox type='checkbox' name='acceptedTo'/>
              <button type='submit'>Submit</button>
          </Form>
        )}
    </Formik>
  )
}

export default AdvancedForm
