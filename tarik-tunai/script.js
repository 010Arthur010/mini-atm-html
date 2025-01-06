const userABalance = 200000; // Saldo User A
const userBBalance = 1000000; // Saldo User B
const atmBalance = 500000; // Saldo di ATM

// Get modal instances
const infoModal = new bootstrap.Modal(document.getElementById('infoModal'));
const optionModal = new bootstrap.Modal(document.getElementById('optionModal'));
const atmModal = new bootstrap.Modal(document.getElementById('atmModal'));
const pecahanModal = new bootstrap.Modal(document.getElementById('pecahanModal'));

// Track selected amount
let selectedAmount = 0;

// Function to show the appropriate modal based on the selected amount
function handleWithdrawal() {
  if (selectedAmount === 0) return;

  if (selectedAmount === 1000000) {
    showAtmModal();
    return;
  }

  if (selectedAmount > 200000) {
    showInfoModal();
    return;
  }

  if (selectedAmount === 200000 && selectedAmount > atmBalance) {
    showInfoModal();
    return;
  }

  if (selectedAmount > atmBalance) {
    showInfoModal();
  } else {
    proceedWithWithdrawal();
  }
}

// Function to show info modal
function showInfoModal() {
  // Close any other modals first
  optionModal.hide();
  pecahanModal.hide();
  infoModal.show();
}

// Function to show ATM modal
function showAtmModal() {
  // Close any other modals first
  optionModal.hide();
  pecahanModal.hide();
  atmModal.show();
}

// Function to proceed with the withdrawal
function proceedWithWithdrawal() {
  if (selectedAmount === 10000) {
    showOptionModal();
  } else {
    showOptionModal();
  }
}

// Function to show pecahan modal
function showPecahanModal() {
  // Close any other modals first
  optionModal.hide();
  infoModal.hide();
  atmModal.hide();
  pecahanModal.show();
}

// Handle button clicks
const buttons = document.querySelectorAll('.btn-custom');
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    selectedAmount = parseInt(button.value);
  });
});

// Handle custom input
const customInput = document.querySelector('.custom-input');
customInput.addEventListener('input', () => {
  const amount = parseInt(customInput.value);
  if (!isNaN(amount)) {
    selectedAmount = amount;
  }
});

// Handle Tarik Tunai button
const tarikTunaiBtn = document.querySelector('.btn-in');
tarikTunaiBtn.addEventListener('click', handleWithdrawal);

// Function to handle option modal
function handleOptionModal() {
  const btnContinue = document.getElementById('btnContinue');

  if (btnContinue) {
    btnContinue.addEventListener('click', function () {
      const selectedAmountOption = document.querySelector('input[name="amount"]:checked');

      if (selectedAmountOption) {
        const amount = selectedAmountOption.value;
        localStorage.setItem('selectedAmount', amount);

        const modalInstance = bootstrap.Modal.getInstance(optionModal);
        if (modalInstance) {
          modalInstance.hide();
        }

        if (selectedAmount === 10000) {
          showPecahanModal(); // Tampilkan pecahan modal
        }
        console.log('Pecahan yang dipilih:', amount);
      } else {
        showPecahanModal(); // Tampilkan pecahan modal jika tidak ada opsi yang dipilih
      }
    });
  } else {
    console.error('Button "btnContinue" not found');
  }
}

// Function to show option modal
function showOptionModal() {
  // Close any other modals first
  infoModal.hide();
  atmModal.hide();
  pecahanModal.hide();
  optionModal.show();
}

// Call function to set up event listener
handleOptionModal();


// Function to handle option modal
function handleOptionModal() {
  const btnContinue = document.getElementById('btnContinue');

  if (btnContinue) {
    btnContinue.addEventListener('click', function () {
      const selectedAmountOption = document.querySelector('input[name="amount"]:checked');

      if (selectedAmountOption) {
        const amount = selectedAmountOption.value;
        localStorage.setItem('selectedAmount', amount);

        const modalInstance = bootstrap.Modal.getInstance(optionModal);
        if (modalInstance) {
          modalInstance.hide();
        }

        if (selectedAmount === 10000) {
          showPecahanModal(); // Tampilkan pecahan modal
        } else {
          showLoadingModal(); // Show loading modal
          setTimeout(() => {
            window.location.href = './cek-struk/index.html'; // Redirect to another page
          }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)
        }
        console.log('Pecahan yang dipilih:', amount);
      } else {
        showPecahanModal(); // Tampilkan pecahan modal jika tidak ada opsi yang dipilih
      }
    });
  } else {
    console.error('Button "btnContinue" not found');
  }
}

// Function to show loading modal
function showLoadingModal() {
  // Close any other modals first
  infoModal.hide();
  atmModal.hide();
  pecahanModal.hide();
  optionModal.hide();
  const loadingModal = new bootstrap.Modal(document.getElementById('loadingModal'));
  loadingModal.show();
}