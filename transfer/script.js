const input = document.getElementById('inputNumber');

        input.addEventListener('input', function() {
            // Hanya izinkan angka dan batasi panjang hingga 20
            this.value = this.value.replace(/[^0-9]/g, '').slice(0, 20);
        });