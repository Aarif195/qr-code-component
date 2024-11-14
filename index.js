const qrContainer = document.querySelector('.qr-container');
const qrTextInput = document.querySelector('.qr-text');
const generateQrCodeBtn = document.querySelector('.generate-qr-code-btn');
const errorMessageText = document.querySelector('.error-message-text')
const qrContainer1 = document.querySelector('.qr-container-1')

generateQrCodeBtn.addEventListener('click', () => {

  validateInputField();
})


console.log(qrContainer1);


function validateInputField() {
  console.log(qrTextInput.value);


  if (qrTextInput.value.trim().length > 0) {
    generateQrCode();
  } else {
    // errorMessageText.textContent = "Enter text and use some URL to generate QR code"
    errorMessageText.textContent = '';
    // console.log(errorMessageText);

  }

}

function generateQrCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrTextInput.value,
    height: 200,
    width: 200,
    colorLight: "#fff",
    colorDark: "rgb(45, 110, 214)",
  })

  qrTextInput.value = '';
  errorMessageText.textContent = '';
  qrContainer1.style.display = 'block';
}