const SESSION_KEY = 'blasco_session';
const TESTING_STORAGE_KEY = 'blasco_testing_entries';
const TESTING_READ_ONLY = true;
const DEFAULT_TESTING_ENTRIES = [
  {
    name: 'Cruces Mis Retenciones & Mis Comprobantes Test',
    link: 'https://lucianocribeiro.app.n8n.cloud/form/5298d756-4990-48c5-b218-74a20dfc5c9c',
    status: 'en-progreso',
    comment: 'Ajustes: 11, 12 y 16.',
  },
];
const LOGIN_HASH = '#/login';
const DASHBOARD_HASH = '#/dashboard';
const USERS_HASH = '#/users';
const TESTING_HASH = '#/testing';

const CREDENTIALS = {
  username: 'BlascoAI',
  password: '1234Blasco#',
};

const ACTIVE_USER_KEY = 'blasco_active_user';
const USERS = [
  {
    id: 'usuario-1',
    name: 'AGUSTIN',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/5e1f9b08-e8f0-4afb-a5ab-a048606e099d',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/20a290e9-3eea-4d43-a10f-5d5955f242f4',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/435462fa-9fbe-42c3-8d3d-69c5fc6dfbbe',
      'excel-cruces': 'https://drive.google.com/drive/folders/1KxsFt-aicYASBpHf5Rr-me309pqzXj7s',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/0af6203f-1a56-479e-a6ee-4fc0e157183f',
      'iva-papeles': 'https://drive.google.com/drive/folders/13x7M_O8E1rWMEdO3huCu6n1n3JQnkh1q',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/e4395430-b0c0-466a-8c1d-6c2ac9f251af',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/435462fa-9fbe-42c3-8d3d-69c5fc6dfbbe',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/0af6203f-1a56-479e-a6ee-4fc0e157183f',
    },
  },
  {
    id: 'usuario-2',
    name: 'RUBEN',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/1b9a51a5-ef37-4bfa-b6c8-139e336642b9',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/3628dc2a-8c6f-4a6c-bdb2-754f998e57e5',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/c8ddae2b-6070-45d2-ada7-57b515c97f84',
      'excel-cruces': 'https://drive.google.com/drive/folders/1Cgj_GBWANfr2vhLP77XXzwFCLnJZ4rtZ',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/1c792458-f2b5-4554-a121-8646d5b2b83b',
      'iva-papeles': 'https://drive.google.com/drive/folders/1R1HTFTh_OeKAwf6IIkW4a48Tb3WtcfzY',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/df666eec-7fbf-4242-9729-b691547b4fdb',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/c8ddae2b-6070-45d2-ada7-57b515c97f84',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/1c792458-f2b5-4554-a121-8646d5b2b83b',
    },
  },
  {
    id: 'usuario-3',
    name: 'CANDELARIA',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/7d7e24cf-9332-4f55-bb31-e2b28260a8a3',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/79869a2d-4278-4dd1-8575-046ce023925e',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/80b1af77-d3bf-4654-bae2-72bc7f45eb05',
      'excel-cruces': 'https://drive.google.com/drive/folders/10SiYv45_wgHAj06Uo8Bbud-4hSRbnvht',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/93862009-320c-4196-b65b-6bdb426e0a73',
      'iva-papeles': 'https://drive.google.com/drive/folders/1KgpRb4Fq2wVJ3nX3b29LY1ISFt4szirv',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/e8a2735b-0f9c-478d-b788-7708aba45324',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/80b1af77-d3bf-4654-bae2-72bc7f45eb05',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/93862009-320c-4196-b65b-6bdb426e0a73',
    },
  },
  {
    id: 'usuario-4',
    name: 'IVANNA',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/bf8a8643-28bb-4417-97a9-90aab3411f4b',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/e96dbd70-0b0b-443e-bbc4-463f867e33b6',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/fdbc0bb3-fabe-449d-9ece-643a5e2df1aa',
      'excel-cruces': 'https://drive.google.com/drive/folders/1CNgfOzUejj_BTSRz_82ztr0qPtQGC9pu',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/1b3cbd54-1488-4fb4-b67e-c97fe539e45e',
      'iva-papeles': 'https://drive.google.com/drive/folders/1cbheRuIbiyG2c5VyA4dtPcKzNKSCLSKR',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/2422e262-59fb-44f0-b079-7860603c5877',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/fdbc0bb3-fabe-449d-9ece-643a5e2df1aa',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/1b3cbd54-1488-4fb4-b67e-c97fe539e45e',
    },
  },
  {
    id: 'usuario-5',
    name: 'JULIETA',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/ee70b638-ce79-4381-a7ac-2f1f0f605118',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/da244389-3b70-4d4b-9883-10cde735ae0d',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'excel-cruces': 'https://drive.google.com/drive/folders/1KlTHbv4m2nzCxGeeFwlPdQxcgxGGLjrh',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
      'iva-papeles': 'https://drive.google.com/drive/folders/1FcUWMMDYbJeKIfk18d-FOvbGX1yT3ET9',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/b17c0705-bbbe-4afa-8b46-4663cc9d1c13',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
    },
  },
];

