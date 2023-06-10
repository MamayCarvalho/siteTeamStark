function saveThemePreference() {
  const theme = document.documentElement.getAttribute('data-bs-theme');
  localStorage.setItem('theme', theme);
}

function loadThemePreference() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-bs-theme', savedTheme);
    if (savedTheme === 'dark') {
      btnSwitch.checked = true;
      logoNav.src = '/projetoSite/componentes/img/all/logo/logo-stark-branco-v1.2.png';
    } else {
      btnSwitch.checked = false;
      logoNav.src = '/projetoSite/componentes/img/all/logo/logo-stark-preta-v1.2.png';
    }
  }
}

document.getElementById('btnSwitch').addEventListener('click', () => {
  if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
    document.documentElement.setAttribute('data-bs-theme', 'light');
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
  }
  saveThemePreference();
});

btnSwitch.addEventListener('change', function() {
  if (this.checked) {
    logoNav.src = '/projetoSite/componentes/img/all/logo/logo-stark-branco-v1.2.png';
  } else {
    logoNav.src = '/projetoSite/componentes/img/all/logo/logo-stark-preta-v1.2.png';
  }
});

logoNav.addEventListener('click', function() {
  if (btnSwitch.checked) {
    document.documentElement.setAttribute('data-bs-theme', 'light');
    logoNav.src = '/projetoSite/componentes/img/all/logo/logo-stark-preta-v1.2.png';
    btnSwitch.checked = false;
  } else {
    document.documentElement.setAttribute('data-bs-theme', 'dark');
    logoNav.src = '/projetoSite/componentes/img/all/logo/logo-stark-branco-v1.2.png';
  }
});

// Chame a função para carregar a preferência de tema no início
loadThemePreference();