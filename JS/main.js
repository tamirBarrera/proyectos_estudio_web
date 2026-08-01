
setTimeout(() => {
    alert('Si tiene problemas, presione el boton "Instrucciones"')
}, 30000);

let cantidadNotas = 0;

let contador = 0;

let notas = [];

let tabla = document.getElementById("tablaNotas");


function verde1() {
    document.querySelector("#btnMenuSoporte1").style = "color: white; background-color: green;";
}


function verde2() {
    document.querySelector("#btnMenuSoporte2").style = "color: white; background-color: green;";
}


function verde3() {
    document.querySelector("#btnMenuSoporte3").style = "color: white; background-color: green;";
}


function btnReset() {
    document.querySelector("#btnMenuSoporte1").style = "color: black; background-color: #eff9cf;";
    document.querySelector("#btnMenuSoporte2").style = "color: black; background-color: #eff9cf;";
    document.querySelector("#btnMenuSoporte3").style = "color: black; background-color: #eff9cf;";
}


function guardarCantidad() {

    document.getElementById("resultado").value = "";
    document.getElementById("btnResultado").disabled = true;
    btnResultado.classList.remove("azul");
    btnResultado.classList.add("rojo");

    tabla.innerHTML = "";

    cantidadNotas = Number(
        document.getElementById("cantidadNotas").value
    );

    if (!validarCantidad(cantidadNotas)) {
        return;
    }

    // oculta la tabla
    document.getElementById("tablaNotas").style.display = "none";

    if (validarCantidad(cantidadNotas)) {
        crearTabla(cantidadNotas);
    }

    contador = 0;
    notas = [];

    document.getElementById("btnAgregar").disabled = false;

    btnAgregar.classList.remove("rojo");
    btnAgregar.classList.add("azul");

}


function validarCantidad(cantidadNotas) {
    if (isNaN(cantidadNotas) || cantidadNotas <= 0 || cantidadNotas > 37) {

        alert("Ingrese una cantidad válida.");
        return false;
    }
    return true;

}


function crearTabla(cantidadNotas) {

    const tabla = document.getElementById("tablaNotas");
    let encabezado = document.createElement("tr");
    let fila = document.createElement("tr");

    for (let i = 1; i <= cantidadNotas; i++) {

        let th = document.createElement("th");
        th.textContent = "Nota " + "º                                                                                                                                                                                                                       " + i;
        encabezado.appendChild(th);
    }

    for (let i = 1; i <= cantidadNotas; i++) {

        let td = document.createElement("td");
        td.id = "nota" + i;
        td.textContent = "";

        fila.appendChild(td);
    }
    tabla.appendChild(encabezado);
    tabla.appendChild(fila);
}


function mostrarTabla() {
    document.getElementById("tablaNotas").style.display = "table";
}


function mostrarSaludo() {
    const nombreDeUsuario = document.getElementById("nombreUsuario").value;

    alert("Hola!! " + nombreDeUsuario + ", " + "Bienvenido al Contador de Notas Académico");
}


function mostrarInstructivo() {
    document.getElementById("instructivo").classList.toggle("oculto");
}



// agregar notas mediante una condición, .push, input y un button

function agregarNota() {

    let celda = document.getElementById("nota" + (contador + 1));

    let nota = Number(document.getElementById("nota").value);

    if (isNaN(nota) || nota <= 0 || nota > 10) {

        alert("Nota inválida.");

        return;

    }
    if (contador === 0) {
        mostrarTabla();
    }

    notas.push(nota);

    contador++;

    document.getElementById("nota").value = "";

    celda.textContent = nota;

    if (notas.length === cantidadNotas) {

        document.getElementById("btnAgregar").disabled = true;
        btnAgregar.classList.remove("azul");
        btnAgregar.classList.add("rojo")

        document.getElementById("btnResultado").disabled = false;
        btnResultado.classList.remove("rojo");
        btnResultado.classList.add("azul");
    }

}

// Calcular promedio

function calcularPromedio() {

    let suma = 0;

    for (let i = 0; i < notas.length; i++) {

        suma += notas[i];

    }

    return suma / notas.length;

}



// Evaluar estado de alumno

function evaluarNota(promedio) {

    let notaBaja = false;

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] <= 3) {

            notaBaja = true;

        }

    }

    if (promedio >= 6) {

        return "APROBADO";

    } else {

        if (notaBaja) {

            return "NO APROBADO";

        } else {

            return "A RECUPERATORIO";

        }

    }

}



// Mostrar resultado

function mostrarResultado() {

    let promedio = calcularPromedio();

    let estado = evaluarNota(promedio);

    document.getElementById("resultado").value =
        "Promedio: " + promedio.toFixed(2) +
        " Estado: " + estado;

}


