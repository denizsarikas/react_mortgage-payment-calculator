import { useState } from 'react';
import InputField from './InputField';

const Calculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [loanTerm, setLoanTerm] = useState('');

  const [monthlyPayment, setMonthlyPayment] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    if (!loanAmount || !interestRate || !loanTerm) {
      setError('All fields are required');
      return;
    }

    const P = parseFloat(loanAmount);
    const i = parseFloat(interestRate) / 100 / 12;
    const n = parseFloat(loanTerm) * 12;

    if (isNaN(P) || isNaN(i) || isNaN(n)) {
      setError('Please enter valid numbers');
      return;
    }

    const numerator = P * (i * Math.pow(1 + i, n));
    const denominator = Math.pow(1 + i, n) - 1;
    const result = numerator / denominator;

    setMonthlyPayment(result.toFixed(2));
    setError('');
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded shadow">
      <InputField label="Loan amount ($)" value={loanAmount} onChange={(e) => setLoanAmount(e.target.value)} error={error} />
      <InputField label="Annual interest rate (%)" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} error={error} />
      <InputField label="Loan term (in years)" value={loanTerm} onChange={(e) => setLoanTerm(e.target.value)} error={error} />

      <button className="mt-4 bg-blue-500 text-white p-2 rounded w-full" onClick={handleCalculate}>
        Calculate
      </button>

      {monthlyPayment && (
        <p className="mt-4">Monthly mortgage payment: ${monthlyPayment}</p>
      )}
    </div>
  );
};

export default Calculator;