// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';
import LoanApplicationForm from './components/LoanApplicationForm';
import DecisionOutcome from './components/DecisionOutcome';
import apiService from './services/apiService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [formData, setFormData] = useState({
    businessDetails: {},
    loanAmount: 0,
    accountingProvider: '',
  });
  const [decisionOutcome, setDecisionOutcome] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const submitApplication = async () => {
    setLoading(true);
    try {

      const result = await apiService.applyLoan(formData);
      setDecisionOutcome(result);
      setLoading(false);

    } catch (error) {

      console.log('error', error)
      setLoading(false);
      toast.error(`Error submitting application`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 5000,
      });
      
    }
  };

  return (
    <div className="app-container">
      <LoanApplicationForm 
        formData={formData} 
        setFormData={setFormData} 
        submitApplication={submitApplication}
        isLoading={isLoading}
         />
        {decisionOutcome && <DecisionOutcome outcome={decisionOutcome} />}
        <ToastContainer />
    </div>
  );
}

export default App;