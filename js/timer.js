import Sounds from "./sounds.js"

const sound = Sounds()

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  second
  
}){

  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }
  
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  
  function countdow() {
  
    timerTimeOut = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinised = minutes <= 0 && seconds <= 0
  
      updateDisplay(minutes, 0)
  
      if (isFinised) {
        resetControls()
        updateDisplay()
        Sounds().timeEnd()
        return
      }
  
      if (seconds <= 0) {
        seconds = 60
  
        --minutes
      }
  
      updateDisplay(minutes, String(seconds - 1))
  
      countdow()
    }, 1000)
  
  }

  function updateMinutes(newMinutes) {
    minutes = newMinutes
  }

  function hold(){
    clearTimeout(timerTimeOut)
  }

  function mais(){
    minutes += 5
    updateDisplay(minutes, 0)
    updateMinutes
  }

  function menos (){
    if (minutes > 0){
      minutes -= 5
      updateDisplay(minutes, 0)
      updateMinutes
    }
    else{
      resetControls()
      return    
    } 
  }

  return{
    countdow,
    reset,
    updateDisplay,
    updateMinutes,
    hold,
    mais,
    menos
  }

}
