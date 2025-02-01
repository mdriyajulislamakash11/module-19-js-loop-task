// task 1
/***
"I will invest at least 6 hrs every single day for next 60 days!" this message 60 times. So display this.
 */
/*programming hero*/

let number = 1;
while (number <= 60) {
      console.log(number, "I will invest at least 6 hrs every single day for next 60 days!")
      number++;
}




//task 2
/***
Subtask-1:
Find all the odd numbers from 61 to 100.

/***
 * 
Subtask-2:
Find all the even numbers from 78 to 98.
/*programming hero*/

// 1
let odd = 61;
while (odd <= 100) {
      if (odd % 2 === 1) {
            console.log(odd)
      }
      odd++;
}

//2
let even = 78;
while (even <= 98) {
      if (even % 2 === 0) {
            console.log("the even number: ", even)
      }

      even++;
}






//task 3
/***
Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
let numbers = 81;
let sum = 0;

while(numbers <= 131){
      if(numbers % 2 === 1){
            sum = sum + numbers;
      }
      numbers++;
}
console.log(sum)

/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

let evenNum = 206;
let sumOfEven = 0;

while(evenNum <= 311){
      if(evenNum % 2 === 0){
            console.log(evenNum)
            sumOfEven = sumOfEven + evenNum;
      }

      evenNum++;
}
console.log(sumOfEven)
/*programming hero*/










// task 4
/***

As Ersa is learning now, she wants to explore more and more.
 Tell Ersa to generate a multiplication table for number 5
 */
 let numberss = 5;
 let i = 1;
 
 while (i <= 10) {
     console.log(numberss * i);
     i++;
 }
 

/*programming hero*/