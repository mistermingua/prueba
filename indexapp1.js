let ContadorScript = document.getElementById("titulo")
let SaveScript = document.getElementById("Guardar")
let HistorialScript = document.getElementById("Datos")
let count = 0
let salvar = 0
let historial = 0
function primera(){
    count = count + 1
    numero.textContent = count
}
function saveTotal(){
    salvar = count + salvar
    Guardar.textContent = salvar

}
function saveHistorial(){
    historial = count + " - "
    Datos.textContent = Datos.textContent + historial 
    numero.textContent = 0
    count = 0

}

