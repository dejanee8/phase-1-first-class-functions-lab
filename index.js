// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

function returnFirstTwoDrivers() {
    return (['Antonia', 'Nuru']);
}
 function returnLastTwoDrivers() {
    return (['Amari', 'Mo']);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


 function  createFareMultiplier(num1) {
return function (num2) {
   return num1 * num2;
}
}
function fareDoubler(num1) {
return num1 * 2;
}
function fareTripler(num1) {
return num1 * 3;
}
function selectDifferentDrivers(arrayOfDrivers, fn) {
    return fn()
}