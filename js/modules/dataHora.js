export default function dataHora() {

 let dataTime = new Date()
 let diaAgora = dataTime.getDay()
 let horaAgora = dataTime.getHours()

 const funcionamento = document.querySelector('[data-semana]')

 const diasSemana = funcionamento.dataset.semana.split(',').map(Number)
 const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)

 const semanaAberto = diasSemana.indexOf(diaAgora) !== -1

 const horarioAberto = (horaAgora >= horarioSemana[0] && horaAgora < horarioSemana[1])

if(semanaAberto && horarioAberto){
  funcionamento.classList.add('aberto')
}

//  console.log(semanaAberto);
//  console.log(horarioAberto);

};


 
