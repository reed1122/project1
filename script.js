// script.js
const buyButtons = document.querySelectorAll(".buy-button");

function handleBuyClick() {
    const confirmation = confirm("Are you sure you want to buy this PC?");
    if (confirmation) {
        alert("Thank you for your purchase!");
    }
}

buyButtons.forEach(button => {
    button.addEventListener("click", handleBuyClick);
});
