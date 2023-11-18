
const { calculateProfitLossByYear } = require('../utils/utils');

const applyDecisionRules = (businessDetails) => {
    
  // Apply rules and return the outcome
  // This is a simplified example; actual rules would be more complex
  let preAssessment = 20;

  // Rule 1: If a business has made a profit in the last 12 months
  if (businessDetails.balanceSheet.some(entry => entry.profitOrLoss > 0)) {
    preAssessment = 60;
  }

  // Rule 2: If the average asset value across 12 months is greater than the loan amount
  const avgAssetValue = businessDetails.balanceSheet.reduce((sum, entry) => sum + entry.assetsValue, 0) / businessDetails.balanceSheet.length;
  if (avgAssetValue > businessDetails.loanAmount) {
    preAssessment = 100;
  }

  // Extract minimum details
  const { name, yearEstablished, balanceSheet } = businessDetails;
  const profitLossSummary = calculateProfitLossByYear(balanceSheet);

  ////////////////////////////////////////////////////////////////////////////////////
  // Call the actual decision engin api or implement custom logic for decision engin
  ////////////////////////////////////////////////////////////////////////////////////
  // const decisionEnginParams = {
  //   businessDetails: {
  //     name,
  //     yearEstablished,
  //     profitLossSummary,
  //   },
  //   preAssessment,
  // };
  // return decisionEngineAPI(decisionEnginParams);

  return "We will let you know after the verification";
  };
  
  module.exports = { applyDecisionRules };