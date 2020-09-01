/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function test(person) {

    return students.includes(person);
}

var groupIsOnlyStudents = group.every(test); // complete this statement

/* EXPECTED RESULT */

// The group does not contain only students