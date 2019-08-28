const iceCreamFlavors = ['chocolate', 'vanilla', 'pistachio', 'bubblegum', 'strawberry', 'creamsicle', 'caramel', 'orange', 'green tea', 'mint'];

let removedArray = [];

for (let i=0; i < 4; i++) {
    removedArray.push(iceCreamFlavors.pop());
}

console.log(iceCreamFlavors);
console.log(removedArray);

