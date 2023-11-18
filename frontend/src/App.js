// frontend/src/App.js
import React, { useState } from 'react';
import './App.css';
import LoanApplicationForm from './components/LoanApplicationForm';
import DecisionOutcome from './components/DecisionOutcome';

function App() {
  const [formData, setFormData] = useState({
    businessDetails: {},
    loanAmount: 0,
    accountingProvider: '',
  });
  const [decisionOutcome, setDecisionOutcome] = useState(null);

  const submitApplication = async () => {
    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:3001/apply-loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      // Set the decision outcome in the state
      setDecisionOutcome(result);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="app-container">
      <LoanApplicationForm formData={formData} setFormData={setFormData} submitApplication={submitApplication} />
        {decisionOutcome && <DecisionOutcome outcome={decisionOutcome} />}
    </div>
  );
}

export default App;