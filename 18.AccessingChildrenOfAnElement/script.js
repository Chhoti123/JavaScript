// console.log(document.body.firstChild)
//firstChild print krni ho to -> console.log(document.body.firstChild) -> that will print div-->


// console.log(document.body.lastChild)   
// lastChild print krni ho to -> console.log(document.body.lastChild) -> that will print script 


// console.log(document.body.childNodes)
// childNodes print krni ho to -> console.log(document.body.childNodes) -> that will print all tag or child of body 


console.log(document.body.childNodes[0])    //  it is basically equal to document.body.firstChild)
console.log(document.body.childNodes[document.body.childNodes.length - 1]);
  //  it is basically equal to document.body.firstChild)

//   console.log(document.body.hasChildNodes)
if(document.body.hasChildNodes){
    console.log(true)
}
else{
    console.log(false)
}
// hasChildNodes basically prints true if body has any child else will print false

console.log(document.body.childNodes) 
console.log(typeof document.body.childNodes)  //object not array its not array only showing data is in array
let arr = Array.from(document.body.childNodes)
console.log(arr)  //now it show in array
