import React from 'react';
import BusinessDetailsForm from './BusinessDetailsForm';
import { useForm } from "react-hook-form";

const LoanApplicationForm = ({ isLoading, formData, setFormData, submitApplication }) => {
  const {
    handleSubmit
  } = useForm();

  return (
    <div className="loan-application-form">
      <h1>Loan Application</h1>
      <form onSubmit={handleSubmit(submitApplication)}>
        <BusinessDetailsForm formData={formData} setFormData={setFormData} />
        <button disabled={isLoading} type="submit">{isLoading ? 'Validating...' : 'Submit Application'}</button>
        </form>
    </div>
  );
};

export default LoanApplicationForm;