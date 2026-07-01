// src/utils.js
function calculateTotalInterest(investments) {
  let totalInterest = 0;

  for (const investment of investments) {
    totalInterest += investment.amount * (investment.rate / 100) * investment.years;
  }
  return totalInterest;
}
module.exports = { calculateTotalInterest };