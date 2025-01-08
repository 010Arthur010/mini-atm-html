document.addEventListener('DOMContentLoaded', function () {
  const pinInput = document.querySelector('input[type="password"]');
  const clearButton = document.querySelector('.btn-warning');
  const cancelButton = document.querySelector('#cancelButton');
  const enterButton = document.querySelector('.btn-success');
  const errorMessage = document.createElement('div'); // Membuat elemen untuk pesan kesalahan
  errorMessage.className = 'text-warning'; // Mengubah kelas untuk styling menjadi kuning
  errorMessage.style.display = 'none'; // Sembunyikan pesan kesalahan awal
  pinInput.parentNode.insertBefore(errorMessage, pinInput.nextSibling); // Menempatkan pesan di bawah input

  let attemptsLeft = 2; // Jumlah percobaan yang tersisa
  const correctPin = '123456'; // Ganti dengan PIN yang benar
  // const displayPin = correctPin; // Menyimpan nilai PIN untuk ditampilkan

  clearButton.addEventListener('click', function () {
    pinInput.value = '';
    pinInput.style.borderColor = ''; // Reset border color
    errorMessage.style.display = 'none'; // Sembunyikan pesan kesalahan
  });

  cancelButton.addEventListener('click', function () {
    window.location.href = 'index.html';
  });

  // Menambahkan event listener untuk mengganti karakter input dengan bintang
  pinInput.addEventListener('input', function () {
    const value = pinInput.value;
    // Simpan nilai asli di variabel terpisah
    pinInput.setAttribute('data-value', value); // Simpan nilai asli
  });

  enterButton.addEventListener('click', function () {
    const value = pinInput.getAttribute('data-value'); // Ambil nilai asli dari atribut data-value
    console.log("pin password:" + value);
    if (!value) { // Cek apakah PIN belum dimasukkan
      const modal = new bootstrap.Modal(document.getElementById('pinModal'));
      modal.show(); // Tampilkan modal error jika PIN belum dimasukkan
    } else if (value !== correctPin) { // Cek apakah PIN salah
      pinInput.style.borderColor = 'yellow'; // Ubah warna border menjadi kuning
      attemptsLeft--; // Kurangi jumlah percobaan yang tersisa
      errorMessage.textContent = `PIN anda salah dan sisa ${attemptsLeft}x lagi untuk limit`; // Tampilkan pesan kesalahan
      errorMessage.style.display = 'block'; // Tampilkan pesan kesalahan

      if (attemptsLeft <= 0) {
        // Jika percobaan habis, tampilkan modal loading dan tidak menampilkan modal error
        const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
        loadingModal.show(); // Tampilkan modal loading

        // Arahkan ke halaman blokir setelah 2 detik
        setTimeout(function () {
          window.location.href = './block-page/index.html';
        }, 2000);
      } else {
        // Tampilkan modal error hanya jika percobaan belum habis
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
      }
    } else {
      // Jika PIN benar, lanjutkan ke halaman berikutnya
      const successModal = new bootstrap.Modal(document.getElementById('successModal'));
      successModal.show();

      // Arahkan ke halaman selanjutnya setelah 2 detik
      setTimeout(function () {
        window.location.href = '../main-page/main-page.html';
      }, 2000);
    }
  });
});

