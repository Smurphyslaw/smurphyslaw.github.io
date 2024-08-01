document.addEventListener("DOMContentLoaded", () => {
    loadSavedAmounts();
});

function saveAmount() {
    const amountInput = document.getElementById("amount");
    const amount = amountInput.value;
    if (amount === "") return;

    let savedAmounts = JSON.parse(localStorage.getItem("savedAmounts")) || [];
    savedAmounts.push(amount);
    localStorage.setItem("savedAmounts", JSON.stringify(savedAmounts));

    amountInput.value = "";
    displaySavedAmounts();
}

function loadSavedAmounts() {
    displaySavedAmounts();
}

function displaySavedAmounts() {
    const savedAmountsDiv = document.getElementById("saved-amounts");
    let savedAmounts = JSON.parse(localStorage.getItem("savedAmounts")) || [];
    savedAmountsDiv.innerHTML = savedAmounts.join("<br>");
}
