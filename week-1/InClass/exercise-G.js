let PorcDeEstudents = 33;

let PorcDeMentors = 11;

let total = PorcDeEstudents + PorcDeMentors;

PorcDeEstudents = Math.round((100 * PorcDeEstudents) / total);
PorcDeMentors = Math.round((100 * PorcDeMentors) / total);

console.log("Percentaje of students:  " + PorcDeEstudents + "%");
console.log("Percentaje of mentors:  " + PorcDeMentors + "%");