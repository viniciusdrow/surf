export default function menuMobile(){
  const menu = document.querySelector('.menu-mobile')
  const abreNav = document.querySelector('.config-menu ul')
  function abriMeno(){
    menu.classList.toggle('ativo')
    abreNav.classList.toggle('ativar')
  }
  
  menu.addEventListener('click',abriMeno)
  
  

}


