import React from 'react';

const DecisionOutcome = ({ outcome }) => {

  const isApproved = outcome?.toLowerCase() === "approved";
  return (
    <div className={`decision-outcome ${isApproved ? 'decision-outcome-green' : 'decision-outcome-red'}`}>
      <h2>{outcome}</h2>
    </div>
  );
};

export default DecisionOutcome;