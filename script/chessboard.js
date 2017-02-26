v//define an x number
//define a y number
//write a for loop that represents x and within this loops y
//once y hits 8 new line
//then check is x is % by 2
//if true print hashtag
//else print space

var board = "";
for (var x = 0; x <8; x++){
			for(var y = 0; y <8; y++){
      if ((x+ y) % 2 == 0){
      	board += "#";
        } else {
        board += "   ";
        }
      }
     board += "\n"; 
	};
  
console.log(board);