// let marks = [12,23,'34','66','hi', false]
// marks[6] = 89; // adding new value
// marks[6] = 8; // changing value new value
// console.log(marks)
// console.log(marks[0])
// console.log(marks[1])
// console.log(marks[2])
// console.log(marks[3])
// console.log(marks[4])
// console.log(marks[5])
// console.log(marks[6])
// console.log(marks.length)
// //alt+shift+bottom same data niche copy ho jayenge
// // ======================= array methods ==================================
// //1. toString
// let text = [1,3,8,9]
// console.log(typeof text)
// console.log( text.toString())
// console.log( typeof(text.toString()))

// //2.join
// let c = text.join("*")
// console.log(c)

// //3.pop // pop data one by one from last
// console.log( text.pop())
// console.log( text.pop(1))
// console.log( text.pop(2))

//4. push
// let array = [7,9,6]
// let ex = array.push(11)
// console.log(array,ex)

//5.shift        extracts an item from the beginning,
// console.log(array.shift())
// console.log(array.shift(2))

//6. unshift
// let array = [7,9,6]
// let r = array.unshift(2);
// console.log(array)


//7. delete
// let array = [7,9,6];
//  delete array[1]
// console.log(array)

//8.concat
// let array1 = [7,9,6];
// let array2= [5,9,2];
// let array3= [5,9,2];
// let array4= [5,9,2];
// let final = array1.concat(array2,array2,array2);
// console.log(final)

//9.sort
// let array1 = [7,9,6,5,9,2,5,9,2];
// let comp = (a,b) =>{
//     return b - a;
// }
// array1.sort(comp);
// // array1.sort()
// console.log(array1)

//10. reverse
// let array1 = [7,9,6,5,9,2,5,9,2];
// array1.reverse();
// console.log(array1)

//11. splice and slice
// let array1 = [7,9,6,5,9,2,5,9,2];
// array1.splice(2,4,1010,1020,1030,1040)  //(index kha se remove krna h, kitte index(data) remove krna h, jitte bhi data add krne h wo likho)
// console.log(array1)

//slice
// let array = [7,9,6,5,9,2,5,9,2];
// let newArray = array.slice(3)              // this needs to write in new array actual me changes or modification  ni krta.
// console.log(newArray)

