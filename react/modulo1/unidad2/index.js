const mostrarResultado = (resultado) => {
  document.getElementById("resultado").innerHTML = resultado
}

const sumar = () => {
  campo1 = Number(document.getElementById("valor1").value)
  campo2 = Number(document.getElementById("valor2").value)
  mostrarResultado(campo1 + campo2)
}

const restar = () => {
  campo1 = Number(document.getElementById("valor1").value)
  campo2 = Number(document.getElementById("valor2").value)
  mostrarResultado(campo1 - campo2)
}

const multiplicar = () => {
  campo1 = Number(document.getElementById("valor1").value)
  campo2 = Number(document.getElementById("valor2").value)
  mostrarResultado(campo1 * campo2)
}

const dividir = () => {
  campo1 = Number(document.getElementById("valor1").value)
  campo2 = Number(document.getElementById("valor2").value)
  mostrarResultado(campo1 / campo2)
}
