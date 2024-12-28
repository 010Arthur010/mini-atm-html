const input = document.getElementById("inputNumber");

input.addEventListener("input", function () {
  // Hanya izinkan angka dan batasi panjang hingga 20
  this.value = this.value.replace(/[^0-9]/g, "").slice(0, 20);
});
  
function setModalData() {
    const inputNumber = document.getElementById('inputNumber').value = "345212345678910121";
    const inputPertama = document.getElementById('inputPertama');
    const inputKedua = document.getElementById('inputKedua');

    inputPertama.value = inputNumber;  // Set value from the first input
    inputKedua.value = "MOCHAMAD ZAINAL "; // Set a default name or modify as needed
}

document.getElementById('inputNumber').addEventListener('click', setModalData);