const viewSignup = `
  <p class="text-login">Entra a un mundo consciente.<br> <strong> Siente, piensa y actúa. </strong></p>
    <input type="text" id="input-name" class="login-input" placeholder="Nombre" required oninvalid="this.setCustomValidity('Por favor ingresa tu nombre!')">
    <div>
    <input type="email" id="input-mail" class="login-input" placeholder="ejemplo@ejemplo.com" required oninvalid="this.setCustomValidity('Por favor ingresa tu correo!')">
    <span id="icon-mail" class="icon-input"></span>
    </div>
    <div class="cont-password">
    <input type="password" id="input-password" class="login-input class-input" placeholder="Escribe tu contraseña" required oninvalid="this.setCustomValidity('Por favor ingresa una contraseña (min 6 caracteres)')">
    <span id="icon-clave" class="icon-input icon-clave"></span>
    <span id="icon-password" class="icon-input"></span>
    </div>
    <p class="ms-info-alert" id="ms-info-alert"></p>
    <button class="btn login-btn" id="btn-registrar" data-action='registrar'>Registrar</button>
    <p id="ms-iniciar-registrar" class="text-peq">¿No tienes una cuenta? <a href= "#/" class="" id="btn-change-iniciar-registrar">Iniciar Sesión</a></p> `;

const viewTheSignup = () => {
  const formElem = document.createElement('form');
  formElem.setAttribute('class', 'display-flex form-login');
  formElem.setAttribute('id', 'form-signup');
  formElem.innerHTML += viewSignup;
  return formElem;
};

export { viewTheSignup };