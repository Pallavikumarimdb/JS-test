
function getCheese(){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            const cheese="cheese";
            resolve(cheese);
        }, 2000);
    });
}


function makeDough(cheese) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dough = cheese+"dough";
            resolve(dough);
        }, 2000);

    });
}


function makepizz(dough) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const pizza = dough+"pizza";
            resolve(pizza);
            // reject("bad dough");
        }, 2000);

    });
}


getCheese().then((cheese) => {
    console.log(cheese);
    return makeDough(cheese);
    
})
.then((dough) => {
    return makepizz(dough);
})
.then((pizza) => {
    console.log(pizza);
    
})


async function orderPizza() {
    const cheese =await getCheese();

    const dough = await makeDough(cheese);
    
}