function isAuthenticated() {
  return sessionStorage.getItem(SESSION_KEY) === 'active';
}

function getActiveUserId() {
  return sessionStorage.getItem(ACTIVE_USER_KEY);
}

function setActiveUserId(userId) {
  sessionStorage.setItem(ACTIVE_USER_KEY, userId);
}

function clearActiveUser() {
  sessionStorage.removeItem(ACTIVE_USER_KEY);
}

function getActiveUser() {
  const userId = getActiveUserId();
  if (!userId) {
    return null;
  }
  return USERS.find((user) => user.id === userId) || null;
}

function applyUserLinks(user) {
  if (!user) {
    return;
  }
  document.querySelectorAll('[data-link-key]').forEach((link) => {
    const key = link.dataset.linkKey;
    if (!key) {
      return;
    }
    const href = user.links[key];
    if (href) {
      link.href = href;
    }
  });
}

function validateUserLinks() {
  const requiredKeys = new Set(
    Array.from(document.querySelectorAll('[data-link-key]'))
      .map((element) => element.dataset.linkKey)
      .filter(Boolean),
  );

  if (!requiredKeys.size) {
    return;
  }

  USERS.forEach((user) => {
    requiredKeys.forEach((key) => {
      if (!user.links[key]) {
        console.warn(`Missing link key "${key}" for ${user.name}.`);
      }
    });
  });
}

function updateActiveUserUI() {
  const user = getActiveUser();
  const label = document.getElementById('activeUserName');
  const dashboardName = document.getElementById('dashboardUserName');
  const userName = user ? user.name : 'Sin seleccionar';

  if (label) {
    label.textContent = userName;
  }
  if (dashboardName) {
    dashboardName.textContent = userName;
  }
  applyUserLinks(user);
}

function renderUserSelection() {
  const grid = document.getElementById('userSelectGrid');
  if (!grid) {
    return;
  }
  grid.innerHTML = '';

  USERS.forEach((user) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'user-select-button';
    button.dataset.userId = user.id;
    button.textContent = user.name;
    grid.appendChild(button);
  });
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
    clearActiveUser();
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

function bindUserSwitch() {
  const switchButton = document.getElementById('switchUserButton');
  if (!switchButton) {
    return;
  }

  switchButton.addEventListener('click', () => {
    setHash(USERS_HASH);
  });
}

function bindUserSelection() {
  const grid = document.getElementById('userSelectGrid');
  if (!grid) {
    return;
  }

  grid.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }
    const button = target.closest('.user-select-button');
    if (!button || !(button instanceof HTMLElement)) {
      return;
    }
    const userId = button.dataset.userId;
    if (!userId) {
      return;
    }
    setActiveUserId(userId);
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
      setHash(USERS_HASH);
      return;
    }

    if (errorEl) {
      errorEl.classList.add('show');
      errorEl.textContent = 'Credenciales incorrectas. Intenta nuevamente.';
    }
  });
}

function createTestingItem({ name, link, status, comment }, index) {
  const item = document.createElement('div');
  item.className = 'testing-item';
  if (status === 'completada') {
    item.classList.add('is-completed');
  }

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

  actions.appendChild(badge);
  if (!TESTING_READ_ONLY) {
    const editButton = document.createElement('button');
    editButton.className = 'secondary-button testing-edit-button';
    editButton.type = 'button';
    editButton.dataset.action = 'edit-testing';
    editButton.dataset.index = index;
    editButton.textContent = 'Editar';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete-button';
    deleteButton.type = 'button';
    deleteButton.dataset.action = 'delete-testing';
    deleteButton.dataset.index = index;
    deleteButton.textContent = 'Eliminar';

    actions.appendChild(editButton);
    actions.appendChild(deleteButton);
  }

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

  if (comment && comment.trim()) {
    const commentEl = document.createElement('div');
    commentEl.className = 'testing-item-comment';
    commentEl.textContent = comment.trim();
    item.appendChild(commentEl);
  }

  return item;
}

function setTestingFormEditing(form, index) {
  form.dataset.editIndex = String(index);

  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = 'Guardar cambios';
  }

  const cancelButton = document.getElementById('testingCancel');
  if (cancelButton) {
    cancelButton.classList.remove('hidden');
  }
}

function clearTestingFormEditing(form) {
  delete form.dataset.editIndex;

  const submitButton = form.querySelector('button[type="submit"]');
  if (submitButton) {
    submitButton.textContent = 'Agregar prueba';
  }

  const cancelButton = document.getElementById('testingCancel');
  if (cancelButton) {
    cancelButton.classList.add('hidden');
  }
}

