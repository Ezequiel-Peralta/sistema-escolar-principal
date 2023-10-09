$(document).ready(function() {
   

});
// document.addEventListener('DOMContentLoaded', (event) => {
document.addEventListener("DOMContentLoaded", function () {
    const URL_CP = "http://localhost:58805/api/CP/";

    const container = document.getElementById('container');
    const registerBtn = document.getElementById('btn-register');
    const loginBtn = document.getElementById('btn-login');
    const signup = document.querySelector('.sign-up');
    const signin = document.querySelector('.sign-in');

    registerBtn.addEventListener('click', () => {
        container.classList.add("active");
        signin.classList.add("hiddenElement");
        signup.classList.remove("hiddenElement");
    });
    
    loginBtn.addEventListener('click', () => {
        container.classList.remove("active");
        signup.classList.add("hiddenElement");
        signin.classList.remove("hiddenElement");
    });

    $("#showPassBtn").click(function() {
        const passInput = $("#txtpass");
        const passType = passInput.attr("type");

        if (passType === "password") {
            passInput.attr("type", "text");
            $(this).html('<i class="fa fa-eye" aria-hidden="true" style="color: #ae0e30;"></i>');
        } else {
            passInput.attr("type", "password");
            $(this).html('<i class="fa fa-eye-slash" aria-hidden="true" style="color: #ae0e30;"></i>');
        }
    });

    $("#showPassBtnRegister").click(function() {
        const passInputRegister = $("#password");
        const passType = passInputRegister.attr("type");

        if (passType === "password") {
            passInputRegister.attr("type", "text");
            $(this).html('<i class="fa fa-eye" aria-hidden="true" style="color: #ae0e30;"></i>');
        } else {
            passInputRegister.attr("type", "password");
            $(this).html('<i class="fa fa-eye-slash" aria-hidden="true" style="color: #ae0e30;"></i>');
        }
    });

    
    $("#showPassconfirmBtnRegister").click(function() {
        const passconfirmInputRegister = $("#confirmpassword");
        const passType = passconfirmInputRegister.attr("type");

        if (passType === "password") {
            passconfirmInputRegister.attr("type", "text");
            $(this).html('<i class="fa fa-eye" aria-hidden="true" style="color: #ae0e30;"></i>');
        } else {
            passconfirmInputRegister.attr("type", "password");
            $(this).html('<i class="fa fa-eye-slash" aria-hidden="true" style="color: #ae0e30;"></i>');
        }
    });

    const btnOpenTerms = document.querySelector('.btn-open-terms');
    const btnCloseTerms = document.querySelector('.btn-close-terms');
    const wrapTerms = document.querySelector(".wrap-terms");
    

    btnOpenTerms.addEventListener('click', () => {
        wrapTerms.classList.remove("hiddenElement");
        MostrarBackgroundDesenfocado();
    });
    btnCloseTerms.addEventListener('click', () => {
        wrapTerms.classList.add("hiddenElement");
        OcultarBackgroundDesenfocado();
    });



    // confirmemail.addEventListener('click', () => {
    //     var codeLength = 12;
    //     var code = "";
    //     for (var i = 0; i <= codeLength; i++) {
    //         var randomNumber = Math.floor(Math.random() * chars.length);
    //         code += chars.substring(randomNumber, randomNumber +1);
    //     }
    //     console.log(code);
    // });
    
    

    /*BACKGROUND CON DESENFOQUE*/
    function MostrarBackgroundDesenfocado() {
        var BackgroundDesenfocado = document.createElement("div");
        BackgroundDesenfocado.classList.add("Background-Desenfocado");
    
        /*
        var elementoPadre = document.querySelector("contenido");
        elementoPadre.appendChild(BackgroundDesenfocado);*/
        document.body.appendChild(BackgroundDesenfocado);
    
    }
    /*QUITAR BACKGROUND CON DESENFOQUE*/
    function OcultarBackgroundDesenfocado() {
        var BackgroundDesenfocado = document.querySelector(".Background-Desenfocado");
        if (BackgroundDesenfocado) {
            BackgroundDesenfocado.parentNode.removeChild(BackgroundDesenfocado);
        }
    
    }
    
    const inputDatetime = document.getElementById('datetime');
    const lblDatetimeElements = document.getElementsByClassName('lbl-datetime');
    const inputGender = document.getElementById('gender');
    const lblGenderElements = document.getElementsByClassName('lbl-gender');
    const inputRelationship = document.getElementById('relationship');
    const lblRelationshipElements = document.getElementsByClassName('lbl-relationship');
    const inputTypeuser = document.getElementById('typeuser');
    const lblTypeuserElements = document.getElementsByClassName('lbl-typeuser');
    const inputLocalidad = document.getElementById('localidad');
    const lblLocalidadElements = document.getElementsByClassName('lbl-localidad');

    inputLocalidad.addEventListener('focus', () => {
        // Aplica el box-shadow y la transición a cada elemento lbl-datetime
        for (let i = 0; i < lblLocalidadElements.length; i++) {
            lblLocalidadElements[i].style.boxShadow = '-1.28pt 0 0.1pt 0.8pt #ae0e30';
            lblLocalidadElements[i].style.transition = 'all 200ms ease-in';
        }

        // Aplica el box-shadow y la transición a input-datetime
        inputLocalidad.style.boxShadow = '1.28pt 0 0.1pt 0.8pt #ae0e30';
        inputLocalidad.style.transition = 'all 200ms ease-in';
    });

    // Agrega un evento blur al input-datetime para quitar la sombra cuando se pierde el foco
    inputLocalidad.addEventListener('blur', () => {
        // Quita el box-shadow y la transición de cada elemento lbl-datetime
        for (let i = 0; i < lblLocalidadElements.length; i++) {
            lblLocalidadElements[i].style.boxShadow = 'none';
            lblLocalidadElements[i].style.transition = 'none';
        }

        // Quita el box-shadow y la transición de input-datetime
        inputLocalidad.style.boxShadow = 'none';
        inputLocalidad.style.transition = 'none';
    });


    // Agrega un evento focus al input-datetime
    inputDatetime.addEventListener('focus', () => {
        // Aplica el box-shadow y la transición a cada elemento lbl-datetime
        for (let i = 0; i < lblDatetimeElements.length; i++) {
            lblDatetimeElements[i].style.boxShadow = '-1.28pt 0 0.1pt 0.8pt #ae0e30';
            lblDatetimeElements[i].style.transition = 'all 200ms ease-in';
        }

        // Aplica el box-shadow y la transición a input-datetime
        inputDatetime.style.boxShadow = '1.28pt 0 0.1pt 0.8pt #ae0e30';
        inputDatetime.style.transition = 'all 200ms ease-in';
    });

    // Agrega un evento blur al input-datetime para quitar la sombra cuando se pierde el foco
    inputDatetime.addEventListener('blur', () => {
        // Quita el box-shadow y la transición de cada elemento lbl-datetime
        for (let i = 0; i < lblDatetimeElements.length; i++) {
            lblDatetimeElements[i].style.boxShadow = 'none';
            lblDatetimeElements[i].style.transition = 'none';
        }

        // Quita el box-shadow y la transición de input-datetime
        inputDatetime.style.boxShadow = 'none';
        inputDatetime.style.transition = 'none';
    });


    inputGender.addEventListener('focus', () => {
        // Aplica el box-shadow y la transición a cada elemento lbl-datetime
        for (let i = 0; i < lblGenderElements.length; i++) {
            lblGenderElements[i].style.boxShadow = '-1.28pt 0 0.1pt 0.8pt #ae0e30';
            lblGenderElements[i].style.transition = 'all 200ms ease-in';
        }

        // Aplica el box-shadow y la transición a input-datetime
        inputGender.style.boxShadow = '1.28pt 0 0.1pt 0.8pt #ae0e30';
        inputGender.style.transition = 'all 200ms ease-in';
    });

    // Agrega un evento blur al input-datetime para quitar la sombra cuando se pierde el foco
    inputGender.addEventListener('blur', () => {
        // Quita el box-shadow y la transición de cada elemento lbl-datetime
        for (let i = 0; i < lblGenderElements.length; i++) {
            lblGenderElements[i].style.boxShadow = 'none';
            lblGenderElements[i].style.transition = 'none';
        }

        // Quita el box-shadow y la transición de input-datetime
        inputGender.style.boxShadow = 'none';
        inputGender.style.transition = 'none';
    });


    inputRelationship.addEventListener('focus', () => {
        // Aplica el box-shadow y la transición a cada elemento lbl-datetime
        for (let i = 0; i < lblRelationshipElements.length; i++) {
            lblRelationshipElements[i].style.boxShadow = '-1.28pt 0 0.1pt 0.8pt #ae0e30';
            lblRelationshipElements[i].style.transition = 'all 200ms ease-in';
        }

        // Aplica el box-shadow y la transición a input-datetime
        inputRelationship.style.boxShadow = '1.28pt 0 0.1pt 0.8pt #ae0e30';
        inputRelationship.style.transition = 'all 200ms ease-in';
    });

    // Agrega un evento blur al input-datetime para quitar la sombra cuando se pierde el foco
    inputRelationship.addEventListener('blur', () => {
        // Quita el box-shadow y la transición de cada elemento lbl-datetime
        for (let i = 0; i < lblRelationshipElements.length; i++) {
            lblRelationshipElements[i].style.boxShadow = 'none';
            lblRelationshipElements[i].style.transition = 'none';
        }

        // Quita el box-shadow y la transición de input-datetime
        inputRelationship.style.boxShadow = 'none';
        inputRelationship.style.transition = 'none';
    });


    inputTypeuser.addEventListener('focus', () => {
        // Aplica el box-shadow y la transición a cada elemento lbl-datetime
        for (let i = 0; i < lblTypeuserElements.length; i++) {
            lblTypeuserElements[i].style.boxShadow = '-1.28pt 0 0.1pt 0.8pt #ae0e30';
            lblTypeuserElements[i].style.transition = 'all 200ms ease-in';
        }

        // Aplica el box-shadow y la transición a input-datetime
        inputTypeuser.style.boxShadow = '1.28pt 0 0.1pt 0.8pt #ae0e30';
        inputTypeuser.style.transition = 'all 200ms ease-in';
    });

    // Agrega un evento blur al input-datetime para quitar la sombra cuando se pierde el foco
    inputTypeuser.addEventListener('blur', () => {
        // Quita el box-shadow y la transición de cada elemento lbl-datetime
        for (let i = 0; i < lblTypeuserElements.length; i++) {
            lblTypeuserElements[i].style.boxShadow = 'none';
            lblTypeuserElements[i].style.transition = 'none';
        }

        // Quita el box-shadow y la transición de input-datetime
        inputTypeuser.style.boxShadow = 'none';
        inputTypeuser.style.transition = 'none';
    });

  

    const inputName = document.getElementById('fname');
    const failedIconName = document.querySelector('.name-checkout-failed');
    const correctIconName = document.querySelector('.name-checkout-correct');
    const tooltipErrorName = document.querySelector('.tooltip-error-name');
    let stateName = false;

    const inputLastname = document.getElementById('lname');
    const failedIconLastname = document.querySelector('.lastname-checkout-failed');
    const correctIconLastname= document.querySelector('.lastname-checkout-correct');
    const tooltipErrorLastname = document.querySelector('.tooltip-error-lastname');
    let stateLastname = false;

    const inputDni = document.getElementById('dni');
    const failedIconDni = document.querySelector('.dni-checkout-failed');
    const correctIconDni= document.querySelector('.dni-checkout-correct');
    const tooltipErrorDni = document.querySelector('.tooltip-error-dni');
    let stateDni = false;

    const inputPhone = document.getElementById('phone');
    const failedIconPhone = document.querySelector('.phone-checkout-failed');
    const correctIconPhone = document.querySelector('.phone-checkout-correct');
    const tooltipErrorPhone = document.querySelector('.tooltip-error-phone');
    let statePhone = false;

    const inputDateTime = document.getElementById('datetime');
    const failedIconDatetime = document.querySelector('.datetime-checkout-failed');
    const correctIconDatetime = document.querySelector('.datetime-checkout-correct');
    const tooltipErrorDatetime = document.querySelector('.tooltip-error-datetime');
    let stateDatetime = false;

    const selectGender = document.getElementById('gender');
    const failedIconGender = document.querySelector('.gender-checkout-failed');
    const correctIconGender = document.querySelector('.gender-checkout-correct');
    const tooltipErrorGender = document.querySelector('.tooltip-error-gender');
    let stateGender = false;

    const inputPostalcode = document.getElementById('postalcode');
    const failedIconPostalcode = document.querySelector('.postalcode-checkout-failed');
    const correctIconPostalcode = document.querySelector('.postalcode-checkout-correct');
    const tooltipErrorPostalcode = document.querySelector('.tooltip-error-postalcode');
    let statePostalcode = false;

    const selectLocalidad = document.getElementById('localidad');
    const failedIconLocalidad = document.querySelector('.localidad-checkout-failed');
    const correctIconLocalidad = document.querySelector('.localidad-checkout-correct');
    const tooltipErrorLocalidad = document.querySelector('.tooltip-error-localidad');
    let stateLocalidad = false;

    const inputStreet = document.getElementById('street');
    const failedIconStreet = document.querySelector('.street-checkout-failed');
    const correctIconStreet = document.querySelector('.street-checkout-correct');
    const tooltipErrorStreet = document.querySelector('.tooltip-error-street');
    let stateStreet = false;

    const inputStreetnumber = document.getElementById('streetnumber');
    const failedIconStreetnumber = document.querySelector('.streetnumber-checkout-failed');
    const correctIconStreetnumber = document.querySelector('.streetnumber-checkout-correct');
    const tooltipErrorStreetnumber = document.querySelector('.tooltip-error-streetnumber');
    let stateStreetnumber = false;

    const inputEmail = document.getElementById('email');
    const failedIconEmail = document.querySelector('.email-checkout-failed');
    const correctIconEmail = document.querySelector('.email-checkout-correct');
    const tooltipErrorEmail = document.querySelector('.tooltip-error-email');
    let stateEmail = false;

    const inputConfirmemail = document.getElementById('confirmemail');
    let stateConfirmemail = false;

    const inputMatricula = document.getElementById('matricula');
    const failedIconMatricula = document.querySelector('.matricula-checkout-failed');
    const correctIconMatricula = document.querySelector('.matricula-checkout-correct');
    const tooltipErrorMatricula = document.querySelector('.tooltip-error-matricula');
    let stateMatricula = false;

    const selectTypeuser = document.getElementById('typeuser');
    const failedIconTypeuser = document.querySelector('.typeuser-checkout-failed');
    const correctIconTypeuser = document.querySelector('.typeuser-checkout-correct');
    const tooltipErrorTypeuser = document.querySelector('.tooltip-error-typeuser');
    let stateTypeuser = false;

    const inputPassword = document.getElementById('password');
    const failedIconPassword = document.querySelector('.password-checkout-failed');
    const correctIconPassword = document.querySelector('.password-checkout-correct');
    const tooltipErrorPassword = document.querySelector('.tooltip-error-password');
    let statePassword = false;

    const inputConfirmpassword = document.getElementById('confirmpassword');
    const failedIconConfirmpassword = document.querySelector('.confirmpassword-checkout-failed');
    const correctIconConfirmpassword = document.querySelector('.confirmpassword-checkout-correct');
    const tooltipErrorConfirmpassword = document.querySelector('.tooltip-error-confirmpassword');
    let stateConfirmpassword = false;

    const btnRegister = document.getElementsByClassName("btn-register");
    const checkboxTc = document.getElementById("tc");
    let stateCheckboxTc = false;

    tooltipErrorName.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorLastname.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorDni.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorPhone.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorDatetime.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorGender.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorPostalcode.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorStreet.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorStreetnumber.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorEmail.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorMatricula.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorTypeuser.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorPassword.textContent = "Campo inválido. No puede dejar el campo vacío.";
    tooltipErrorConfirmpassword.textContent = "Campo inválido. No puede dejar el campo vacío.";
   
    inputName.addEventListener('focus', () => {
        if (!stateName) {
            failedIconName.classList.remove('hiddenElement');
            correctIconName.classList.add('hiddenElement');
        } else {
            failedIconName.classList.add('hiddenElement');
            correctIconName.classList.remove('hiddenElement');
        }
    });
    inputName.addEventListener('input', () => {
        const valueName = inputName.value.trim(); 
        
        if (valueName === '') {
            failedIconName.classList.remove('hiddenElement');
            correctIconName.classList.add('hiddenElement');
            tooltipErrorName.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateName = false;
        } else if (/^[A-Za-z\sáéíóúüñÁÉÍÓÚÜÑ]*$/.test(valueName)) {
            failedIconName.classList.add('hiddenElement');
            correctIconName.classList.remove('hiddenElement');
            stateName = true;
        } else {
            failedIconName.classList.remove('hiddenElement');
            correctIconName.classList.add('hiddenElement');
            tooltipErrorName.textContent = "Campo inválido. Ingrese solo letras.";
            stateName = false;
        }
        checkState1();
    });

    inputLastname.addEventListener('focus', () => {
        if (!stateLastname) {
            failedIconLastname.classList.remove('hiddenElement');
            correctIconLastname.classList.add('hiddenElement');
        } else {
            failedIconLastname.classList.add('hiddenElement');
            correctIconLastname.classList.remove('hiddenElement');
        }
    });
    
    inputLastname.addEventListener('input', () => {
        const valueLastname = inputLastname.value.trim(); 
        
        if (valueLastname === '') {
            failedIconLastname.classList.remove('hiddenElement');
            correctIconLastname.classList.add('hiddenElement');
            tooltipErrorLastname.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateLastname = false;
        } else if (/^[A-Za-z\sáéíóúüñÁÉÍÓÚÜÑ]*$/.test(valueLastname)) {
            failedIconLastname.classList.add('hiddenElement');
            correctIconLastname.classList.remove('hiddenElement');

            stateLastname = true;
        } else {
            failedIconLastname.classList.remove('hiddenElement');
            correctIconLastname.classList.add('hiddenElement');
            tooltipErrorLastname.textContent = "Campo inválido. Ingrese solo letras.";
            stateLastname = false;
        }
        checkState1();
    });

    inputDni.addEventListener('focus', () => {
        if (!stateDni) {
            failedIconDni.classList.remove('hiddenElement');
            correctIconDni.classList.add('hiddenElement');
        } else {
            failedIconDni.classList.add('hiddenElement');
            correctIconDni.classList.remove('hiddenElement');
        }
    });
    inputDni.addEventListener('input', () => {
        const valueDni = inputDni.value.trim();
        
        if (valueDni === '') {
            failedIconDni.classList.remove('hiddenElement');
            correctIconDni.classList.add('hiddenElement');
            tooltipErrorDni.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateDni = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueDni)) && (/[A-Za-z]/.test(valueDni))) {
            // El campo contiene símbolos y letras juntas
            failedIconDni.classList.remove('hiddenElement');
            correctIconDni.classList.add('hiddenElement');
            tooltipErrorDni.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            stateDni = false;
        } else if (/[A-Za-z]/.test(valueDni)) {
            // El campo contiene solo letras
            failedIconDni.classList.remove('hiddenElement');
            correctIconDni.classList.add('hiddenElement');
            tooltipErrorDni.textContent = "Campo inválido. No debe contener letras.";
            stateDni = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueDni)) {
            // El campo contiene símbolos
            failedIconDni.classList.remove('hiddenElement');
            correctIconDni.classList.add('hiddenElement');
            tooltipErrorDni.textContent = "Campo inválido. No puede contener símbolos.";
            stateDni = false;
        }  else if (/^[0-9]+$/.test(valueDni) && (valueDni.length === 7 || valueDni.length === 8)) {
            // El campo contiene solo números y está en el rango de 7 u 8 dígitos
            failedIconDni.classList.add('hiddenElement');
            correctIconDni.classList.remove('hiddenElement');
            tooltipErrorDni.textContent = ""; // Borra el mensaje de error al ser válido
            stateDni = true;
        } else {
            failedIconDni.classList.remove('hiddenElement');
            correctIconDni.classList.add('hiddenElement');
            tooltipErrorDni.textContent = "Campo inválido. No pueden introducir más de 8 dígitos.";
            stateDni = false;
        }
        checkState1();
    });

    inputPhone.addEventListener('focus', () => {
        if (!statePhone) {
            failedIconPhone.classList.remove('hiddenElement');
            correctIconPhone.classList.add('hiddenElement');
        } else {
            failedIconPhone.classList.add('hiddenElement');
            correctIconPhone.classList.remove('hiddenElement');
        }
    });
    inputPhone.addEventListener('input', () => {
        const valuePhone = inputPhone.value.trim();
        
        if (valuePhone === '') {
            failedIconPhone.classList.remove('hiddenElement');
            correctIconPhone.classList.add('hiddenElement');
            tooltipErrorPhone.textContent = "Campo inválido. No puede dejar el campo vacío.";
            statePhone = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePhone)) && (/[A-Za-z]/.test(valuePhone))) {
            // El campo contiene símbolos y letras juntas
            failedIconPhone.classList.remove('hiddenElement');
            correctIconPhone.classList.add('hiddenElement');
            tooltipErrorPhone.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            statePhone = false;
        } else if (/[A-Za-z]/.test(valuePhone)) {
            // El campo contiene solo letras
            failedIconPhone.classList.remove('hiddenElement');
            correctIconPhone.classList.add('hiddenElement');
            tooltipErrorPhone.textContent = "Campo inválido. No debe contener letras.";
            statePhone = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePhone)) {
            // El campo contiene símbolos
            failedIconPhone.classList.remove('hiddenElement');
            correctIconPhone.classList.add('hiddenElement');
            tooltipErrorPhone.textContent = "Campo inválido. No puede contener símbolos.";
            statePhone = false;
        }  else if (/^[0-9]+$/.test(valuePhone) && (valuePhone.length >= 7 && valuePhone.length <= 10)) {
            // El campo contiene solo números y está en el rango de 7 u 10 dígitos
            failedIconPhone.classList.add('hiddenElement');
            correctIconPhone.classList.remove('hiddenElement');
            tooltipErrorPhone.textContent = ""; // Borra el mensaje de error al ser válido
            statePhone = true;
        } else if (valuePhone.length <= 7) {
            failedIconPhone.classList.remove('hiddenElement');
            correctIconPhone.classList.add('hiddenElement');
            tooltipErrorPhone.textContent = "Campo inválido. Cantidad de dígitos insuficientes.";
            statePhone = false;
        } else {
            failedIconPhone.classList.remove('hiddenElement');
            correctIconPhone.classList.add('hiddenElement');
            tooltipErrorPhone.textContent = "Campo inválido. No pueden introducir más de 10 dígitos.";
            statePhone = false;
        }
        checkState1();
    });

    inputDatetime.addEventListener('focus', () => {
        if (!stateDatetime) {
            failedIconDatetime.classList.remove('hiddenElement');
            correctIconDatetime.classList.add('hiddenElement');
        } else {
            failedIconDatetime.classList.add('hiddenElement');
            correctIconDatetime.classList.remove('hiddenElement');
        }
    });
    // inputDatetime.addEventListener('blur', () => {
    //     // Cuando el campo pierde el foco, oculta los íconos
    //     failedIconDatetime.classList.add('hiddenElement');
    //     correctIconDatetime.classList.add('hiddenElement');
    // });
    inputDateTime.addEventListener('input', () => {
        const selectedDate = new Date(inputDateTime.value);
        const minDate = new Date('1930-01-01'); 
        const maxDate = new Date('2005-12-31'); 
    
        if (!isNaN(selectedDate.getTime()) && selectedDate >= minDate && selectedDate <= maxDate) {
            failedIconDatetime.classList.add('hiddenElement');
            correctIconDatetime.classList.remove('hiddenElement');
            tooltipErrorDatetime.textContent = ""; 
            stateDatetime = true;
        } else if (selectedDate <= minDate || selectedDate > maxDate) {
            failedIconDatetime.classList.remove('hiddenElement');
            correctIconDatetime.classList.add('hiddenElement');
            tooltipErrorDatetime.textContent = "Campo inválido. Debe seleccionar una fecha válida.";
            stateDatetime = false;
        }
        checkState1();
    });

    selectGender.addEventListener('focus', () => {
        if (!stateGender) {
            failedIconGender.classList.remove('hiddenElement');
            correctIconGender.classList.add('hiddenElement');
        } else {
            failedIconGender.classList.add('hiddenElement');
            correctIconGender.classList.remove('hiddenElement');
        }
    });

    selectGender.addEventListener('input', () => {
        const selectedValue = selectGender.value;
    
        if (selectedValue === '') {
            // No se ha seleccionado ningún valor
            failedIconGender.classList.remove('hiddenElement');
            correctIconGender.classList.add('hiddenElement');
            tooltipErrorGender.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateGender = false;
        } else if (selectedValue != '') {
            // Se ha seleccionado un valor
            failedIconGender.classList.add('hiddenElement');
            correctIconGender.classList.remove('hiddenElement');
            stateGender = true;
        }
        checkState1();
    });

    const selectElementLocalidad = document.getElementById("localidad");

    inputPostalcode.addEventListener('focus', () => {
        if (!statePostalcode) {
            failedIconPostalcode.classList.remove('hiddenElement');
            correctIconPostalcode.classList.add('hiddenElement');
        } else {
            failedIconPostalcode.classList.add('hiddenElement');
            correctIconPostalcode.classList.remove('hiddenElement');
        }
    });
    inputPostalcode.addEventListener('input', () => {
        const valuePostalcode = inputPostalcode.value.trim();
        
        if (valuePostalcode === '') {
            failedIconPostalcode.classList.remove('hiddenElement');
            correctIconPostalcode.classList.add('hiddenElement');
            tooltipErrorPostalcode.textContent = "Campo inválido. No puede dejar el campo vacío.";
            statePostalcode = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePostalcode)) && (/[A-Za-z]/.test(valuePostalcode))) {
            // El campo contiene símbolos y letras juntas
            failedIconPostalcode.classList.remove('hiddenElement');
            correctIconPostalcode.classList.add('hiddenElement');
            tooltipErrorPostalcode.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            statePostalcode = false;

            failedIconLocalidad.classList.add('hiddenElement');
            correctIconLocalidad.classList.add('hiddenElement');
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; // Puedes asignar un valor vacío o algún valor predeterminado si es necesario
            selectOption.textContent = "Seleccionar localidad";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        } else if (/[A-Za-z]/.test(valuePostalcode)) {
            // El campo contiene solo letras
            failedIconPostalcode.classList.remove('hiddenElement');
            correctIconPostalcode.classList.add('hiddenElement');
            tooltipErrorPostalcode.textContent = "Campo inválido. No debe contener letras.";
            statePostalcode = false;

            failedIconLocalidad.classList.add('hiddenElement');
            correctIconLocalidad.classList.add('hiddenElement');
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; // Puedes asignar un valor vacío o algún valor predeterminado si es necesario
            selectOption.textContent = "Seleccionar localidad";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valuePostalcode)) {
            // El campo contiene símbolos
            failedIconPostalcode.classList.remove('hiddenElement');
            correctIconPostalcode.classList.add('hiddenElement');
            tooltipErrorPostalcode.textContent = "Campo inválido. No puede contener símbolos.";
            statePostalcode = false;

            failedIconLocalidad.classList.add('hiddenElement');
            correctIconLocalidad.classList.add('hiddenElement');
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; // Puedes asignar un valor vacío o algún valor predeterminado si es necesario
            selectOption.textContent = "Seleccionar localidad";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        }  else if (/^[0-9]+$/.test(valuePostalcode) && (valuePostalcode.length === 4)) {
            // El campo contiene solo números y está en el rango de 7 u 10 dígitos
            failedIconPostalcode.classList.add('hiddenElement');
            correctIconPostalcode.classList.remove('hiddenElement');
            tooltipErrorPostalcode.textContent = ""; // Borra el mensaje de error al ser válido
            statePostalcode = true;
            LocalidadValue(valuePostalcode);
            validarCoordenadas();
        } else if (valuePostalcode.length < 4) {
            failedIconPostalcode.classList.remove('hiddenElement');
            correctIconPostalcode.classList.add('hiddenElement');
            tooltipErrorPostalcode.textContent = "Campo inválido. Cantidad de dígitos insuficientes.";
            statePostalcode = false;

            failedIconLocalidad.classList.add('hiddenElement');
            correctIconLocalidad.classList.add('hiddenElement');
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; // Puedes asignar un valor vacío o algún valor predeterminado si es necesario
            selectOption.textContent = "Seleccionar localidad";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        } else {
            failedIconPostalcode.classList.remove('hiddenElement');
            correctIconPostalcode.classList.add('hiddenElement');
            tooltipErrorPostalcode.textContent = "Campo inválido. No pueden introducir más de 4 dígitos.";
            statePostalcode = false;

            failedIconLocalidad.classList.add('hiddenElement');
            correctIconLocalidad.classList.add('hiddenElement');
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            selectElementLocalidad.innerHTML = '';
            const selectOption = document.createElement("option");
            selectOption.value = ""; // Puedes asignar un valor vacío o algún valor predeterminado si es necesario
            selectOption.textContent = "Seleccionar localidad";
            selectOption.disabled = true;
            selectOption.selected = true;
            selectElementLocalidad.appendChild(selectOption);
            stateLocalidad = false;
        }
        checkState2();
    });

    selectLocalidad.addEventListener('focus', () => {
        if (!stateLocalidad) {
            failedIconLocalidad.classList.remove('hiddenElement');
            correctIconLocalidad.classList.add('hiddenElement');
        } else {
            failedIconLocalidad.classList.add('hiddenElement');
            correctIconLocalidad.classList.remove('hiddenElement');
        }
    });

    selectLocalidad.addEventListener('input', () => {
        const selectedValueLocalidad = selectLocalidad.value;
    
        if (selectedValueLocalidad === '') {
            // No se ha seleccionado ningún valor
            failedIconLocalidad.classList.remove('hiddenElement');
            correctIconLocalidad.classList.add('hiddenElement');
            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateLocalidad = false;
        } else if (selectedValueLocalidad != '') {
            // Se ha seleccionado un valor
            failedIconLocalidad.classList.add('hiddenElement');
            correctIconLocalidad.classList.remove('hiddenElement');
            stateLocalidad = true;
            validarCoordenadas();
        }
        checkState2();
    });

    inputStreet.addEventListener('focus', () => {
        if (!stateStreet) {
            failedIconStreet.classList.remove('hiddenElement');
            correctIconStreet.classList.add('hiddenElement');
        } else {
            failedIconStreet.classList.add('hiddenElement');
            correctIconStreet.classList.remove('hiddenElement');
        }
    });
    inputStreet.addEventListener('input', () => {
        const valueStreet = inputStreet.value.trim(); 
        
        if (valueStreet === '') {
            failedIconStreet.classList.remove('hiddenElement');
            correctIconStreet.classList.add('hiddenElement');
            tooltipErrorStreet.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateStreet = false;
        } else if (/^[A-Za-z\sáéíóúüñÁÉÍÓÚÜÑ]*$/.test(valueStreet)) {
            failedIconStreet.classList.add('hiddenElement');
            correctIconStreet.classList.remove('hiddenElement');
            stateStreet = true;
            validarCoordenadas();
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreet)) && (/[0-9]/.test(valueStreet))) {
            failedIconStreet.classList.remove('hiddenElement');
            correctIconStreet.classList.add('hiddenElement');
            tooltipErrorStreet.textContent = "Campo inválido. No puede ingresar símbolos ni números.";
            stateStreet = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreet))) {
            failedIconStreet.classList.remove('hiddenElement');
            correctIconStreet.classList.add('hiddenElement');
            tooltipErrorStreet.textContent = "Campo inválido. No puede ingresar símbolos.";
            stateStreet = false;
        } else {
            failedIconStreet.classList.remove('hiddenElement');
            correctIconStreet.classList.add('hiddenElement');
            tooltipErrorStreet.textContent = "Campo inválido. No puede ingresar números.";
            stateStreet = false;
        }
        checkState2();
    });
    

    inputStreetnumber.addEventListener('focus', () => {
        if (!stateStreetnumber) {
            failedIconStreetnumber.classList.remove('hiddenElement');
            correctIconStreetnumber.classList.add('hiddenElement');
        } else {
            failedIconStreetnumber.classList.add('hiddenElement');
            correctIconStreetnumber.classList.remove('hiddenElement');
        }
    });
    inputStreetnumber.addEventListener('input', () => {
        const valueStreetnumber = inputStreetnumber.value.trim();
        
        if (valueStreetnumber === '') {
            failedIconStreetnumber.classList.remove('hiddenElement');
            correctIconStreetnumber.classList.add('hiddenElement');
            tooltipErrorStreetnumber.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateStreetnumber = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreetnumber)) && (/[A-Za-z]/.test(valueStreetnumber))) {
            // El campo contiene símbolos y letras juntas
            failedIconStreetnumber.classList.remove('hiddenElement');
            correctIconStreetnumber.classList.add('hiddenElement');
            tooltipErrorStreetnumber.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            stateStreetnumber = false;
        } else if (/[A-Za-z]/.test(valueStreetnumber)) {
            // El campo contiene solo letras
            failedIconStreetnumber.classList.remove('hiddenElement');
            correctIconStreetnumber.classList.add('hiddenElement');
            tooltipErrorStreetnumber.textContent = "Campo inválido. No debe contener letras.";
            stateStreetnumber = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueStreetnumber)) {
            // El campo contiene símbolos
            failedIconStreetnumber.classList.remove('hiddenElement');
            correctIconStreetnumber.classList.add('hiddenElement');
            tooltipErrorStreetnumber.textContent = "Campo inválido. No puede contener símbolos.";
            stateStreetnumber = false;
        }  else if (/^[0-9]+$/.test(valueStreetnumber) && (valueStreetnumber.length === 3)) {
            failedIconStreetnumber.classList.add('hiddenElement');
            correctIconStreetnumber.classList.remove('hiddenElement');
            tooltipErrorStreetnumber.textContent = ""; // Borra el mensaje de error al ser válido
            stateStreetnumber = true;
            validarCoordenadas();
        } else {
            failedIconStreetnumber.classList.remove('hiddenElement');
            correctIconStreetnumber.classList.add('hiddenElement');
            tooltipErrorStreetnumber.textContent = "Campo inválido. No pueden introducir más de 3 dígitos.";
            stateStreetnumber = false;
        }
        checkState2();
    });

    inputEmail.addEventListener('focus', () => {
        if (!stateEmail) {
            failedIconEmail.classList.remove('hiddenElement');
            correctIconEmail.classList.add('hiddenElement');
        } else {
            failedIconEmail.classList.add('hiddenElement');
            correctIconEmail.classList.remove('hiddenElement');
        }
    });
    inputEmail.addEventListener('input', () => {
        const valueEmail = inputEmail.value.trim();
        const emailRegex = /^[a-zA-Z0-9._\-!#&~\u00C0-\u017F]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (valueEmail === '') {
            failedIconEmail.classList.remove('hiddenElement');
            correctIconEmail.classList.add('hiddenElement');
            tooltipErrorEmail.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateEmail = false;
        } else if (emailRegex.test(valueEmail)) {
            failedIconEmail.classList.add('hiddenElement');
            correctIconEmail.classList.remove('hiddenElement');
            tooltipErrorEmail.textContent = ""; 
            stateEmail = true;
        } else {
            failedIconEmail.classList.remove('hiddenElement');
            correctIconEmail.classList.add('hiddenElement');
            tooltipErrorEmail.textContent = "Campo inválido. Dirección de correo electrónico inválida.";
            stateEmail = false;
        }
        checkState4();
    });

    inputConfirmemail.addEventListener('focus', () => {
        if (stateEmail) {
            inputConfirmemail.classList.remove('btnDisabled');
        } else {
            inputConfirmemail.classList.add('btnDisabled');
        }
    });
    inputConfirmemail.addEventListener('mouseenter', () => {
        if (stateEmail) {
            inputConfirmemail.classList.remove('btnDisabled');
        } else {
            inputConfirmemail.classList.add('btnDisabled');
        }
    });

    inputConfirmemail.addEventListener('click', () => {
        if (stateEmail) {
            (function() {
                emailjs.init("ZMo33kR_cmvd-2_zv");
            })();
    
            var serviceID = "service_v1mglzi";
            var templateID = "template_t0rgu5p";
    
            const confirmemail = document.getElementById("confirmemail");
            var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHJKMNOPQRSTUVWXYZ";
            var codeLength = 5;
            var code = "";
            for (var i = 0; i <= codeLength; i++) {
                var randomNumber = Math.floor(Math.random() * chars.length);
                code += chars.substring(randomNumber, randomNumber +1);
            }
            console.log(code);
    
            // var params = {
            //     sendername: document.querySelector("#name").value,
            //     senderemail: document.querySelector("#email").value,
            //     subject: document.querySelector("#subject").value,
            //     message: document.querySelector("#message").value
            // };
            var params = {
                sendername: "SISTEMA ESCOLAR DEL INSTITUTO PRIVADO DEAN FUNES",
                senderemail: document.querySelector("#email").value,
                subject: "Código de autenticación",
                message: code
            };
            emailjs.send(serviceID, templateID, params)
            .then( res => {
                // alert("Thank you, " + params["sendername"] + "! Enviamos tu mensajee")
                // var userInput = prompt("Por favor, ingresa el código:");
                var userEmail = document.querySelector("#email").value;

                document.querySelector("#email-sender").textContent = userEmail;
                document.querySelector(".contentModal").classList.remove("hiddenElement");
                const modalPopupBtns = document.getElementsByClassName("modalPopupBtn");
                
                const acceptBtns = document.getElementsByClassName("accept-btn");
                MostrarBackgroundDesenfocado();
               
    
                // Recorre todos los botones con la clase "modalPopupBtn"
                for (const modalPopupBtn of modalPopupBtns) {
                    modalPopupBtn.addEventListener('click', () => {
                        const userInput = document.getElementById("inputCode").value;
                        const confirmEmailElement = document.querySelector(".confirmemail");
    
                        if (userInput === code) {
                            OcultarBackgroundDesenfocado();
                            document.querySelector(".contentModal").classList.add("hiddenElement");
                            document.querySelector(".confirmemail").style.backgroundColor = "#52ec61";
                            confirmEmailElement.addEventListener("mouseenter", function() {
                                this.style.cursor = "not-allowed";
                                this.style.borderColor = "#fff";
                                this.style.color = "#fff";
                            });
                            confirmEmailElement.addEventListener("mouseleave", function() {
                                this.style.cursor = "default"; // Cambia el cursor de nuevo al cursor predeterminado al salir del elemento
                            });
                        } else {
                            OcultarBackgroundDesenfocado();
                            document.querySelector(".contentModal").classList.add("hiddenElement");
                         }   
                    });
                }
                for (const acceptBtn of acceptBtns) {
                    acceptBtn.addEventListener('click', () => {
                        const userInput = document.getElementById("inputCode").value;
                        if (userInput === code) {
                            document.querySelector(".email-confirm").classList.add("hiddenElement");
                            document.querySelector(".email-checked").classList.remove("hiddenElement");
                            stateConfirmemail = true;
                        } else {
                           alert("El código ingresado no es válido. Inténtalo de nuevo."); // Alerta si el código no coincide.
                           stateConfirmemail = false;
                        }
                    }); 
                }
                   
                
            })
            .catch();
            checkState4();
        } else {
            inputConfirmemail.classList.add('btnDisabled');
            stateConfirmemail = false;
            checkState4();
        }
    });

    inputMatricula.addEventListener('focus', () => {
        if (!stateMatricula) {
            failedIconMatricula.classList.remove('hiddenElement');
            correctIconMatricula.classList.add('hiddenElement');
        } else {
            failedIconMatricula.classList.add('hiddenElement');
            correctIconMatricula.classList.remove('hiddenElement');
        }
    });
    inputMatricula.addEventListener('input', () => {
        const valueMatricula = inputMatricula.value.trim();
        
        if (valueMatricula === '') {
            failedIconMatricula.classList.remove('hiddenElement');
            correctIconMatricula.classList.add('hiddenElement');
            tooltipErrorMatricula.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateMatricula = false;
        } else if ((/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueMatricula)) && (/[A-Za-z]/.test(valueMatricula))) {
            // El campo contiene símbolos y letras juntas
            failedIconMatricula.classList.remove('hiddenElement');
            correctIconMatricula.classList.add('hiddenElement');
            tooltipErrorMatricula.textContent = "Campo inválido. No debe contener símbolos ni letras.";
            stateMatricula = false;
        } else if (/[A-Za-z]/.test(valueMatricula)) {
            // El campo contiene solo letras
            failedIconMatricula.classList.remove('hiddenElement');
            correctIconMatricula.classList.add('hiddenElement');
            tooltipErrorMatricula.textContent = "Campo inválido. No debe contener letras.";
            stateMatricula = false;
        } else if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(valueMatricula)) {
            // El campo contiene símbolos
            failedIconMatricula.classList.remove('hiddenElement');
            correctIconMatricula.classList.add('hiddenElement');
            tooltipErrorMatricula.textContent = "Campo inválido. No puede contener símbolos.";
            stateMatricula = false;
        }  else if (/^[0-9]+$/.test(valueMatricula) && (valueMatricula.length === 4)) {
            // El campo contiene solo números y está en el rango de 7 u 8 dígitos
            failedIconMatricula.classList.add('hiddenElement');
            correctIconMatricula.classList.remove('hiddenElement');
            tooltipErrorMatricula.textContent = ""; 
            stateMatricula = true;
        } else if (/^[0-9]+$/.test(valueMatricula) && (valueMatricula.length < 4)) {
            failedIconMatricula.classList.remove('hiddenElement');
            correctIconMatricula.classList.add('hiddenElement');
            tooltipErrorMatricula.textContent = "Campo inválido. No pueden introducir menos de 4 dígitos.";
            stateMatricula = false;
        } else {
            failedIconMatricula.classList.remove('hiddenElement');
            correctIconMatricula.classList.add('hiddenElement');
            tooltipErrorMatricula.textContent = "Campo inválido. No pueden introducir más de 4 dígitos.";
            stateMatricula = false;
        }
        checkState4();
    });

    selectTypeuser.addEventListener('focus', () => {
        if (!stateTypeuser) {
            failedIconTypeuser.classList.remove('hiddenElement');
            correctIconTypeuser.classList.add('hiddenElement');
        } else {
            failedIconTypeuser.classList.add('hiddenElement');
            correctIconTypeuser.classList.remove('hiddenElement');
        }
    });

    selectTypeuser.addEventListener('input', () => {
        const selectedValueTypeuser = selectTypeuser.value;
    
        if (selectedValueTypeuser === '') {
            failedIconTypeuser.classList.remove('hiddenElement');
            correctIconTypeuser.classList.add('hiddenElement');
            tooltipErrorTypeuser.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateTypeuser = false;
        } else if (selectedValueTypeuser != '') {
            failedIconTypeuser.classList.add('hiddenElement');
            correctIconTypeuser.classList.remove('hiddenElement');
            stateTypeuser = true;
        }
        checkState4();
    });

    inputPassword.addEventListener('focus', () => {
        if (!statePassword) {
            failedIconPassword.classList.remove('hiddenElement');
            correctIconPassword.classList.add('hiddenElement');
        } else {
            failedIconPassword.classList.add('hiddenElement');
            correctIconPassword.classList.remove('hiddenElement');
        }
    });
    inputPassword.addEventListener('input', () => {
        const valuePassword = inputPassword.value.trim();
        
        if (valuePassword === '') {
            failedIconPassword.classList.remove('hiddenElement');
            correctIconPassword.classList.add('hiddenElement');
            tooltipErrorPassword.textContent = "Campo inválido. No puede dejar el campo vacío.";
            statePassword = false;
        } else if (/\s/.test(valuePassword)) {
            failedIconPassword.classList.remove('hiddenElement');
            correctIconPassword.classList.add('hiddenElement');
            tooltipErrorPassword.textContent = "Campo inválido. No puede contener espacios en blanco.";
            statePassword = false;
        } else if ((valuePassword.length >= 8) && (valuePassword.length <= 12)) {
            failedIconPassword.classList.add('hiddenElement');
            correctIconPassword.classList.remove('hiddenElement');
            tooltipErrorPassword.textContent = ""; 
            statePassword = true;
        } else if (valuePassword.length < 8) {
            failedIconPassword.classList.remove('hiddenElement');
            correctIconPassword.classList.add('hiddenElement');
            tooltipErrorPassword.textContent = "Campo inválido. No pueden introducir menos de 8 dígitos.";
            statePassword = false;
        } else {
            failedIconPassword.classList.remove('hiddenElement');
            correctIconPassword.classList.add('hiddenElement');
            tooltipErrorPassword.textContent = "Campo inválido. No pueden introducir más de 12 dígitos.";
            statePassword = false;
        }
        checkState4();
    });


    inputConfirmpassword.addEventListener('focus', () => {
        if (!stateConfirmpassword) {
            failedIconConfirmpassword.classList.remove('hiddenElement');
            correctIconConfirmpassword.classList.add('hiddenElement');
        } else {
            failedIconConfirmpassword.classList.add('hiddenElement');
            correctIconConfirmpassword.classList.remove('hiddenElement');
        }
    });
    inputConfirmpassword.addEventListener('input', () => {
        const valueConfirmpassword = inputConfirmpassword.value.trim();
        
        if (valueConfirmpassword === '') {
            failedIconConfirmpassword.classList.remove('hiddenElement');
            correctIconConfirmpassword.classList.add('hiddenElement');
            tooltipErrorConfirmpassword.textContent = "Campo inválido. No puede dejar el campo vacío.";
            stateConfirmpassword = false;
        } else if ((statePassword) && (inputPassword.value === valueConfirmpassword)) {
            failedIconConfirmpassword.classList.add('hiddenElement');
            correctIconConfirmpassword.classList.remove('hiddenElement');
            tooltipErrorConfirmpassword.textContent = ""; 
            stateConfirmpassword = true;
        } else {
            failedIconConfirmpassword.classList.remove('hiddenElement');
            correctIconConfirmpassword.classList.add('hiddenElement');
            tooltipErrorConfirmpassword.textContent = "Campo inválido. Las contraseñas no coinciden.";
            stateConfirmpassword = false;
        }
        checkState4();
    });

    checkboxTc.addEventListener("change", function() {
        if (checkboxTc.checked) {
            stateCheckboxTc = true;
        } else {
            stateCheckboxTc = false;
        }
        checkState6();
    });

   

    document.getElementById('browse_button').addEventListener('click', function() {
    // Simular un clic en el input tipo file oculto
    document.getElementById('browse_image').click();
});

