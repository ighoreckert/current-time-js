function carregar() {
  var msg = document.getElementById("msg");
  var img = document.getElementById("imagem");
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  // var hora = 0; // para forçar a hora
  msg.innerHTML = `Agora são ${hora}:${min}h.`;

  if (hora >= 0 && hora < 6) {
    img.src = "fotomadrugada.png";
    document.body.style.background = "#131721";
    //  Boa madrugada!
  } else if (hora >= 6 && hora < 12) {
    img.src = "fotomanha.png";
    document.body.style.background = "#FDCF43";
    // Bom dia!
  } else if (hora >= 12 && hora < 18) {
    img.src = "fototarde.png";
    document.body.style.background = "#5B2A0F";
    // Boa tarde!
  } else {
    img.src = "fotonoite.png";
    document.body.style.background = "#1A3A40";
    // Boa noite!
  }
}