function getTestingEntries() {
  if (TESTING_READ_ONLY) {
    return DEFAULT_TESTING_ENTRIES.slice();
  }
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
  if (TESTING_READ_ONLY) {
    return;
  }
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
  if (TESTING_READ_ONLY) {
    const form = document.getElementById('testingForm');
    if (form) {
      form.classList.add('hidden');
    }
    return;
  }
  const form = document.getElementById('testingForm');

  if (!form) {
    return;
  }

  const cancelButton = document.getElementById('testingCancel');
  if (cancelButton) {
    cancelButton.addEventListener('click', () => {
      form.reset();
      clearTestingFormEditing(form);
    });
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('testingName').value.trim();
    const link = document.getElementById('testingLink').value.trim();
    const status = document.getElementById('testingStatus').value;
    const comment = document.getElementById('testingComment').value.trim();

    if (!name || !link || !status) {
      return;
    }

    const entries = getTestingEntries();
    const editIndex = Number(form.dataset.editIndex);
    const nextEntry = { name, link, status, comment };

    if (!Number.isNaN(editIndex)) {
      entries[editIndex] = nextEntry;
    } else {
      entries.push(nextEntry);
    }
    setTestingEntries(entries);
    renderTestingEntries(entries);

    form.reset();
    clearTestingFormEditing(form);
  });
}

function bindTestingList() {
  if (TESTING_READ_ONLY) {
    return;
  }
  const list = document.getElementById('testingList');
  if (!list) {
    return;
  }

  const form = document.getElementById('testingForm');

  list.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) {
      return;
    }

    const editButton = target.closest('[data-action="edit-testing"]');
    if (editButton && editButton instanceof HTMLElement) {
      const index = Number(editButton.dataset.index);
      if (Number.isNaN(index)) {
        return;
      }

      const entries = getTestingEntries();
      const entry = entries[index];
      if (!entry) {
        return;
      }

      document.getElementById('testingName').value = entry.name || '';
      document.getElementById('testingLink').value = entry.link || '';
      document.getElementById('testingStatus').value = entry.status || '';
      document.getElementById('testingComment').value = entry.comment || '';

      if (form) {
        setTestingFormEditing(form, index);
      }
      return;
    }

    const deleteButton = target.closest('[data-action="delete-testing"]');
    if (!deleteButton || !(deleteButton instanceof HTMLElement)) {
      return;
    }

    const index = Number(deleteButton.dataset.index);
    if (Number.isNaN(index)) {
      return;
    }

    const entries = getTestingEntries();
    entries.splice(index, 1);
    setTestingEntries(entries);
    renderTestingEntries(entries);

    if (form && form.dataset.editIndex !== undefined) {
      const editIndex = Number(form.dataset.editIndex);
      if (!Number.isNaN(editIndex)) {
        if (editIndex === index) {
          form.reset();
          clearTestingFormEditing(form);
        } else if (editIndex > index) {
          form.dataset.editIndex = String(editIndex - 1);
        }
      }
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
  const userSelectView = document.getElementById('userSelectView');
  const testingView = document.getElementById('testingView');
  const dashboardSection = document.getElementById('dashboardSection');
  const switchButton = document.getElementById('switchUserButton');

  if (!dashboardView || !testingView || !userSelectView || !dashboardSection) {
    return;
  }

  dashboardView.classList.toggle('hidden', page !== 'dashboard');
  userSelectView.classList.toggle('hidden', page !== 'users');
  testingView.classList.toggle('hidden', page !== 'testing');
  dashboardSection.classList.toggle('user-select-mode', page === 'users');
  if (switchButton) {
    switchButton.classList.toggle('hidden', page === 'users');
  }
}

function handleRoute() {
  const hash = window.location.hash || '';
  const route = hash.replace('#/', '');

  if (route === 'users') {
    if (!isAuthenticated()) {
      setHash(LOGIN_HASH);
      showView('login');
      return;
    }
    showView('dashboard');
    showDashboardPage('users');
    return;
  }

  if (route === 'dashboard') {
    if (!isAuthenticated()) {
      setHash(LOGIN_HASH);
      showView('login');
      return;
    }
    if (!getActiveUser()) {
      setHash(USERS_HASH);
      showView('dashboard');
      showDashboardPage('users');
      return;
    }
    showView('dashboard');
    showDashboardPage('dashboard');
    updateActiveUserUI();
    return;
  }

  if (route === 'testing') {
    if (!isAuthenticated()) {
      setHash(LOGIN_HASH);
      showView('login');
      return;
    }
    if (!getActiveUser()) {
      setHash(USERS_HASH);
      showView('dashboard');
      showDashboardPage('users');
      return;
    }
    showView('dashboard');
    showDashboardPage('testing');
    updateActiveUserUI();
    return;
  }

  if (isAuthenticated()) {
    if (getActiveUser()) {
      setHash(DASHBOARD_HASH);
    } else {
      setHash(USERS_HASH);
    }
    showView('dashboard');
    showDashboardPage(getActiveUser() ? 'dashboard' : 'users');
    updateActiveUserUI();
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
  bindUserSwitch();
  renderUserSelection();
  bindUserSelection();
  bindTestingForm();
  bindTestingList();
  renderTestingEntries(getTestingEntries());
  validateUserLinks();
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
}

document.addEventListener('DOMContentLoaded', init);
