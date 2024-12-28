document.getElementById('nextButton').addEventListener('click', function () {
    const bankAccountInput = document.getElementById('bankAccount').value.trim();

    if (bankAccountInput === '') {
        // Tampilkan modal error jika input kosong
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
    } else {
        // Tampilkan popup konfirmasi jika input terisi
        const transferModal = new bootstrap.Modal(document.getElementById('transferBank'));
        transferModal.show();
    }
});

// Tambahkan listener untuk menutup modal error sebelum membuka modal konfirmasi
document.getElementById('errorModal').addEventListener('hide.bs.modal', function () {
    const bankAccountInput = document.getElementById('bankAccount').value.trim();

    // Cek lagi untuk membuka modal konfirmasi jika input sudah terisi
    if (bankAccountInput !== '') {
        const transferModal = new bootstrap.Modal(document.getElementById('transferBank'));
        transferModal.show();
    }
});