let nombres = ['Maria', 'Luis', 'Ali', 'Alex', 'Tito', 'MAsiel'];

let otrosNames = ['Carlos', 'Antonia', 'Anna', 'Maria', 'Tito', 'luis'];

console.log(otrosNames.find(name => !nombres.includes(name)));

console.log(otrosNames.filter(name => !nombres.includes(name)));