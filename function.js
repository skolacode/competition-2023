function countdown() {
  console.log("i am clicked")

  const counter = document.getElementById("counter")

  const value = counter.innerText

  counter.innerText = value+1
}