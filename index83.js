let star = '******************************';
let result = ' ';
let count = 0;

do {
    console.log(star.substr(0, star.length -count));
    count = count + 1;

} while(count <= star.length)