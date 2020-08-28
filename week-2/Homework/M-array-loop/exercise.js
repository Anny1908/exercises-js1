/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

for (let i = 0; i <= 6; i++) {

    if (daysOfWeek[i].startsWith("T", 0)) {
        const diaSemana = "Nom is: " + daysOfWeek[i];
        console.log(diaSemana);
    }

}