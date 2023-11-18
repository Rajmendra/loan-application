import React from 'react';

const DecisionOutcome = ({ outcome }) => {
  const isApproved = outcome?.toLowerCase() === 'approved';

  return (
    <div className={`decision-outcome ${isApproved ? 'approved' : 'rejected'}`}>
      <h2>{outcome}</h2>
    </div>
  );
};

export default DecisionOutcome;
