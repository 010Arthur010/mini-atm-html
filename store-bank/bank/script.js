function goBack() {
  window.location.reload(); // Memuat ulang halaman saat tombol Kembali diklik
}

function displayNumber() {
  document.getElementById('myInput').value = "250.000";
}

// Link the function to the input element
document.getElementById('myInput').addEventListener('click', displayNumber);

function goNext() {
  window.location.href = './check-store/index.html';
}