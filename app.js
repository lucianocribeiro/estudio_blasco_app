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
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/ee70b638-ce79-4381-a7ac-2f1f0f605118',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/da244389-3b70-4d4b-9883-10cde735ae0d',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'excel-cruces': 'https://drive.google.com/drive/folders/1lpjZETXnhJ59zOTMKyOX7qUl9UolSoP5',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
      'iva-papeles': 'https://drive.google.com/drive/folders/1_yz3hKyMrRshoL77fOdDFdAGbphcjHQl',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/b17c0705-bbbe-4afa-8b46-4663cc9d1c13',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
    },
  },
  {
    id: 'usuario-2',
    name: 'RUBEN',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/ee70b638-ce79-4381-a7ac-2f1f0f605118',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/da244389-3b70-4d4b-9883-10cde735ae0d',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'excel-cruces': 'https://drive.google.com/drive/folders/1lpjZETXnhJ59zOTMKyOX7qUl9UolSoP5',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
      'iva-papeles': 'https://drive.google.com/drive/folders/1_yz3hKyMrRshoL77fOdDFdAGbphcjHQl',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/b17c0705-bbbe-4afa-8b46-4663cc9d1c13',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
    },
  },
  {
    id: 'usuario-3',
    name: 'CANDELARIA',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/ee70b638-ce79-4381-a7ac-2f1f0f605118',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/da244389-3b70-4d4b-9883-10cde735ae0d',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'excel-cruces': 'https://drive.google.com/drive/folders/1lpjZETXnhJ59zOTMKyOX7qUl9UolSoP5',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
      'iva-papeles': 'https://drive.google.com/drive/folders/1_yz3hKyMrRshoL77fOdDFdAGbphcjHQl',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/b17c0705-bbbe-4afa-8b46-4663cc9d1c13',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
    },
  },
  {
    id: 'usuario-4',
    name: 'IVANNA',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/ee70b638-ce79-4381-a7ac-2f1f0f605118',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/da244389-3b70-4d4b-9883-10cde735ae0d',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'excel-cruces': 'https://drive.google.com/drive/folders/1lpjZETXnhJ59zOTMKyOX7qUl9UolSoP5',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
      'iva-papeles': 'https://drive.google.com/drive/folders/1_yz3hKyMrRshoL77fOdDFdAGbphcjHQl',
      'iva-validacion': 'https://lucianocribeiro.app.n8n.cloud/form/b17c0705-bbbe-4afa-8b46-4663cc9d1c13',
      'action-cruces': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'action-iva': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
    },
  },
  {
    id: 'usuario-5',
    name: 'JULIETA',
    links: {
      'mis-retenciones': 'https://lucianocribeiro.app.n8n.cloud/form/ee70b638-ce79-4381-a7ac-2f1f0f605118',
      'mis-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/da244389-3b70-4d4b-9883-10cde735ae0d',
      'mis-retenciones-comprobantes': 'https://lucianocribeiro.app.n8n.cloud/form/c96f19ec-5ab8-495d-a6ba-4cd535ad071b',
      'excel-cruces': 'https://drive.google.com/drive/folders/1lpjZETXnhJ59zOTMKyOX7qUl9UolSoP5',
      'iva-liquidacion': 'https://lucianocribeiro.app.n8n.cloud/form/61baf8d4-fe6a-4c2f-b85d-ec2c2ef5658e',
      'iva-papeles': 'https://drive.google.com/drive/folders/1_yz3hKyMrRshoL77fOdDFdAGbphcjHQl',
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
  handleRoute();
  window.addEventListener('hashchange', handleRoute);
}

document.addEventListener('DOMContentLoaded', init);
