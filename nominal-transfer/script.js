const balance = 1000000; // Initialize balance

document.getElementById('nextButton').addEventListener('click', function () {
    const bankAccountInput = document.getElementById('bankAccount').value.trim();
    
    if (bankAccountInput === '') {
        // Show error modal if input is empty
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
    } else {
        const nominalValue = parseInt(bankAccountInput.replace(/[^0-9]/g, ''), 10); // Clean and convert to integer
        
        if (nominalValue > balance) {
            // Show info modal if nominal exceeds balance
            const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
            infoModal.show();
        } else {
            // Show confirmation popup if input is valid
            const transferModal = new bootstrap.Modal(document.getElementById('transferBank'));
            setModalData(); // Set modal data
            transferModal.show();
        }
    }
});

// Function to set the modal data
function setModalData() {
    const bankAccount = document.getElementById('bankAccount').value.trim();
    const input1 = document.getElementById('input1');
    const input2 = document.getElementById('input2');
    const input3 = document.getElementById('input3');

    // Set values for the modal inputs
    input1.value = "345212345678910121"; // Example account number
    input2.value = "MOCHAMAD ZAINAL "; // Example recipient name
    input3.value = bankAccount; // Set the nominal value
}

// Add listener for the "selesaiTransaksi" button
document.getElementById('selesaiTransaksi').addEventListener('click', function () {
    const nominalInput = document.getElementById('input3').value.trim(); // Check the nominal input
    const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));

    if (nominalInput === '') {
        // Show error modal if nominal input is empty
        const errorModal = new bootstrap.Modal(document.getElementById('errorModal'));
        errorModal.show();
    } else {
        loadingModal.show();

        // Simulate a loading process
        setTimeout(function () {
            window.location.href = '/nominal-transfer/transaksi-history/transaksi-history.html'; // Redirect to your desired page
        }, 1000); // Adjust the time as needed (2000ms = 2 seconds)
    }
});

// Format input to Rupiah
var dengan_rupiah = document.getElementById('bankAccount');
dengan_rupiah.addEventListener('keyup', function(e) {
    dengan_rupiah.value = formatRupiah(this.value, 'Rp. ');
});

// Function to format numbers as Rupiah
function formatRupiah(angka, prefix) {
    var number_string = angka.replace(/[^,\d]/g, '').toString(),
        split = number_string.split(','),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi);
        
    if (ribuan) {
        separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
    }
    
    rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
    return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
}