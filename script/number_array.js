function range(start, end, step) {
  var counter = 0;
  var numbers = [];
  if (step == null) {
    step = 1;
  }
  if (step > 0) {
    for (counter = start; counter <= end; counter += step) {
      numbers.push(counter)
    }
  } else {
    for (counter = start; counter >= end; counter += step) {
      numbers.push(counter)
    }
  }
  return numbers;
}


var numbers = range(10, 1);

console.log(numbers);

var totalAmount = numbers.reduce(function(sum, counter) {
  return sum + counter;
})


console.log(totalAmount);