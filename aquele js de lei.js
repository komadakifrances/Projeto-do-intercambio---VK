function mostrarOcultarDiv1() {
    var div = document.getElementById("contextodiv");
    var button = document.querySelector("button");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        button.textContent = "Fechar";
    } else {
        div.style.display = "none";
        button.textContent = "Ver introdução";
    }
}

function mostrarOcultarDiv2() {
    var div = document.getElementById("descarte");
    var button = document.querySelector("button");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        button.textContent = "Fechar";
    } else {
        div.style.display = "none";
        button.textContent = "Ver informações e opiniões sobre o descarte de lixo";
    }
}


function mostrarOcultarDiv3() {
    var div = document.getElementById("incentivo");
    var button = document.querySelector("incentivoB");
    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block";
        button.textContent = "Fechar";
    } else {
        div.style.display = "none";
        button.textContent = "Ver o que mudou para o incentivo";
    }
}