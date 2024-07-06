function makeTransaction(quantity, pricePerDroid) {
    let totalPrice = quantity * pricePerDroid;
    return console.log(`You ordered ${quantity} droids worth ${totalPrice}!`);
}

makeTransaction(5, 3000);
makeTransaction(3, 1000);
makeTransaction(10, 500);
