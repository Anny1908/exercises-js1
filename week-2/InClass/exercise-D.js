function estadoDeAnimo(a) {
    if (a == "happy") {
        return `${a} ¡Buen trabajo, lo estás haciendo genial!`;
    } else if (a != "happy") {
        return `${a} Cada nube tiene un rayo de luz`;
    } else if (a = Number) {
        return `${a} Beep beep boop"`;
    } else {
        return `${a} Lo siento, ¡todavía estoy aprendiendo sobre los sentimientos! :´(`;
    }
}

console.log(estadoDeAnimo);