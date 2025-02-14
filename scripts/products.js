document.addEventListener("DOMContentLoaded", () => {
    const productCards = document.querySelectorAll(".product-card");

    productCards.forEach(card => {
        card.addEventListener("click", () => {
            alert(`You clicked on ${card.dataset.name}`);
        });
    });
});
