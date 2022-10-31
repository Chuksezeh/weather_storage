db.collection('Tutorial').get().then((snapshot) =>{
    
console.log(snapshot)
}).catch(err =>{
console.log(err);
});