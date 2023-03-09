

import dataHora from './modules/dataHora.js';
import menuMobile from './modules/menu-mobile.js';
import validarContato from './modules/validarContato.js';



const linksInternos = document.querySelectorAll('a[href^="#"]')

function scrollSuave(e){
  e.preventDefault()
  const href = e.target.getAttribute('href')
  const areaSite = document.querySelector(href)
  
  areaSite.scrollIntoView({
    block: "start",
    behavior: "smooth"
  })
}

linksInternos.forEach((item)=>{
  item.addEventListener('click',scrollSuave)
})

menuMobile();
dataHora();
validarContato();

