//Cree una función que tome a birthYeary devuelva la edad de alguien
//Se le da una matriz con año en que nacieron 7 personas, 
//[1964, 2008, 1999, 2005, 1978, 1985, 1919]. Tome esta matriz y cree otra matriz que contenga sus edades.
//console.log la matriz de años de nacimiento

function birthYeary(edad) {

    let años = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

    console.log(años - 2020, +birthYeary());

}

//// ojo leer estoç
let years = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let date = new Date().getFullYear();

function birthYear(year) {
    return date - year;
}
let edad = years.map(birthYear);
console.log(edad);
console.log(years);
years.forEach(el => console.log(el));