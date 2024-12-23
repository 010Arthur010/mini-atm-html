document.getElementById('cekSaldo').addEventListener('click', function() {
       $('#loadingModal').modal('show');
       
       // Simulate a loading process
       setTimeout(function() {
         window.location.href = '../cek-saldo/cek-saldo.html'; // Redirect to your desired page
       }, 1000); // Adjust the time as needed (2000ms = 2 seconds)
     });