function goBack() {
  window.location.reload(); // Memuat ulang halaman saat tombol Kembali diklik
}

function displayNumber() {
  document.getElementById('myInput').value = "250.000";
}

// Link the function to the input element
document.getElementById('myInput').addEventListener('click', displayNumber);

function validateInput() {
  const inputAmount = parseInt(document.getElementById('myInput').value.replace(/\./g, ''), 10);
  const selectedAmount = document.querySelector('input[name="amount"]:checked');

  if (inputAmount < 50000) {
    // Show the info modal
    const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
    infoModal.show();
  } else if (inputAmount === 50000 && selectedAmount && selectedAmount.value === "100000") {
    // Show the error modal for selecting 100,000 with 50,000 input
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
  } else if (inputAmount === 250000 && selectedAmount && selectedAmount.value === "100000") {
    // Show the error modal for selecting 100,000 with 250,000 input
    const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
    errorModal.show();
  } else {
    goNext(); // Proceed to the next step if validation passes
  }
}

// Link the validateInput function to the button
document.querySelector('.custom-lanjut').onclick = validateInput;

function goNext() {
  const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
  loadingModal.show();

  // Simulate a loading process
  setTimeout(function () {
    window.location.href = './transaksi-record/index.html';
  }, 1000);
}
