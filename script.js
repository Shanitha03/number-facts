function getFact() {
  const number = document.getElementById("numberInput").value;
  fetch(`http://numbersapi.com/${number}`)
    .then(response => response.text())
    .then(fact => {
      document.getElementById("factText").textContent = fact;
    });
}
