const noRekeningInput = document.getElementById('noRekening'); // Define the variable
const namaPenerimaInput = document.getElementById('namaPenerima');

// values
const NoRekening = '12345678910121';
const NamaPenerima = 'CALVIN ARDIANSYAH';

// Add maxlength attribute to noRekeningInput
noRekeningInput.addEventListener('input', function () {
  if (noRekeningInput.value.length > 16) {
    noRekeningInput.value = noRekeningInput.value.slice(0, 16);
  }
});

// Add the inputs on click
noRekeningInput.addEventListener('click', function () {
  noRekeningInput.value = NoRekening;
});

namaPenerimaInput.addEventListener('click', function () {
  namaPenerimaInput.value = NamaPenerima;
});

document.getElementById('nextButton').addEventListener('click', function () {
  // Get values from the input fields
  const noRekeningValue = noRekeningInput.value;
  const namaPenerimaValue = namaPenerimaInput.value;

  // Set the modal input fields with the values
  document.getElementById('checkModal').querySelector('#noRekening').value = noRekeningValue;
  document.getElementById('checkModal').querySelector('#namaPenerima').value = namaPenerimaValue;

  // Show the modal
  const modal = new bootstrap.Modal(document.getElementById('checkModal'));
  modal.show();
});

// Show the confirmation modal
document.querySelector('.btn-continue[data-bs-target="#confirmModal"]').addEventListener('click', function () {
  const confirmModal = new bootstrap.Modal(document.getElementById('confirmModal'));
  confirmModal.show();
});

document.querySelector('.btn-continue[data-bs-target="#loadingModal"]').addEventListener('click', function () {
  const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
  loadingModal.show();

  setTimeout(function () {
    window.location.href = '../transaksi-record/index.html';
  }, 2000);
});

// Link the function to the button
document.getElementById('mainMenu').onclick = function () {
  window.location.href = '/main-page/main-page.html';
}

// Link the function to the button
function closeModal() {
  window.location.reload(); // Memuat ulang halaman saat tombol Kembali diklik
}
