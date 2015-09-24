var small;
var medium;
var large;

var pizza = function(variety) {
  this.variety = variety;
};

var setNormalPrice = function() {
  small = 10;
  medium = 14;
  large = 20;
};

var setHappyHourPrice = function() {
  small = 7;
  medium = 11;
  large = 15;
};

var getTotalPrice = function(quantity, price) {
  return quantity * price;
}













//
// pizza.prototype.toppingCheck = function() {
//     if(this.topping === "pepperoni") {
//       pizzaToppings.push("pepperoni");
//   } if (this.topping === "jalapenos") {
//       pizzaToppings.push("jalapenos");
//   } if (this.topping === "banana peppers") {
//       pizzaToppings.push("banana peppers");
//   } if (this.topping === "bacon") {
//       pizzaToppings.push("bacon");
//   } if (this.topping === "pineapple") {
//       pizzaToppings.push("pineapple");
//   }
// }
//   return pizzaToppings;
//
// }
