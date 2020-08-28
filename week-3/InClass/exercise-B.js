//Usa la variedad de personas de tu clase
//Combínalo con otra matriz llena con los nombres de otra clase
//console.log los nombres en orden alfabético
//Cree una función que tome una name y una matriz de nombres y devuelva una cadena. Si el nombre no está en una matriz, debería regresar . Si el nombre está en la matriz, debería regresar .<name> is not at the class with <people in the array><name> is at the class with <people in the array>

const student = ["Ann", "Luis", "Alfredo", "Ali", "Princes", "Leonor", "Alany", ];

const otrosStudent = ["Anny", "Pedro", "Gloria", "Ana", "Daniel", "Jose", ];

const todosStuden = student.concat(otrosStudent).sort();
console.log(todosStuden);

function nombres(name) {

    if (todosStuden.includes(name)) {

        console.log(name + " El Student si esta en la clase");
    } else {
        console.log(name + " El Student no esta en la clase");
    }
}
nombres("Pedro");