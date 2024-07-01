let form = document.forms[0],
  formPassword = document.forms[1],
  formAdress = document.forms[2],
  basicInfoContainer = document.querySelector('.basic-info-container')
  passwordContainer = document.querySelector('.password-container'),
  adressContainer = document.querySelector('.adress-container'),
  title = document.querySelector('.title'),
  progressBar = document.querySelector('.progress-bar'),
  stepOneBasic = document.querySelector('.step-1'),
  stepOnePassword = document.querySelector('.step-1-password'),
  stepTwoPassword = document.querySelector('.step-2-password'),
  stepOneAdress = document.querySelector('.step-1-adress'),
  stepTwoAdress = document.querySelector('.step-2-adress'),
  stepThreeAdress = document.querySelector('.step-3-adress'),
  stepToPasswordBtn = document.querySelector('.form-group-btns-to-password'),
  stepToBasicInfoBtn = document.querySelector('.form-group-btns-to-basic')
  stepToAdressBtn = document.querySelector('.form-group-btns-to-adress')
  stepFromAdressToPasswordBtn = document.querySelector('.form-group-btns-from-adress-to-password')
  successfulContainer = document.querySelector('.container-successful')
  successfulMessage = document.querySelector('.successful-message')

  function showValidFirstStep() {

    form.name.addEventListener('input', () => {
      if(form.name.checkValidity()) {
        form.name.setCustomValidity('Type in the correct value')
      } else {
        form.name.setCustomValidity('')
      }
      if(form.mail.checkValidity()) {
        form.mail.setCustomValidity('Type in the correct value')
      } else {
        form.mail.setCustomValidity('')
      }
      
      form.reportValidity()
    })

    if(form.checkValidity()) {
      stepOneBasic.classList.add('progress-bar-step-valid')
      stepOnePassword.classList.add('progress-bar-step-valid')
    } else {
      stepOneBasic.classList.remove('progress-bar-step-valid')
      stepOnePassword.classList.remove('progress-bar-step-valid')
    }
  }

  form.addEventListener('input', () => {
    showValidFirstStep()
  })

  stepToPasswordBtn.addEventListener('click', () => {
    if(form.checkValidity()) {
      basicInfoContainer.style.display = 'none'
      passwordContainer.style.display = 'block'
    } else {
      return
    }
  })

  stepToBasicInfoBtn.addEventListener('click', () => {
    passwordContainer.style.display = 'none'
    basicInfoContainer.style.display = 'block'
  })

  function checkValidPassvord() {
    formPassword.passwordRepeat.addEventListener('input', () => {
      if(formPassword.passwordRepeat.value != formPassword.password.value) {
        formPassword.passwordRepeat.setCustomValidity('Passwords must be identical')
        formPassword.password.setCustomValidity('Passwords must be identical')

        stepTwoPassword.classList.remove('progress-bar-step-valid')
      } else {
        formPassword.passwordRepeat.setCustomValidity('')
        formPassword.password.setCustomValidity('')

        showValidFirstStep()
        stepOnePassword.classList.add('progress-bar-step-valid')
        stepTwoPassword.classList.add('progress-bar-step-valid')
      }
    })
  }
  
  checkValidPassvord()

  stepToAdressBtn.addEventListener('click', () => {

    if(formPassword.checkValidity()) {
      passwordContainer.style.display = 'none'
      adressContainer.style.display = 'block'
    } else {
      return
    }
  })
  
  stepFromAdressToPasswordBtn.addEventListener('click', () => {
    adressContainer.style.display = 'none'
    passwordContainer.style.display = 'block'
  })

form.phone.addEventListener('input', () => {
  const pattern = /^\+38\d{10}$/

  if (!pattern.test(form.phone.value)) {
    form.phone.setCustomValidity('Please enter a valid Ukrainian phone number starting with +38 followed by 10 digits.')
  } else {
    form.phone.setCustomValidity('')
  }
})

function checkValidAdress() {
    stepOneAdress.classList.add('progress-bar-step-valid')
    stepTwoAdress.classList.add('progress-bar-step-valid')

  formAdress.addEventListener('input', () => {
    if(formAdress.checkValidity()) {
      stepThreeAdress.classList.add('progress-bar-step-valid')
    } else {
      stepThreeAdress.classList.remove('progress-bar-step-valid')
    }
  })
}

checkValidAdress()

formAdress.addEventListener('submit', (e) => {
  e.preventDefault()

  if(formAdress.checkValidity()) {
    successfulContainer.style.display = 'block'
    successfulMessage.style.display = 'block'
    title.style.display = 'none'
    progressBar.style.display = 'none'
    adressContainer.style.display = 'none'
  }
})