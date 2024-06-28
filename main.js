let form = document.forms[0],
  title = document.querySelector('.title'),
  progressBar = document.querySelector('.progress-bar'),
  stepOne = document.querySelector('.step-1'),
  stepTwo = document.querySelector('.step-2'),
  stepThree = document.querySelector('.step-3'),
  stepFour = document.querySelector('.step-4'),
  stepFive = document.querySelector('.step-5'),
  signInBtn = document.querySelector('.form-group-btns-sign-in'),
  successfulMessage = document.querySelector('.successful-message')

form.addEventListener('input', () => {

  if(!form.name.checkValidity()) {
    stepOne.classList.remove('progress-bar-step-valid')
  } else {
    stepOne.classList.add('progress-bar-step-valid')
  }
  form.name.reportValidity()

  if(!form.mail.checkValidity()) {
    stepTwo.classList.remove('progress-bar-step-valid')
  } else {
    stepTwo.classList.add('progress-bar-step-valid')
  }

  if(!form.phone.checkValidity()) {
    stepThree.classList.remove('progress-bar-step-valid')
  } else {
    stepThree.classList.add('progress-bar-step-valid')
  }

  if(!form.password.checkValidity()) {
    stepFour.classList.remove('progress-bar-step-valid')
  } else {
    stepFour.classList.add('progress-bar-step-valid')
  }

  if(!form.passwordRepeat.checkValidity()) {
    stepFive.classList.remove('progress-bar-step-valid')
  } else {
    stepFive.classList.add('progress-bar-step-valid')
  }
})

form.phone.addEventListener('input', () => {
  const pattern = /^\+38\d{10}$/

  if (!pattern.test(form.phone.value)) {
    form.phone.setCustomValidity('Please enter a valid Ukrainian phone number starting with +38 followed by 10 digits.')
  } else {
    form.phone.setCustomValidity('')
  }
})

form.passwordRepeat.addEventListener('input', () => {
  if(form.passwordRepeat.value != form.password.value) {
    form.passwordRepeat.setCustomValidity('Passwords must be identical')
    form.password.setCustomValidity('Passwords must be identical')
  } else {
    form.passwordRepeat.setCustomValidity('')
    form.password.setCustomValidity('')
  }
})

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if(form.checkValidity()) {
    successfulMessage.style.display = 'block'
    title.style.display = 'none'
    progressBar.style.display = 'none'
    form.style.display = 'none'
  }
})