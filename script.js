document.addEventListener("DOMContentLoaded", () => {
    loadSavedAmounts();
});

function saveAmount() {
    const amountInput = document.getElementById("amount");
    const amount = parseFloat(amountInput.value);
    if (isNaN(amount) || amount <= 0) return;

    let savedAmounts = JSON.parse(localStorage.getItem("savedAmounts")) || [];
    savedAmounts.push(amount);
    localStorage.setItem("savedAmounts", JSON.stringify(savedAmounts));

    amountInput.value = "";
    displaySavedAmounts();
    displayTotalSaved();
}

function loadSavedAmounts() {
    displaySavedAmounts();
    displayTotalSaved();
}

function displaySavedAmounts() {
    const savedAmountsDiv = document.getElementById("saved-amounts");
    let savedAmounts = JSON.parse(localStorage.getItem("savedAmounts")) || [];
    savedAmountsDiv.innerHTML = savedAmounts.join("<br>");
}

function displayTotalSaved() {
    const totalSavedDiv = document.getElementById("total-saved");
    let savedAmounts = JSON.parse(localStorage.getItem("savedAmounts")) || [];
    const total = savedAmounts.reduce((sum, amount) => sum + amount, 0);
    totalSavedDiv.textContent = total.toFixed(2);
}
