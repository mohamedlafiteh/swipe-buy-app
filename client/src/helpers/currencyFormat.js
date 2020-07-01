export default {
  currencyFormat: function(price) {
    let number = Number(price);
    return "£" + number.toFixed(2).toLocaleString() + " ";
  }
};
