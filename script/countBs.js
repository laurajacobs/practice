/*Write a function countBs that takes a string as its only argument and returns a number that 
indicates how many uppercase “B” characters are in the string*/

//write a function called countBs thats has an argument string
//write a for loop that loops through the strings length
//if nth character == "B" +1 to the count

function countChar(word, letter){
	var numberOfChars = 0
		for(var counter = 0; counter < word.length; counter++){
			if (word.charAt(counter) === letter){
				numberOfChars += 1;
			}
			
		}
		return numberOfChars;
}

function countBs (word){
	return countChar(word,"B");
}


console.log(countBs("BamBoozled"));
console.log(countChar("kakkerlak", "k"));