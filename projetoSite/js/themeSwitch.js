const btnSwitch = document.getElementById("btnSwitch");
const logoNav = document.getElementById("logoNav");
const logoFooter = document.getElementById("logoFooter");


document.getElementById('btnSwitch').addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.body.style.backgroundColor = '/componentes/img/all/bg/imagem-fundo-branco.png';
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.body.style.backgroundColor = '/componentes/img/all/bg/imagem-fundo.png';   
  }
});

btnSwitch.addEventListener("change", function() {
  if (this.checked) {
    logoNav.src = "/componentes/img/all/logo/logo-stark-branco-v1.2.png";
    logoFooter.src = "/componentes/img/all/logo/logo-stark-branco-v1.2.png";
  } else {
    logoNav.src = "/componentes/img/all/logo/logo-stark-preta-v1.2.png";
    logoFooter.src = "/componentes/img/all/logo/logo-stark-preta-v1.2.png";
  }
});


logoNav.addEventListener("click", function() {
  if (btnSwitch.checked) {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.body.style.backgroundColor = '/componentes/img/all/bg/imagem-fundo-branco.png';
    logoNav.src = "/componentes/img/all/logo/logo-stark-preta-v1.2.png";
    logoFooter.src = "/componentes/img/all/logo/logo-stark-preta-v1.2.png";
    btnSwitch.checked = false;
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    document.body.style.backgroundColor = '/componentes/img/all/bg/imagem-fundo.png';
    logoNav.src = "/componentes/img/all/logo/logo-stark-branco-v1.2.png";
    logoFooter.src = "/componentes/img/all/logo/logo-stark-branco-v1.2.png";
    btnSwitch.checked = true;
  }
});
