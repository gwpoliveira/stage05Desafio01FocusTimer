export default function(){
  const buttonFloresta = new Audio("https://fatepifaespi.com.br/wp-content/uploads/2022/06/Floresta.wav")
  const buttonChuva = new Audio("https://fatepifaespi.com.br/wp-content/uploads/2022/06/Chuva.wav")
  const buttonCafeteira = new Audio("https://fatepifaespi.com.br/wp-content/uploads/2022/06/Cafeteria.wav")
  const buttonLareira = new Audio("https://fatepifaespi.com.br/wp-content/uploads/2022/06/Lareira.wav")
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  
  buttonFloresta.loop = true
  buttonChuva.loop = true
  buttonCafeteira.loop = true
  buttonLareira.loop = true
  
  
  function pressButton(){
    buttonPressAudio.play()
  }

  function timeEnd(){
    kitchenTimer.play()
  }

   return{
    buttonCafeteira,
    buttonChuva,
    buttonFloresta,
    buttonLareira,
    pressButton,
    timeEnd,
      
  }
}

