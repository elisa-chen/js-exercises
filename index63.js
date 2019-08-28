const year = 2015;
let champion = null;

switch (year) {
    case 2006:
        champion = 'Carolina Hurricanes';
        message = `${champion} was the ${year} NHL Champion`;
    break;
    case 2007:
        champion = 'Anaheim Ducks';
        message = `${champion} was the ${year} NHL Champion`;
    break;
    case 2008:
        champion = 'Detroit Red Wings';
        message = `${champion} was the ${year} NHL Champion`;
    break;
    case 2009:
        champion = 'Pittsburgh Penguinas';
        message = `${champion} was the ${year} NHL Champion`;
    break;
    case 2010:
        champion = 'Chicago Blackhawks';
        message = `${champion} was the ${year} NHL Champion`;
    break;
    case 2011:
        champion = 'Boston Bruins';
        message = `${champion} was the ${year} NHL Champion`;
    case 2012:
        champion = 'Los Angeles Kings';
        message = `${champion} was the ${year} NHL Champion`;       
    default:
        message = 'Sorry, please try a different year';
}

console.log(message);




