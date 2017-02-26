function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
  	var result = power(base, exponent - 1);
  	var returnVal = base * result;
    return returnVal;
}

console.log(power(2, 3));