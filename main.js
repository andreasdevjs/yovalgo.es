// Obtenemos las cosas
const modal = document.getElementById('modal-number');
const modalCloseButton = document.getElementById('modal-number-close');
const ctaPhoneButton = document.getElementById('cta-phone');
const ctaNav = document.getElementById('cta-nav');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

modalCloseButton.onclick = function () {
  modal.style.display = 'none';
}

ctaPhoneButton.onclick = function () {
  modal.style.display = 'block';
}

ctaNav.onclick = function () {
  modal.style.display = 'block';
}