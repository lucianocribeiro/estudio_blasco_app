const SESSION_KEY = 'blasco_session';
const LOGIN_URL = 'index.html';
const DASHBOARD_URL = 'dashboard.html';

const CREDENTIALS = {
  username: 'BlascoAI',
  password: '1234Blasco#',
};

function isAuthenticated() {
  return sessionStorage.getItem(SESSION_KEY) === 'active';
}

function redirectIfAuthenticated() {
  if (isAuthenticated()) {
    window.location.replace(DASHBOARD_URL);
  }
}

function protectDashboard() {
  if (!isAuthenticated()) {
    window.location.replace(LOGIN_URL);
  }
}

function showToast(message) {
  const toast = document.getElementById('proximamenteToast');
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add('show');

  window.clearTimeout(showToast.timeoutId);
  showToast.timeoutId = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

function bindComingSoon() {
  document.querySelectorAll('[data-action="coming-soon"]').forEach((item) => {
    item.addEventListener('click', (event) => {
      event.preventDefault();
      showToast('Proximamente');
    });
  });
}

function bindLogout() {
  const logoutButton = document.getElementById('logoutButton');
  if (!logoutButton) {
    return;
  }

  logoutButton.addEventListener('click', () => {
    sessionStorage.removeItem(SESSION_KEY);
    window.location.replace(LOGIN_URL);
  });
}

function bindLoginForm() {
  const loginForm = document.getElementById('loginForm');
  if (!loginForm) {
    return;
  }

  const errorEl = document.getElementById('loginError');

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (username === CREDENTIALS.username && password === CREDENTIALS.password) {
      sessionStorage.setItem(SESSION_KEY, 'active');
      window.location.replace(DASHBOARD_URL);
      return;
    }

    if (errorEl) {
      errorEl.classList.add('show');
      errorEl.textContent = 'Credenciales incorrectas. Intenta nuevamente.';
    }
  });
}

function init() {
  const page = document.body.dataset.page;

  if (page === 'login') {
    redirectIfAuthenticated();
    bindLoginForm();
  }

  if (page === 'dashboard') {
    protectDashboard();
    bindComingSoon();
    bindLogout();
  }
}

document.addEventListener('DOMContentLoaded', init);
