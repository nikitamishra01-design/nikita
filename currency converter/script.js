
function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (isNaN(amount) || amount <= 0) {
    document.getElementById("result").innerText = "Please enter a valid amount.";
    return;
  }

  const rates = {
    USD: { INR: 83, EUR: 0.91 },
    INR: { USD: 0.012, EUR: 0.011 },
    EUR: { USD: 1.10, INR: 90 }
  };

  if (from === to) {
    document.getElementById("result").innerText = `${amount} ${from} = ${amount} ${to}`;
    return;
  }

  if (!rates[from] || !rates[from][to]) {
    document.getElementById("result").innerText = "Conversion rate not available.";
    return;
  }

  const rate = rates[from][to];
  const result = (amount * rate).toFixed(2);

  document.getElementById("result").innerText = `${amount} ${from} = ${result} ${to}`;
}
