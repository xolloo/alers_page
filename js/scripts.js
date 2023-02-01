
window.addEventListener('beforeunload', (event) => {
  return event.returnValue = "Are you sure you want to exit?"
})

window.addEventListener('load', () => {
  const btnAlert = document.querySelector('.alert')
  const btnConfirm = document.querySelector('.confirm')
  const btnCustomConfirm = document.querySelector('.confirm-custom')
  const btnPromt = document.querySelector('.promt')
  const btnUnload = document.querySelector('.unload')

  btnAlert.addEventListener('click', () => runAlert())
  btnConfirm.addEventListener('click', runConfirm)
  btnCustomConfirm.addEventListener('click', runConfirmCustom)
  btnPromt.addEventListener('click', runPrompt)

  const runAlert = () => {
    alert('Alert message')
    displayResult('Alert was shown')
  }

  function runConfirm () {
    const result = window.confirm('Confirm message')
    if (result) {
      displayResult('You clicked: "Ok"')
    } else {
      displayResult('You clicked: "Cancel"')
    }
  }

  function runPrompt () {
    const result = window.prompt('Enter promt value')
    displayResult(`You entered: ${result}`)
  }

  function runConfirmCustom () {
    // save native confirm function
    const nativeConform = window.confirm

    // create custom confirm, which returns randomly TRUE or FALSE
    const randomNumber = Math.random() * 11
    window.confirm = function () { return randomNumber > 5 }
    displayResult(`Custom confirm returns ${window.confirm()}<br/>(${randomNumber} > 5)`)

    // reset native confirm func
    window.confirm = nativeConform
  }

  function displayResult (result) {
    let element = document.querySelector('.result')
    if (!element) {
      element = document.createElement('div')
      element.classList.add('result')
      document.querySelector('.app').appendChild(element)
    }
    element.innerHTML = result
  }
})