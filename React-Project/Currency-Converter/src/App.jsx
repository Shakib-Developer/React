import {useEffect, useState} from 'react';

const App = () => {

  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("EUR");
  const [toCur, setToCur] = useState("USD");
  const [convert, setConvert] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(
    function () {
      async function convert () {  

        setLoading(true);
        const respons = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`);
        const data = await respons.json();
        setConvert(data.rates[toCur]);
        setLoading(false);

      }

      if(fromCur === toCur) return setConvert(amount);
      convert();
    },
    [amount, fromCur, toCur]
  );

  return (
    <div>

      <input type="text" value={amount} onChange={(e) => setAmount(Number(e.target.value))} disabled={loading} />

      <select value={fromCur} onChange={(e) => setFromCur(e.target.value)} disabled={loading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="BDT">BDT</option>
      </select>

      <select value={toCur} onChange={(e) => setToCur(e.target.value)} disabled={loading}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="INR">INR</option>
        <option value="BDT">BDT</option>
      </select>

      <p>{convert} {toCur}</p>
      
    </div>
  );
}

export default App;