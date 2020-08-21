function validacion(username, typeOfUser) {

    if (username.toUpperCase() == username && username.length >= 5 && username.length <= 10) {

        return "ussername valid";
    } else {
        return "ussername invalid";
    }

}

console.log(validacion("ALA", "admin"));

function prof(typeOfUser) {

    if (typeOfUser == "admin" || typeOfUser == "manager") {

        return "ussername valid";
    }

}

console.log(prof("admin"));