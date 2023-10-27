function toggleMode() {
 
  const html = document.documentElement
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  /*
pode usar 
htlm.classList.toogle('light')
*/

  //pegar a imagem
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    // se estiver light mode, add imagem light

    img.setAttribute("src", "./assets/avatar_lightmode.png")
  } else {
    //se estiver sem light, manter a imagem normal
    img.setAttribute("src", "./assets/avatar_darkmode.png")
  }
}
