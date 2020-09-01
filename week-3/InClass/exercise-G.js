let anios = [1964, 2008, 1999, 2005, 1978, 1985, 1919, 2010, 2015];

function calcularEdad(anio) {

    return 2020 - anio >= 17;
}

let edades = anios.filter(anio => 2020 - anio >= 17);

console.log(edades);