
function Person(firstName, lastName) {
  var fstName = firstName;
  var lstName = lastName;
  
  this.setFirstName = function(firstName) { 
      fstName = firstName; 
  };

  this.getFirstName = function() {
      return fstName; 
  };
  
  this.setLastName = function(lastName) { 
      lstName = lastName; 
  };

  this.getLastName = function() { 
      return lstName; 
  };
}

var person1 = new Person('Khoa', 'Nguyen');
console.log(person1.fstName); // Undefined, không thể truy cập được


console.log(person1.getFirstName()); // Khoa


// Hàm này dùng để xử lý khởi tạo
function initProduct(name, price) {
    this.name = name;
    this.price = price;
  //this = initProduct
}

// call(this, p1,p2, ...)
function Food(name, price) {
    // Khởi tạo
    // biến this chính là Food, vì vậy sau khi chạy xong đối tượng Food sẽ có hai
    // thuộc tính là name và price
    initProduct.call(this, name, price);
}
 
function Hat(name, price) {
    // Khởi tạo
    // biến this chính là Food, vì vậy sau khi chạy xong đối tượng Food sẽ có hai
    // thuộc tính là name và price
    initProduct.call(this, name, price);
}
// apply(this, [p1, p2, ,,,])
 
 
var food = new Food('Trái xoài', 5);
var hat = new Food('Cái mũ', 6);
 
console.log(food);
console.log(hat);
