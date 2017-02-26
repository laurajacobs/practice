/*Define a recursive function isEven corresponding to this description. 
The function should accept a number parameter and return a Boolean*/

//write a function that takes a number argument called isEven
//if number == 0 return boolean value TURE
//if number == 1 return boolean value false
//if any other number keep -2 until one of the above is reached. so return isEVEN

function isEven (number){
	if(number == 0){
		return true;
	}else if (number == 1){
		return false;
	}else{
		return number < 0 ? isEven(number +2): isEven(number -2);
	}

}
console.log(isEven(-2));
console.log(isEven(75));
console.log(isEven(50));
