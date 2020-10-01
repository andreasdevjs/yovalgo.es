// Declaramos las variables
const modal = document.getElementById('modal-number');
const modalCloseButton = document.getElementById('modal-number-close');
const modalButtonSend = document.getElementById('modal-number-send');
const modalPhoneName = document.getElementById('modal-number-name');
const modalPhoneNumber = document.getElementById('modal-number-phone');

const ctaPhoneButton = document.getElementById('cta-phone') || '';
const ctaNav = document.getElementById('cta-nav');

const cookieBanner = document.getElementById('cookie-banner');
const cookieAcceptButton = document.getElementById('cookie-accept-button');


// Función que abre el banner de las cookies
const openCookiebanner = () => {
  cookieBanner.style.display = 'flex';
}

// Al cargar la página comprobamos el consentimiento y tomamos acción (y otras acciones)
window.onload = function () {
  
  (function() {
    emailjs.init("user_oi3nhS25jZL0Mhpc6YgxI");
  })();

  const isCookieAccepted = localStorage.getItem("cookie-consent");
  if(isCookieAccepted === null) {
    setTimeout(function(){ openCookiebanner(); }, 3000);
  }
}

// Cualquier click que coincida con un if ejecuta la acción
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Función que cierra el modal de contacto
modalCloseButton.onclick = function () {
  modal.style.display = 'none';
}

// Función que comprueba y envía la información de la persona y envía un correo con ella
modalButtonSend.onclick = function () {
  if(modalPhoneNumber.value.length < 8 || modalPhoneName.value.length < 3 || modalPhoneName.value.length === "") {
    alert('Introduzca datos correctos');
  } else {
    
    const templateParams = {
      name: modalPhoneName.value,
      phone: modalPhoneNumber.value,
      notes: 'Alguien quiere contactar'
    };

    modalButtonSend.innerText = 'Enviando..';
    
    emailjs.send('service_ux2g4f5', 'template_k2sslj6', templateParams)
    .then(function(response) {

      gtag('event', 'SolicitudContacto', {
        'event_category' : 'Interaccion'
      });
      
      modalPhoneNumber.value = '';
      modalPhoneName.value = '';
      modal.style.display = "none";
      modalButtonSend.innerText = 'Llamadme';
      
      setTimeout(function(){
        alert('¡Tus datos se han enviado con éxito! Nos pondremos en contacto contigo pronto'); 
      }, 2000);

    }, function(error) {
      console.log('FAILED...', error);
    });

  }
}

// Abre el modal desde la sección de entrevista
ctaPhoneButton.onclick = function () {
  modal.style.display = 'block';
}

// Abre el modal desde la navegación
ctaNav.onclick = function () {
  modal.style.display = 'block';
}

// Acepta las cookies, guardamos su consentimiento en localstorage
cookieAcceptButton.onclick = function () {
  localStorage.setItem("cookie-consent", "accepted");
  cookieBanner.style.display = 'none';
}
