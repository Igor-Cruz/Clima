document.querySelector('.busca').addEventListener('submit', event => {
  event.preventDefault() //Previne o comportamento padrão

  let input = document.querySelector('#searchInput').value

  if (input !== '') {
    showWarning('Carregando...')

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
      input
    )}&appid=46e4cc1ba1d2c78229fa497c0fa5e589&units=metric&lang=pt_br`
  }
})

function showWarning(msg) {
  document.querySelector('.aviso').innerHTML = msg
}
