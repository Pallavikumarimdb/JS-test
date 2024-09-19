function getCheese(callback){
    setTimeout(() => {
        const cheese = "cheese";
        console.log(cheese);
        callback(cheese);
        
    }, 2000);
}

function makeDough(cheese, callback){
    setTimeout(() =>{
        const dough=cheese +  "dough";
        console.log(dough);
        callback(dough);
        
    }, 2000);
}

function makePizza(dough, callback){
    setTimeout(() => {
        const pizza = dough + " pizza";
        console.log(pizza);
        callback(pizza);
        
    }, 2000);
}




getCheese((cheese) =>{
    makeDough(cheese, (dough) => {
        makePizza(dough, (pizza) => {
            console.log(pizza);
            
        });
    });
});