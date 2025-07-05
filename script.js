const diccionario = {
  "hola": "ciao",
  "adiós": "addio",
  "gracias": "grazie",
  "por favor": "per favore",
  "buenos días": "buongiorno",
  "buenas noches": "buona notte",
  "sí": "sì",
  "no": "no",
  "cómo estás": "come stai",
  "estoy bien": "sto bene",
  "te quiero": "ti amo"
};

document.getElementById("translateBtn").onclick = () => {
  const input = document.getElementById("inputText").value.toLowerCase().trim();
  const resultado = diccionario[input];

  document.getElementById("outputText").innerText = resultado
    ? resultado
    : "Traducción no disponible.";
};
