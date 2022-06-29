import Controls from "./controls.js"
import Timer from "./timer.js"
import Sounds from "./sounds.js" 
import {
  buttonMais,
  buttonMenos,
  buttonPause,
  buttonStop,
  buttonPlay,
  minutesDisplay,
  secondsDisplay,
  buttonCard01,
  buttonCard02,
  buttonCard03,
  buttonCard04,
  buttonCard01c,
  buttonCard02c,
  buttonCard03c,
  buttonCard04c,
} from "./elements.js"

const sound = Sounds()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset 
})

buttonPlay.addEventListener('click', function () {
  controls.play()
  timer.countdow()
  sound.pressButton()
})

buttonPause.addEventListener('click', function () {
  controls.pause()
  timer.hold()
  sound.pressButton()
  
})

buttonStop.addEventListener('click', function () {
  controls.reset()
  timer.reset()
  sound.pressButton()
})

buttonMais.addEventListener('click',function(){
  timer.mais()
  sound.pressButton()
})

buttonMenos.addEventListener('click',function(){
  timer.menos() 
  sound.pressButton()
})

function resetCard(){
  buttonCard01.classList.remove('hide')
  buttonCard01c.classList.add('hide')
  buttonCard02.classList.remove('hide')
  buttonCard02c.classList.add('hide')
  buttonCard03.classList.remove('hide')
  buttonCard03c.classList.add('hide')
  buttonCard04.classList.remove('hide')
  buttonCard04c.classList.add('hide')
  sound.buttonFloresta.pause()
  sound.buttonChuva.pause()
  sound.buttonCafeteira.pause()
  sound.buttonLareira.pause()
}

buttonCard01.addEventListener('click', function () {
  resetCard()
  buttonCard01.classList.add('hide')
  buttonCard01c.classList.remove('hide')
  sound.buttonFloresta.play()
})

buttonCard02.addEventListener('click', function () {
  resetCard()
  buttonCard02.classList.add('hide')
  buttonCard02c.classList.remove('hide')
  sound.buttonChuva.play()

})

  buttonCard03.addEventListener('click', function () {
  resetCard()
  buttonCard03.classList.add('hide')
  buttonCard03c.classList.remove('hide')
  sound.buttonCafeteira.play()
})

buttonCard04.addEventListener('click', function () {
  resetCard()
  buttonCard04.classList.add('hide')
  buttonCard04c.classList.remove('hide')
  sound.buttonLareira.play()
})
buttonCard01c.addEventListener('click', function () {
  buttonCard01c.classList.add('hide')
  buttonCard01.classList.remove('hide')
  sound.buttonFloresta.pause()
 
})

buttonCard02c.addEventListener('click', function () {
  buttonCard02c.classList.add('hide')
  buttonCard02.classList.remove('hide')
  sound.buttonChuva.pause()

})

buttonCard03c.addEventListener('click', function () {
  buttonCard03c.classList.add('hide')
  buttonCard03.classList.remove('hide')
  sound.buttonCafeteira.pause()
})

buttonCard04c.addEventListener('click', function () {
  
  buttonCard04c.classList.add('hide')
  buttonCard04.classList.remove('hide')
  sound.buttonLareira.pause()
})

