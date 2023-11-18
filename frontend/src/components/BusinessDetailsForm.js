import React from 'react';

const BusinessDetailsForm = ({ formData, setFormData }) => {
  return (
    <div className='business-details-form'>
      <h2>Business Details</h2>
      {/* Add form fields for business details */}
      <input
        type="text"
        required
        validationErrors={{
          isDefaultRequiredValue: 'Field is required'
        }}
        placeholder="Business Name"
        onChange={(e) => setFormData({ ...formData, businessDetails: { ...formData.businessDetails, name: e.target.value } })}
      />
      <br/>
      <input
        type="number"
        required
        placeholder="Loan Amount"
        onChange={(e) => setFormData({ ...formData, loanAmount: e.target.value })}
      />
      <br/>
      <select
        onChange={(e) => setFormData({ ...formData, accountingProvider: e.target.value })}
      >
        <option value="">Select Accounting Provider</option>
        <option value="Xero">Xero</option>
        <option value="MYOB">MYOB</option>
        {/* Add more options as needed */}
      </select>
      <br/>
    </div>
  );
};

export default BusinessDetailsForm;