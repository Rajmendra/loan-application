const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const accountingPlugin = require('./plugins/accounting');
const decisionEnginePlugin = require('./plugins/decisionEngine');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


app.get('/apply-loan', (req, res) => {
  
  res.json({"me":"asdsdds"});
});

app.post('/apply-loan', (req, res) => {
  const { businessDetails, loanAmount, accountingProvider } = req.body;

  // Use accounting plugin to simulate fetching balance sheet
  const balanceSheet = accountingPlugin.simulateAccountingSoftware();

  // Use decision engine plugin to apply rules and get decision outcome
  const processedDetails = {
    ...businessDetails,
    balanceSheet,
    loanAmount,
    accountingProvider
  };

  const decisionOutcome = decisionEnginePlugin.applyDecisionRules(processedDetails);

  res.json(decisionOutcome);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
