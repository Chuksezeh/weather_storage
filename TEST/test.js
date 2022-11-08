const cat = { name : 'controltech', breed : 'Cymric', color : 'white', greeting: function() {
    
    console.log('Meotttuuyuyuw!');

} 


}
console.log(cat)

//Question 1: In this task, your tasks are to 1a)Store the value of the name property inside the catName variable, using bracket notation. 
//1b)Run the greeting() (it will log the greeting to the browser's console). 1c)Update the color property value to black.
// 1
const nameY = {
    name: cat.name
    
 };
 console.log('nameY =>>>>', cat.name );
const fineName = Object.getOwnPropertyDescriptor(nameY, 'name');
//console.log(fineName.value);
 
 //console.log(object.values(nameY))
//  console.log(catName.value)


//  let call = Object.entries(cat)

//  let catName = call.map( ([key, val] = entry) => {
    
//   return `The value of ${key} is ${val}`;
    
  
//  });

//console.log(catName)


 // 2

const greeting = function(){
     cat.value
     

}

greeting();

// Object.key(color).filter(color =>{
//     color[key.color] = 'black'
// })

//catName.greeting();
// 3
 cat.color = 'black'
 console.log(cat);

//document.tags.H1.color = "blue"
//console.log(color.value)