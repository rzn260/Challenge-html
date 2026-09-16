//exo1
let rawprice = 100;
let vat = rawprice * 18.5 / 100;
let finalprice = rawprice + vat;
console.log("Le prix final est:",finalprice)

//exo2
 let number=5;
 for( let i=1; i<=10; i++){
      console.log(number + "x" + i + "=" + number * i);
   }
 if(number >= 2 && number <=9){
   for(let i = 1; i<=10; i++){
      console.log(number + "x" + i + "=" + number * i)
   }
 }else{
   console.log("les nombres doit etre entre 2 et 9")
 }
 
 //exo3
const values = [3,11,7,2,9,10];
let sum = 0;
for (let value of values){
   sum += value;
}
console.log("la somme est:",sum)
function average(array){
   let sum = 0;
   for (let value of array){
      sum+=value;
   }
   return sum / array.length;
}
function maximum(array){
   let max = array[0]
   for (let value of array){
      if (value > max){
         max = value;
      }
   }
   return max;  
}
function minimum(array){
   let min = array[0];
   for(let value of array){
      if(value < min){
         min = value;
      }
   }
   return min;
}
console.log(average(values));
console.log(maximum(values));
console.log(minimum(values));

//exo4
let celsius=20;
let fahrenheit = celsius * 9/5 + 32;
console.log("la temperature de 20°C en Fahrenheit est :",fahrenheit)
function FahrenheitToCelsius(fahrenheit){
   return (fahrenheit - 32)/ 9 * 5;
}
console.log("La temperature en Fahrenheit est:" + FahrenheitToCelsius(68))

//exo5
function ReverseString(string){
   let reversed=""
   for(let i= string.length-1; i>=0; i--){
      reversed = reversed + string[i];
   }
   return reversed;
}
console.log(ReverseString("hello"))

//exo6
function CountVowels(string){
   let count = 0;
      for (let character of string){
         if("aeiou".includes(character)){
            count++;
         }
      }
      return count;
}
console.log(CountVowels("Hello World"));
