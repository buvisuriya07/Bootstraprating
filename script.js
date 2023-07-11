// Rating according to value given
function setRating(value) {
    var ratingElement = document.getElementById("rating");
    ratingElement.innerHTML = value + "/5";
}

// Disable add to cart button when added to cart
function addToCart(itemId) {
    var addToCartButton = document.getElementById("addToCartButton-" + itemId);
    var removeFromCartButton = document.getElementById("removeFromCartButton-" + itemId);

    addToCartButton.disabled = true;
    removeFromCartButton.disabled = false;
}

// Remove item from cart & enable add to cart
function removeFromCart(itemId) {
    var addToCartButton = document.getElementById("addToCartButton-" + itemId);
    var removeFromCartButton = document.getElementById("removeFromCartButton-" + itemId);

    addToCartButton.disabled = false;
    removeFromCartButton.disabled = true;
}
