const monthNumber = 5;
let monthName = null;
let monthDays = null;
let message = null;

switch(monthNumber) {
    case 1:
        monthName = 'January';
        monthDays = '31 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 2:
        monthName = 'February';
        monthDays = '28 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 3:
        monthName = 'March';
        monthDays = '31 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 4:
        monthName = 'April';
        monthDays = '30 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 5:
        monthName = 'May';
        monthDays = '31 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 6:
        monthName = 'June';
        monthDays = '30 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 7:
        monthName = 'July';
        monthDays = '31 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 8:
        monthName = 'August';
        monthDays = '31 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 9:
        monthName = 'September';
        monthDays = '30 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 10:
        monthName = 'October';
        monthDays = '30 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 11:
        monthName = 'November';
        monthDays = '30 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    case 12:
        monthName = 'December';
        monthDays = '31 days';
        message = `${monthName} is the selected month and has ${monthDays}`;
        break;
    default:
        monthName = null;
        monthDays = null;
        message = 'Error: Please select a number from 1 to 12';
}

console.log(message);

