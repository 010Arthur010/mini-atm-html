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

function setModalData() {
    const bankAccount = document.getElementById('bankAccount').value = "Rp. 500.000";
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');

    // Set values for the modal inputs
    input1.value = "345212345678910121"; // Set this value as needed
    input2.value = "MOCHAMAD ZAINAL "; // Set a default name or modify as needed
    input3.value = bankAccount; // Set the nominal value
}

document.getElementById('bankAccount').addEventListener('click', setModalData);

document.getElementById('selesaiTransaksi').addEventListener('click', function () {
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
    loadingModal.show();

    // Simulate a loading process
    setTimeout(function () {
        window.location.href = '/nominal-transfer/transaksi-history/transaksi-history.html'; // Redirect to your desired page
    }, 1000); // Adjust the time as needed (2000ms = 2 seconds)
});