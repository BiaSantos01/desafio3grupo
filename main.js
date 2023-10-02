function determinarVencedor() {
  const valorAlice = parseInt(document.getElementById("valorAlice").value);
  const valorBeto = parseInt(document.getElementById("valorBeto").value);
  const valorClara = parseInt(document.getElementById("valorClara").value);

  if (valorAlice != valorBeto && valorAlice != valorClara) {
    document.getElementById("resultado").innerHTML = "A";

  } else if (valorBeto != valorAlice && valorBeto != valorClara) {
    document.getElementById("resultado").innerHTML = "B";

  } else if (valorClara != valorAlice && valorClara != valorBeto) {
    document.getElementById("resultado").innerHTML = "C";

  } else {
    document.getElementById("resultado").innerHTML = "*";
  }
}