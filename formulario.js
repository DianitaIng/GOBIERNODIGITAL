    document.addEventListener("DOMContentLoaded", function () {
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const messageInput = document.getElementById("message");
      const submitButton = document.querySelector("button[type='submit']");
      const form = document.getElementById("contact-form");
// Función para habilitar/deshabilitar el botón de enviar
        function checkFormFields() {
        if (
            nameInput.value.trim() !== "" && 
            emailInput.value.trim() !== "" && 
            messageInput.value.trim() !== ""
         ) {
          submitButton.disabled = false; 
        } else {
          submitButton.disabled = true; 
        }
      }

      submitButton.disabled = true;

      nameInput.addEventListener("input",checkFormFields);
      emailInput.addEventListener("input",checkFormFields);
      messageInput.addEventListener("input",checkFormFields);

// Evento al enviar el formulario
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      alert("Formulario enviado correctamente"); 
      form.reset();
      submitButton.disabled = true;
    });

    });
