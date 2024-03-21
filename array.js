
// 1

let array = [3,7,34,90,12];
let last = array[array.length-1];
console.log(last);

const arr2 = [true, "green", "where", 12, 56];
const findElement = arr2[arr2.length-1];
console.log(findElement);

// 2
let myPets = ["cow", "bird", "snake", "dog"];
let stringmyPets = myPets.join();
console.log(stringmyPets);

// 3
let arr3 = [-5,9,5,3,2,-3,6,8,4];
let itemvar = arr3.sort();
console.log(itemvar);

// 4
 var arr = ["apple","mango","apple","orange","mango","mango"];
 function removeDuplicate(data){
    return data.filter((value,index)=> data.indexOf(value)===index);
 }
   console.log(removeDuplicate(arr));

   // 6
   let word = (string) => {
    return string.split("").sort().join("")

   }
   console.log(word("sevink"));

   // 5
   let arr5 = ["the", "way", "x",4]
   arr5.forEach(word =>{
  if(word== 'way'){
    console.log(word)
  }
  else{
    console.log('the search was not found')
  }
   })




   

