//Crea una matriz con los nombres de las personas en tu mesa
//console.log saber los nombres y cuántas personas hay en la mesa
//Pon a alguien de otra tabla al principio de la matriz
//Agrega a alguien más al final de la lista.


const student = ["Ann", "Luis", "Alfredo", "Ali", "Princes", "Leonor", "Alany", ];

console.log(student);

const nvoStudent = student.unshift("Claudia");
console.log(student + nvoStudent);

const ultimStudent = student.push("Sergio");

console.log(ultimStudent);