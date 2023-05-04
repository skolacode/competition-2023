function setDefaultVal() {
  const counter = document.getElementById("counter")

  counter.innerText = 10
}

function countdown() {

  let countdownTimer = setInterval(function timer() {
    const counter = document.getElementById("counter")

    const value = parseInt(counter.innerText)

    const finalValue = value-1

    counter.innerText = finalValue

    if(finalValue < 1) {
      console.log('run me')
      clearInterval(countdownTimer)
    }

  }, 1000)
  
}