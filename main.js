const basicForm = document.querySelector('.basic-info-form'),
  phoneInput = document.getElementById('phone'),
  passwordForm = document.querySelector('.password-form'),
  adressForm = document.querySelector('.adress-form'),
  passwordHint = document.querySelector('.password-hint')
  formPasswordToBasicBtn = document.querySelector('.form-group-btns-to-basic'),
  fromAdressToPasswordBtn = document.querySelector('.form-group-btns-from-adress-to-password'),
  stepOne = document.querySelector('.step-1'),
  stepTwo = document.querySelector('.step-2'),
  stepThree = document.querySelector('.step-3'),
  container = document.querySelector('.container'),
  successMessage = document.querySelector('.successful-message')

basicForm.addEventListener('input', () => {

  if ( basicForm.checkValidity() ) {
    stepOne.classList.add('progress-bar-step-valid')
  } else {
    stepOne.classList.remove('progress-bar-step-valid')
  }
})

basicForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if ( basicForm.checkVisibility() ) showPasswordForm(basicForm)
})

passwordForm.passwordRepeat.addEventListener('input', () => {

  if ( passwordForm.passwordRepeat.value != passwordForm.password.value ) {
    stepTwo.classList.remove('progress-bar-step-valid')
    passwordHint.style.opacity = '1'
  } else {
    passwordHint.style.opacity = '0'
    stepTwo.classList.add('progress-bar-step-valid')
  }
})

formPasswordToBasicBtn.addEventListener('click', () => showBasicInfoForm(passwordForm)
)

passwordForm.addEventListener('submit', (e) => {
  e.preventDefault()

  if(passwordForm.checkVisibility()) showAdressForm(passwordForm)
})

adressForm.addEventListener('input', () => {

  if ( adressForm.checkValidity() ) {
    stepThree.classList.add('progress-bar-step-valid')
  } else {
    stepThree.classList.remove('progress-bar-step-valid')
  }
})

fromAdressToPasswordBtn.addEventListener('click', () => showPasswordForm(adressForm))

adressForm.addEventListener('submit', (e) => {
  e.preventDefault()
  showSuccess()
})

const formatPhoneNumber = () => {
  let value = phoneInput.value;

  value.startsWith('+380')
  phoneInput.value = value;
}
 
const allowOnlyNumbers = (e) => {
  const charCode = e.which ? e.which : e.keyCode;

  if (
    (charCode > 31 && (charCode < 48 || charCode > 57) && 
    (charCode < 96 || charCode > 105)) && 
    charCode !== 8 && charCode !== 37 && charCode !== 39 
  ) {
    e.preventDefault()
  }
}

phoneInput.addEventListener('input', formatPhoneNumber)
phoneInput.addEventListener('keydown', allowOnlyNumbers)

const showBasicInfoForm = (hideForm) => {
  hideForm.style.display = 'none'
  basicForm.style.display = 'flex'
}

const showPasswordForm = (hideForm) => {
  hideForm.style.display = 'none'
  passwordForm.style.display = 'flex'
}

const showAdressForm = (hideForm) => {
  hideForm.style.display = 'none'
  adressForm.style.display = 'flex'
}

function showSuccess() {
  adressForm.style.display = 'none'
  container.style.display = 'none'
  successMessage.style.display = 'block'
}