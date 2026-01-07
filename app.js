const SESSION_KEY = 'blasco_session';
const LOGIN_HASH = '#/login';
const DASHBOARD_HASH = '#/dashboard';
const TESTING_HASH = '#/testing';

const CREDENTIALS = {
  username: 'BlascoAI',
  password: '1234Blasco#',
};

function isAuthenticated() {
  return sessionStorage.getItem(SESSION_KEY) === 'active';
}

function setHash(hash) {
  if (window.location.hash !== hash) {
    window.location.hash = hash;
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
    setHash(LOGIN_HASH);
  });
}

function bindDashboardNavigation() {
  const backButton = document.getElementById('backToDashboard');
  if (!backButton) {
    return;
  }

  backButton.addEventListener('click', () => {
    setHash(DASHBOARD_HASH);
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
      if (errorEl) {
        errorEl.classList.remove('show');
      }
      setHash(DASHBOARD_HASH);
      return;
    }

    if (errorEl) {
      errorEl.classList.add('show');
      errorEl.textContent = 'Credenciales incorrectas. Intenta nuevamente.';
    }
  });
}

function showView(view) {
  const loginSection = document.getElementById('loginSection');
  const dashboardSection = document.getElementById('dashboardSection');

  if (!loginSection || !dashboardSection) {
    return;
  }

  loginSection.classList.toggle('hidden', view !== 'login');
  dashboardSection.classList.toggle('hidden', view !== 'dashboard');
}

function showDashboardPage(page) {
  const dashboardView = document.getElementById('dashboardView');
  const testingView = document.getElementById('testingView');

  if (!dashboardView || !testingView) {
    return;
  }

  dashboardView.classList.toggle('hidden', page !== 'dashboard');
  testingView.classList.toggle('hidden', page !== 'testing');
}

function handleRoute() {
  const hash = window.location.hash || '';
  const route = hash.replace('#/', '');

  if (route === 'dashboard') {
    if (!isAuthenticated()) {
      setHash(LOGIN_HASH);
      showView('login');
      return;
    }
    showView('dashboard');
    showDashboardPage('dashboard');
    return;
  }

  if (route === 'testing') {
    if (!isAuthenticated()) {
      setHash(LOGIN_HASH);
      showView('login');
      return;
    }
    showView('dashboard');
    showDashboardPage('testing');
    return;
  }

  if (isAuthenticated()) {
    setHash(DASHBOARD_HASH);
    showView('dashboard');
    showDashboardPage('dashboard');
    return;
  }

  setHash(LOGIN_HASH);
  showView('login');
}

function init() {
  bindLoginForm();
  bindComingSoon();
  bindLogout();
  bindDashboardNavigation();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
}

document.addEventListener('DOMContentLoaded', init);
