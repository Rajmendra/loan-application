const calculateProfitLossByYear = (data) => {
    return data.reduce((acc, entry) => {
      const { year, profitOrLoss } = entry;
      const existingEntry = acc.find(item => item.year === year);
  
      if (existingEntry) {
        existingEntry.profitLoss += profitOrLoss;
      } else {
        acc.push({ year, profitLoss: profitOrLoss });
      }
  
      return acc;
    }, []);
  };
  
  module.exports = { calculateProfitLossByYear };