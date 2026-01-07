const SESSION_KEY = 'blasco_session';
const TESTING_STORAGE_KEY = 'blasco_testing_entries';
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

function createTestingItem({ name, link, status }, index) {
  const item = document.createElement('div');
  item.className = 'testing-item';

  const header = document.createElement('div');
  header.className = 'testing-item-header';

  const title = document.createElement('div');
  title.className = 'testing-item-title';
  title.textContent = name;

  const actions = document.createElement('div');
  actions.className = 'testing-item-actions';

  const badge = document.createElement('span');
  badge.className = `status-badge status-${status}`;
  badge.textContent =
    status === 'pendiente'
      ? 'Pendiente'
      : status === 'en-progreso'
        ? 'En progreso'
        : 'Completada';

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-button';
  deleteButton.type = 'button';
  deleteButton.dataset.action = 'delete-testing';
  deleteButton.dataset.index = index;
  deleteButton.textContent = 'Eliminar';

  actions.appendChild(badge);
  actions.appendChild(deleteButton);

  header.appendChild(title);
  header.appendChild(actions);

  const linkEl = document.createElement('a');
  linkEl.className = 'testing-item-link';
  linkEl.href = link;
  linkEl.target = '_blank';
  linkEl.rel = 'noreferrer';
  linkEl.textContent = link;

  item.appendChild(header);
  item.appendChild(linkEl);

  return item;
}

function getTestingEntries() {
  const stored = window.localStorage.getItem(TESTING_STORAGE_KEY);
  if (!stored) {
    return [];
  }

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function setTestingEntries(entries) {
  window.localStorage.setItem(TESTING_STORAGE_KEY, JSON.stringify(entries));
}

function renderTestingEntries(entries) {
  const list = document.getElementById('testingList');
  if (!list) {
    return;
  }

  list.innerHTML = '';

  if (!entries.length) {
    const emptyState = document.createElement('div');
    emptyState.className = 'testing-empty';
    emptyState.textContent = 'Todavía no hay pruebas cargadas.';
    list.appendChild(emptyState);
    return;
  }

  entries.forEach((entry, index) => {
    list.appendChild(createTestingItem(entry, index));
  });
}

function bindTestingForm() {
  const form = document.getElementById('testingForm');

  if (!form) {
    return;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('testingName').value.trim();
    const link = document.getElementById('testingLink').value.trim();
    const status = document.getElementById('testingStatus').value;

    if (!name || !link || !status) {
      return;
    }

    const entries = getTestingEntries();
    entries.push({ name, link, status });
    setTestingEntries(entries);
    renderTestingEntries(entries);

    form.reset();
  });
}

function bindTestingList() {
  const list = document.getElementById('testingList');
  if (!list) {
    return;
  }

  list.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const button = target.closest('[data-action="delete-testing"]');
    if (!button || !(button instanceof HTMLElement)) {
      return;
    }

    const index = Number(button.dataset.index);
    if (Number.isNaN(index)) {
      return;
    }

    const entries = getTestingEntries();
    entries.splice(index, 1);
    setTestingEntries(entries);
    renderTestingEntries(entries);
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
  bindTestingForm();
  bindTestingList();
  renderTestingEntries(getTestingEntries());
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
}

document.addEventListener('DOMContentLoaded', init);
