//Multiples of 3 and 5//

	var sum = 0;
	for(var i = 0; i < 1000; i++){
		if(i%3 ===0 || i%5 ===0){
			sum += i;
		}
	}
console.log(sum);





//Even Fibonacci Numbers//
function sumFibs(num){
	var prevNum = 0;
	var curNum = 1;
	var result = 0;

	while(curNum <= num){
		if(curNum %2 == 0){
			result += curNum;
		}
		curNum += prevNum;
		prevNum = curNum - prevNum;
	}
	return result;
}






//Largest Prime Factor//
function largestPrime(number){
	var i = 2;
	while(i <= number){
		if(number%i == 0){
			number/= i;
		} else{
			i++;
		}
	}
	console.log(i);
}