// var checkUserImage = false;

document.getElementById('browse_image').addEventListener('change', function(e) {
    var files = e.target.files;

    var done = function(url) {
        $('#display_image_div').html('');
        $("#display_image_div").html('<img name="display_image_data" id="display_image_data" src="' + url + '" alt="Uploaded Picture">');
    };

    if (files && files.length > 0) {
    file = files[0];

    if (URL) {
        done(URL.createObjectURL(file));
    } else if (FileReader) {
        reader = new FileReader();
        reader.onload = function(e) {
            done(reader.result);
        };
        reader.readAsDataURL(file);
    }

    var image = document.getElementById('display_image_data');
    image.style.width = '288px'; 
    image.style.height = '200px'; 
    
    

    var button = document.getElementById('crop_button');
    var result = document.getElementById('cropped_image_result');
    var croppable = false;
    var cropper = new Cropper(image, {
        aspectRatio: 1,
        viewMode: 1,
        ready: function() {
            croppable = true;
        },
    });

    button.onclick = function() {
        var croppedCanvas;
        var roundedCanvas;
        var roundedImage;

        if (!croppable) {
            return;
        }

        // Crop
        croppedCanvas = cropper.getCroppedCanvas();

        // Round
        roundedCanvas = getRoundedCanvas(croppedCanvas);

        // Show
        roundedImage = document.createElement('img');
        roundedImage.classList.add("roundedImage");
        roundedImage.src = roundedCanvas.toDataURL();
        roundedImage.style.width = '150px'; // Establece el ancho en 200px
        roundedImage.style.height = '150px'; // Establece la altura en 200px
        // checkUserImage = true;

        result.innerHTML = '';
        result.appendChild(roundedImage);
        };
        function getRoundedCanvas(sourceCanvas) {
          var canvas = document.createElement('canvas');
          var context = canvas.getContext('2d');
          var width = sourceCanvas.width;
          var height = sourceCanvas.height;

          canvas.width = width;
          canvas.height = height;
          context.imageSmoothingEnabled = true;
          context.drawImage(sourceCanvas, 0, 0, width, height);
          context.globalCompositeOperation = 'destination-in';
          context.beginPath();
          context.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, 2 * Math.PI, true);
          context.fill();
          return canvas;
          
      }
    //   checkState5();
    }
    
});


    const signupContent = document.querySelector(".signup-form-container"),
    stagebtn1a = document.querySelector(".stagebtn1a"),
    stagebtn1b = document.querySelector(".stagebtn1b"),
    stagebtn2a = document.querySelector(".stagebtn2a"),
    stagebtn2b = document.querySelector(".stagebtn2b"),
    stagebtn3a = document.querySelector(".stagebtn3a"),
    stagebtn3b = document.querySelector(".stagebtn3b"),
    stagebtn4a = document.querySelector(".stagebtn4a"),
    stagebtn4b = document.querySelector(".stagebtn4b"),
    stagebtn5a = document.querySelector(".stagebtn5a"),
    stagebtn5b = document.querySelector(".stagebtn5b"),
    stagebtn6a = document.querySelector(".stagebtn6a"),
    stagebtn6b = document.querySelector(".stagebtn6b"),
    
    signupContent1 = document.querySelector(".stage1-content"),
    signupContent2 = document.querySelector(".stage2-content"),
    signupContent3 = document.querySelector(".stage3-content"),
    signupContent4 = document.querySelector(".stage4-content");
    signupContent5 = document.querySelector(".stage5-content");
    signupContent6 = document.querySelector(".stage6-content");
    // signupContent2.classList.add("hiddenElement");
    // signupContent3.classList.add("hiddenElement");

    function checkState1() {
        if (stateName === true && stateLastname === true && stateDni === true && statePhone === true && stateDatetime === true && stateGender === true) {
            stagebtn1b.classList.remove("btnDisabled");
            return true;
        } else {
            stagebtn1b.classList.add("btnDisabled");
            return false;
        }
    }

    function checkState2() {
        if (statePostalcode === true && stateLocalidad === true && stateStreet === true && stateStreetnumber === true) {
            stagebtn2b.classList.remove("btnDisabled");
            return true;
        } else {
            stagebtn2b.classList.add("btnDisabled");
            return false;
        }
    }

    function checkState4() {
        if (stateEmail === true && stateConfirmemail === true && stateMatricula === true && stateTypeuser === true && statePassword === true && stateConfirmpassword === true) {
            stagebtn4b.classList.remove("btnDisabled");
            return true;
        } else {
            stagebtn4b.classList.add("btnDisabled");
            return false;
        }
    }

    // function checkState5() {
    
    //     if (checkUserImage === true) {
    //         stagebtn5b.classList.remove("btnDisabled");
    //         return true;
    //     } else {
    //         stagebtn5b.classList.add("btnDisabled");
    //         return false;
    //     }
    // }

    function checkState6() {
        if (stateCheckboxTc === true) {
            stagebtn6b.classList.remove("btnDisabled");
            return true;
        } else {
            stagebtn6b.classList.add("btnDisabled");
            return false;
        }
    }
 
    stagebtn1b.addEventListener('click', () => {
        if (checkState1() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.remove("hiddenElement");
            signupContent4.classList.add("hiddenElement");
    
            setTimeout(() => {
                const stageElement1 = document.querySelector(".stageno-1");
                stageElement1.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
                stageElement1.style.backgroundColor = "#52ec61";
                stageElement1.style.color = "#fff";
                stageElement1.innerText = "✔";
    
                document.querySelector(".stageno-2").style.color = "#ae0e30";
                document.querySelector(".stageno-2").style.fontWeight = "bolder";
                document.getElementById("tool-tip-2").style.color = "#ae0e30";
            }, 100);
            document.querySelector(".stage:nth-child(2)").classList.add("green-background");
        } else {
            stagebtn1b.classList.add("btnDisabled");
        }
    });
    
    stagebtn2a.addEventListener('click', () => {
        signupContent1.classList.remove("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.add("hiddenElement");

        setTimeout(() => {
            document.querySelector(".stageno-1").innerText = "1";
            document.querySelector(".stageno-1").style.backgroundColor = "#e2e2e7";
            document.querySelector(".stageno-1").style.color = "#ae0e30";

            document.querySelector(".stageno-2").style.color = "#6e6e6e";
            document.querySelector(".stageno-2").style.fontWeight = "bolder";
            document.getElementById("tool-tip-2").style.color = "#6e6e6e";
        }, 100);
        document.querySelector(".stage:nth-child(2)").classList.remove("green-background");
    });
    stagebtn2b.addEventListener('click', () => {
        if (checkState2() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.remove("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");
    
            setTimeout(() => {
                const stageElement2 = document.querySelector(".stageno-2");
                stageElement2.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
                stageElement2.style.backgroundColor = "#52ec61";
                stageElement2.style.color = "#fff";
                stageElement2.innerText = "✔";
    
                document.querySelector(".stageno-3").style.color = "#ae0e30";
                document.querySelector(".stageno-3").style.fontWeight = "bolder";
                document.getElementById("tool-tip-3").style.color = "#ae0e30";
            }, 100);
    
            document.querySelector(".stage:nth-child(2)").classList.add("green-background");
            document.querySelector(".stage:nth-child(3)").classList.add("green-background");
        } else {
            stagebtn2b.classList.add("btnDisabled");
        }
    });
    stagebtn3a.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.remove("hiddenElement");
        signupContent4.classList.add("hiddenElement");

        setTimeout(() => {
            document.querySelector(".stageno-2").innerText = "2";
            document.querySelector(".stageno-2").style.backgroundColor = "#e2e2e7";
            document.querySelector(".stageno-2").style.color = "#ae0e30";
           
            document.querySelector(".stageno-3").style.color = "#6e6e6e";
            document.querySelector(".stageno-3").style.fontWeight = "bolder";
            document.getElementById("tool-tip-3").style.color = "#6e6e6e";
        }, 100);
        document.querySelector(".stage:nth-child(3)").classList.remove("green-background");
    });
    stagebtn3b.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.remove("hiddenElement");

        setTimeout(() => {
            const stageElement3 = document.querySelector(".stageno-3");
            stageElement3.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
            stageElement3.style.backgroundColor = "#52ec61";
            stageElement3.style.color = "#fff";
            stageElement3.innerText = "✔";

            document.querySelector(".stageno-4").style.color = "#ae0e30";
            document.querySelector(".stageno-4").style.fontWeight = "bolder";
            document.getElementById("tool-tip-4").style.color = "#ae0e30";
        }, 100);

        document.querySelector(".stage:nth-child(4)").classList.add("green-background");

        
    });
    stagebtn4a.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.remove("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.add("hiddenElement");

        setTimeout(() => {
            document.querySelector(".stageno-3").innerText = "3";
            document.querySelector(".stageno-3").style.backgroundColor = "#e2e2e7";
            document.querySelector(".stageno-3").style.color = "#ae0e30";

            document.querySelector(".stageno-4").style.color = "#6e6e6e";
            document.querySelector(".stageno-4").style.fontWeight = "bolder";
            document.getElementById("tool-tip-4").style.color = "#6e6e6e";
        }, 100);
        document.querySelector(".stage:nth-child(4)").classList.remove("green-background");
    });
    stagebtn4b.addEventListener('click', () => {
        if (checkState4() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");
            signupContent5.classList.remove("hiddenElement");

            setTimeout(() => {
                const stageElement4 = document.querySelector(".stageno-4");
                stageElement4.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
                stageElement4.style.backgroundColor = "#52ec61";
                stageElement4.style.color = "#fff";
                stageElement4.innerText = "✔";

                document.querySelector(".stageno-5").style.color = "#ae0e30";
                document.querySelector(".stageno-5").style.fontWeight = "bolder";
                document.getElementById("tool-tip-5").style.color = "#ae0e30";
            }, 100);

            document.querySelector(".stage:nth-child(5)").classList.add("green-background");
        } else {
            stagebtn4b.classList.add("btnDisabled");
        }
       
    });

    stagebtn5a.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.remove("hiddenElement");
        signupContent5.classList.add("hiddenElement");
        signupContent6.classList.add("hiddenElement");

        setTimeout(() => {
            document.querySelector(".stageno-4").innerText = "4";
            document.querySelector(".stageno-4").style.backgroundColor = "#e2e2e7";
            document.querySelector(".stageno-4").style.color = "#ae0e30";
            
            document.querySelector(".stageno-5").style.color = "#6e6e6e";
            document.querySelector(".stageno-5").style.fontWeight = "bolder";
            document.getElementById("tool-tip-5").style.color = "#6e6e6e";
        }, 100);
        document.querySelector(".stage:nth-child(5)").classList.remove("green-background");
        
        
    });
    stagebtn5b.addEventListener('click', () => {
        // if (checkState5() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");
            signupContent5.classList.add("hiddenElement");
            signupContent6.classList.remove("hiddenElement");

            setTimeout(() => {
                const stageElement5 = document.querySelector(".stageno-5");
                stageElement5.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
                stageElement5.style.backgroundColor = "#52ec61";
                stageElement5.style.color = "#fff";
                stageElement5.innerText = "✔";

                document.querySelector(".stageno-6").style.color = "#ae0e30";
                document.querySelector(".stageno-6").style.fontWeight = "bolder";
                document.getElementById("tool-tip-6").style.color = "#ae0e30";
            }, 100);

            document.querySelector(".stage:nth-child(6)").classList.add("green-background");
            
        // } else {
        //     stagebtn5b.classList.add("btnDisabled");
        // }
    });


    stagebtn6a.addEventListener('click', () => {
        signupContent1.classList.add("hiddenElement");
        signupContent3.classList.add("hiddenElement");
        signupContent2.classList.add("hiddenElement");
        signupContent4.classList.add("hiddenElement");
        signupContent5.classList.remove("hiddenElement");
        signupContent6.classList.add("hiddenElement");

        setTimeout(() => {
            document.querySelector(".stageno-5").innerText = "5";
            document.querySelector(".stageno-5").style.backgroundColor = "#e2e2e7";
            document.querySelector(".stageno-5").style.color = "#ae0e30";
            
            document.querySelector(".stageno-6").style.color = "#6e6e6e";
            document.querySelector(".stageno-6").style.fontWeight = "bolder";
            document.getElementById("tool-tip-6").style.color = "#6e6e6e";
        }, 100);
        document.querySelector(".stage:nth-child(6)").classList.remove("green-background");
        
        
    });
    stagebtn6b.addEventListener('click', () => {
        if (checkState6() === true) {
            signupContent1.classList.add("hiddenElement");
            signupContent3.classList.add("hiddenElement");
            signupContent2.classList.add("hiddenElement");
            signupContent4.classList.add("hiddenElement");
            signupContent5.classList.add("hiddenElement");
            signupContent6.classList.add("hiddenElement");

            setTimeout(() => {
                const stageElement6 = document.querySelector(".stageno-6");
                stageElement6.style.transition = "background-color 1s ease-in-out, color 1s ease-in-out";
                stageElement6.style.backgroundColor = "#52ec61";
                stageElement6.style.color = "#fff";
                stageElement6.innerText = "✔";
            }, 100);

            const popUpAnimationContent = document.getElementsByClassName("popupAnimation");

            if (popUpAnimationContent.length > 0) {
                const firstPopUpAnimation = popUpAnimationContent[0]; // Tomamos el primer elemento

                const imgElement = firstPopUpAnimation.querySelector('img');
                imgElement.src = '/assets/Login/sucessPopup.png';

                const h2Element = firstPopUpAnimation.querySelector('h2');
                h2Element.textContent = 'Registro Completado';

                const pElement = firstPopUpAnimation.querySelector('p');
                pElement.textContent = 'Su cuenta ha sido registrada con éxito. Ahora su solicitud se encuentra en proceso de revisión para su habilitación. Le notificaremos una vez que su cuenta haya sido aprobada.';

                const btnElement = firstPopUpAnimation.querySelector('.btn-accept');

                MostrarBackgroundDesenfocado();
                firstPopUpAnimation.classList.remove("hiddenElement");

                btnElement.addEventListener('click', () => {
                    OcultarBackgroundDesenfocado();
                    firstPopUpAnimation.classList.add("hiddenElement");
                });
            }
        } else {
            stagebtn6b.classList.add("btnDisabled");
        }
    });

   
    
    function LocalidadValue(valueCP) {
        const elementInputLocalidad = document.getElementById("localidad");
        console.log(valueCP);
        console.log("si llamo a la funcion");
        fetch(URL_CP)
            .then((Response) => Response.json())
            .then((Data) => {
                elementInputLocalidad.innerHTML = ""; // Limpiar el select antes de agregar opciones
                const selectOption = document.createElement("option");
                selectOption.value = ""; // Puedes asignar un valor vacío o algún valor predeterminado si es necesario
                selectOption.textContent = "Seleccionar localidad";
                selectOption.disabled = true;
                selectOption.selected = true;
                elementInputLocalidad.appendChild(selectOption);
                console.log("si respondio");
                if (Data.length === 0) {
                    // Manejar el caso en que no se encuentren datos
                } else {
                    // Filtrar las localidades por código postal
                    const filteredData = Data.filter((item) => item.CP === parseInt(valueCP));
                    console.log(filteredData);
                    if (filteredData.length === 0) {
                        console.log("filtreddata esta vacio");
                        failedIconPostalcode.classList.remove('hiddenElement');
                        correctIconPostalcode.classList.add('hiddenElement');
                        tooltipErrorPostalcode.textContent = "Campo inválido. No existe el código postal.";
                        statePostalcode = false;

                        failedIconLocalidad.classList.remove('hiddenElement');
                        correctIconLocalidad.classList.add('hiddenElement');
                        tooltipErrorLocalidad.textContent = "Campo inválido. No existe localidad para el código postal.";
                        stateLocalidad = false;
                        // Manejar el caso en que no se encuentren localidades para el código postal seleccionado
                    } else {
                        // Iterar a través de los datos filtrados y agregar opciones al select
                        filteredData.forEach((item) => {
                            failedIconLocalidad.classList.add('hiddenElement');
                            correctIconLocalidad.classList.add('hiddenElement');
                            tooltipErrorLocalidad.textContent = "Campo inválido. No puede dejar el campo vacío.";
                            const option = document.createElement("option"); // Crear un elemento opción
                            option.value = item.Localidad; // Asignar el valor de la localidad
                            option.textContent = item.Localidad; // Asignar el texto de la localidad
                            elementInputLocalidad.appendChild(option); // Agregar la opción al select
                            console.log(valueCP);
                            console.log(filteredData);
                        });
                    }
                }
            });
    }

    let map; // Declara una variable global para el mapa

    function validarCoordenadas() {
        if (stateLocalidad && statePostalcode && stateStreet && stateStreetnumber) {
            const valuePostalcode = inputPostalcode.value.trim();
            const selectedValueLocalidad = selectLocalidad.value;
            const valueStreet = inputStreet.value.trim();
            const valueStreetnumber = inputStreetnumber.value.trim();

            geocodificar(valuePostalcode, selectedValueLocalidad, valueStreet, valueStreetnumber);
        }
    }
    
    function geocodificar(codigoPostal, localidad, street, streetnumber) {
        const apiKey = "b7494b92162e4b1788e7b6a322981d01";
        const formattedAddress = `${street} ${streetnumber}, ${codigoPostal} ${localidad}`;
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
            formattedAddress
        )}&key=${apiKey}`;
    
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const coordenadas = data.results[0].geometry; // Suponiendo que las coordenadas estén en el primer resultado
                console.log("Coordenadas: ", coordenadas);
    
                if (coordenadas) {
                    // Elimina el mapa anterior si existe
                    if (map) {
                        map.remove();
                    }
    
                    // Crea un nuevo mapa
                    crearMapa(coordenadas);
                } else {
                    console.error("No se pudieron obtener las coordenadas.");
                }
            })
            .catch(error => {
                console.error("Error al geocodificar: ", error);
            });
    }
    
    function crearMapa(coordenadas) {
        map = L.map('map').setView([coordenadas.lat, coordenadas.lng], 16);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Eze map\'s ©'
        }).addTo(map);
    
        const customIcon = L.divIcon({
            className: 'custom-icon',
            html: '<i class="fas fa-map-marker-alt location-icon"></i>',
            iconSize: [30, 42],
            iconAnchor: [15, 42]
        });
    
        L.marker([coordenadas.lat, coordenadas.lng], { icon: customIcon }).addTo(map).bindPopup("<span style='color: red;'>Su ubicación</span>");
    
        // map.on('click', onMapClick);
    
        // function onMapClick(e) {
        //     alert("Posición: " + e.latlng);
        // }
    }
    const btnSlideMenu = document.querySelector('.btn-open-slidemenu');
    const containerSlideMenu = document.querySelector('.container-slidemenu');
    const toggleSlideMenu = document.querySelector(".toggle-slidemenu");
    
    btnSlideMenu.addEventListener('click', () => {
        if (!btnSlideMenu.classList.contains("is-active")) {
            btnSlideMenu.classList.add("is-active");
            // toggleSlideMenu.style.backgroundColor = 'rgba(174, 14, 48, 0.6)';
            // toggleSlideMenu.style.backdropFilter = 'blur(2px)';
            toggleSlideMenu.style.backgroundColor = "rgba(174, 14, 48)";
            containerSlideMenu.classList.remove('hiddenElement');
        } else {
            btnSlideMenu.classList.remove("is-active");
            toggleSlideMenu.style.backgroundColor = 'transparent';
            toggleSlideMenu.style.backdropFilter = 'none';
        }
    });
    
    
    // btnSlideMenu.classList.toggle("is-active");
});