const generateButton = document.querySelector(".generate-button");
const clearButton = document.querySelector(".clear-button");
const urlInput = document.querySelector(".URL");
const qrcodeContainer = document.querySelector(".qr-code");

const qrCodeGenerator = function (url) {
  const qrcode = new QRCode(qrcodeContainer, {
    text: `${url}`,
    width: 300,
    height: 300,
    colorDark: "#8a2be2",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H,
  });
  return qrcode;
};

generateButton.addEventListener("click", function (e) {
  e.preventDefault;
  const urlField = urlInput.value;
  qrcodeContainer.innerHTML = "";
  qrCodeGenerator(urlField);
});

clearButton.addEventListener("click", function (e) {
  e.preventDefault;
  urlInput.value = "";
});
