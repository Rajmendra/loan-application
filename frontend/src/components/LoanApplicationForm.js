import React from 'react';
import BusinessDetailsForm from './BusinessDetailsForm';
import { FormProvider, useForm } from 'react-hook-form'

const LoanApplicationForm = ({ formData, setFormData, submitApplication }) => {
  const methods = useForm()
  
  return (
    <div className="loan-application-form">
      <h1>Loan Application</h1>
      <FormProvider {...methods}>
      <form
        onSubmit={e => e.preventDefault()}
        noValidate
        autoComplete="off" >
        <BusinessDetailsForm formData={formData} setFormData={setFormData} />
        <button type="button" onClick={()=> {
          methods.reset()
          submitApplication();
        }}>Submit Application</button>
      
        </form>
    </FormProvider>
    </div>
  );
};

export default LoanApplicationForm;