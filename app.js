(() => {
  const STORAGE_KEY = 'json_viewer_pro_settings_v1';
  const JSON_STORAGE_KEY = 'json_viewer_pro_last_json_v1';

  const SAMPLE_JSON = {
    company: {
      name: 'Acme Labs',
      active: true,
      founded: 2020,
      departments: [
        {
          id: 1,
          name: 'Engineering',
          stack: ['JavaScript', 'TypeScript', 'Node.js'],
          headcount: 24,
          metadata: { remoteFriendly: true, budget: 180000 }
        },
        {
          id: 2,
          name: 'Design',
          stack: ['Figma', 'Framer'],
          headcount: 6,
          metadata: { remoteFriendly: true, budget: 60000 }
        }
      ]
    },
    features: {
      search: ['keys', 'values', 'paths'],
      views: ['tree', 'raw', 'table', 'diff'],
      privacy: 'Runs 100% in your browser'
    },
    nullableField: null
  };

  const i18n = {
    en: {
      title: 'JSON Viewer Pro',
      subtitle: 'Visual, private, browser-only JSON explorer',
      input: 'Input',
      viewer: 'Viewer',
      noJson: 'No JSON loaded yet',
      paste: 'Paste',
      file: 'File',
      url: 'URL',
      diff: 'Diff',
      pasteLabel: 'Paste your JSON',
      loadJson: 'Load JSON',
      copyRaw: 'Copy Raw',
      dropLabel: 'Drop a .json file here or browse',
      dropHelp: 'Drag & drop a file, or click to select',
      urlLabel: 'Load JSON from URL',
      urlHint: 'Works when the remote server allows CORS in your browser.',
      leftJson: 'Left JSON',
      rightJson: 'Right JSON',
      compare: 'Compare',
      useMainLeft: 'Use main JSON on left',
      useMainRight: 'Use main JSON on right',
      beautify: 'Beautify',
      minify: 'Minify',
      clear: 'Clear',
      sample: 'Sample',
      expandAll: 'Expand all',
      collapseAll: 'Collapse all',
      hideInput: 'Hide input',
      showInput: 'Show input',
      hideNodePanel: 'Hide node panel',
      showNodePanel: 'Show node panel',
      keys: 'Keys',
      values: 'Values',
      paths: 'Paths',
      caseSensitive: 'Case sensitive',
      find: 'Find',
      previous: 'Previous',
      next: 'Next',
      matchesOnly: 'Show only matches',
      hideNulls: 'Hide nulls',
      hideEmpty: 'Hide empty arrays/objects',
      type: 'Type',
      view: 'View',
      tree: 'Tree',
      raw: 'Raw',
      table: 'Table',
      details: 'Node details',
      settings: 'Settings',
      settingsTitle: 'Settings',
      inputAction: 'Action',
      apply: 'Apply',
      pathFormat: 'Path format',
      indentSize: 'Indent size',
      rememberLast: 'Remember last JSON',
      typeBadges: 'Show type badges',
      language: 'Language',
      theme: 'Theme',
      statusReady: 'Ready.',
      loaded: 'JSON loaded successfully.',
      invalidJson: 'Invalid JSON. Check the syntax and try again.',
      copied: 'Copied to clipboard.',
      cleared: 'Input cleared.',
      fetched: 'JSON fetched successfully.',
      fetchError: 'Could not fetch JSON from URL. The server may block browser access (CORS) or the response is invalid.',
      noMatches: '0 matches',
      selectNode: 'Select a node to inspect it.',
      tableRows: 'rows',
      copiedPath: 'Path copied.',
      copiedValue: 'Value copied.',
      diffReady: 'Diff ready.',
      diffError: 'Both diff panels must contain valid JSON.',
      treeEmpty: 'Load JSON to see the tree view.',
      rawEmpty: 'Load JSON to see the raw formatted view.',
      tableEmpty: 'Load JSON to see the table view.',
      diffEmpty: 'Run a diff to see changes here.',
      filterApplied: 'Filters applied.',
      browseTitle: 'Open JSON file',
      root: 'root',
      size: 'Size',
      value: 'Value',
      key: 'Key',
      path: 'Path',
      copy: 'Copy',
      save: 'Save',
      edit: 'Edit',
      savedChanges: 'Changes saved.',
      typeNames: {
        object: 'Object', array: 'Array', string: 'String', number: 'Number', boolean: 'Boolean', null: 'Null'
      },
      themes: { auto: 'Auto', light: 'Light', dark: 'Dark' },
      pathFormats: { dot: 'Dot notation', bracket: 'Bracket notation', jsonpath: 'JSONPath' }
    },
    es: {
      title: 'JSON Viewer Pro',
      subtitle: 'Explorador JSON visual, privado y 100% en el navegador',
      input: 'Entrada',
      viewer: 'Visor',
      noJson: 'Todavía no hay JSON cargado',
      paste: 'Pegar',
      file: 'Archivo',
      url: 'URL',
      diff: 'Diff',
      pasteLabel: 'Pegá tu JSON',
      loadJson: 'Cargar JSON',
      copyRaw: 'Copiar raw',
      dropLabel: 'Soltá un archivo .json acá o buscá uno',
      dropHelp: 'Arrastrá y soltá un archivo, o hacé clic para elegirlo',
      urlLabel: 'Cargar JSON desde URL',
      urlHint: 'Funciona cuando el servidor remoto permite CORS en tu navegador.',
      leftJson: 'JSON izquierdo',
      rightJson: 'JSON derecho',
      compare: 'Comparar',
      useMainLeft: 'Usar JSON principal a la izquierda',
      useMainRight: 'Usar JSON principal a la derecha',
      beautify: 'Embellecer',
      minify: 'Minificar',
      clear: 'Limpiar',
      sample: 'Ejemplo',
      expandAll: 'Expandir todo',
      collapseAll: 'Colapsar todo',
      hideInput: 'Ocultar entrada',
      showInput: 'Mostrar entrada',
      hideNodePanel: 'Ocultar panel de nodo',
      showNodePanel: 'Mostrar panel de nodo',
      keys: 'Keys',
      values: 'Valores',
      paths: 'Rutas',
      caseSensitive: 'Sensible a mayúsculas',
      find: 'Buscar',
      previous: 'Anterior',
      next: 'Siguiente',
      matchesOnly: 'Mostrar solo coincidencias',
      hideNulls: 'Ocultar nulls',
      hideEmpty: 'Ocultar arrays/objetos vacíos',
      type: 'Tipo',
      view: 'Vista',
      tree: 'Árbol',
      raw: 'Raw',
      table: 'Tabla',
      details: 'Detalle del nodo',
      settings: 'Configuración',
      settingsTitle: 'Configuración',
      inputAction: 'Acción',
      apply: 'Aplicar',
      pathFormat: 'Formato de ruta',
      indentSize: 'Tamaño de indentación',
      rememberLast: 'Recordar último JSON',
      typeBadges: 'Mostrar badges de tipo',
      language: 'Idioma',
      theme: 'Tema',
      statusReady: 'Listo.',
      loaded: 'JSON cargado correctamente.',
      invalidJson: 'JSON inválido. Revisá la sintaxis e intentá de nuevo.',
      copied: 'Copiado al portapapeles.',
      cleared: 'Entrada limpiada.',
      fetched: 'JSON obtenido correctamente.',
      fetchError: 'No se pudo obtener el JSON desde la URL. El servidor puede bloquear el acceso del navegador (CORS) o la respuesta no es válida.',
      noMatches: '0 coincidencias',
      selectNode: 'Seleccioná un nodo para inspeccionarlo.',
      tableRows: 'filas',
      copiedPath: 'Ruta copiada.',
      copiedValue: 'Valor copiado.',
      diffReady: 'Diff listo.',
      diffError: 'Ambos paneles del diff deben contener JSON válido.',
      treeEmpty: 'Cargá un JSON para ver el árbol.',
      rawEmpty: 'Cargá un JSON para ver la vista raw.',
      tableEmpty: 'Cargá un JSON para ver la tabla.',
      diffEmpty: 'Ejecutá un diff para ver cambios acá.',
      filterApplied: 'Filtros aplicados.',
      browseTitle: 'Abrir archivo JSON',
      root: 'raíz',
      size: 'Tamaño',
      value: 'Valor',
      key: 'Clave',
      path: 'Ruta',
      copy: 'Copiar',
      save: 'Guardar',
      edit: 'Editar',
      savedChanges: 'Cambios guardados.',
      typeNames: {
        object: 'Objeto', array: 'Array', string: 'String', number: 'Number', boolean: 'Boolean', null: 'Null'
      },
      themes: { auto: 'Auto', light: 'Claro', dark: 'Oscuro' },
      pathFormats: { dot: 'Notación punto', bracket: 'Notación corchetes', jsonpath: 'JSONPath' }
    }
  };

  const state = {
    data: null,
    rawText: '',
    parsedRoot: null,
    language: 'en',
    theme: 'auto',
    searchResults: [],
    activeMatchIndex: -1,
    selectedPath: null,
    viewMode: 'tree',
    inputHidden: false,
    detailsHidden: false,
    diffLeft: null,
    diffRight: null,
    diffLines: [],
    settings: {
      pathFormat: 'dot',
      indentSize: 2,
      rememberLastJson: true,
      showTypeBadges: true
    }
  };

  const el = {};

  function $(id) { return document.getElementById(id); }

  function cacheEls() {
    [
      'jsonInput','statusBox','treeView','rawView','tableView','diffView','searchInput','searchMeta','nodeDetails',
      'languageSelect','themeSelect','pathFormat','indentSize','rememberLastJson','showTypeBadges',
      'settingsModal','viewMode','searchKeys','searchValues','searchPaths','caseSensitive','filterMatchesOnly','hideNulls','hideEmpty',
      'typeFilter','leftDiffInput','rightDiffInput','urlInput','fileInput','dropZone','toggleInputPanelBtn','toggleDetailsPanelBtn'
    ].forEach(id => el[id] = $(id));

    // Keep camelCase access in JS while matching the kebab-case id in HTML.
    el.viewerMeta = $('viewer-meta');
    el.layout = document.querySelector('.layout');
    el.viewerGrid = document.querySelector('.viewer-grid');
  }

  function renderPanelVisibility() {
    el.layout?.classList.toggle('focus-viewer', state.inputHidden);
    el.viewerGrid?.classList.toggle('details-hidden', state.detailsHidden);
    el.toggleInputPanelBtn.textContent = state.inputHidden ? t('showInput') : t('hideInput');
    el.toggleDetailsPanelBtn.textContent = state.detailsHidden ? t('showNodePanel') : t('hideNodePanel');
  }

  function t(key) {
    const parts = key.split('.');
    let cursor = i18n[state.language];
    for (const part of parts) cursor = cursor?.[part];
    return cursor ?? key;
  }

  function typeOfValue(value) {
    if (value === null) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
  }

  function isContainer(value) {
    return value !== null && typeof value === 'object';
  }

  function saveSettings() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      language: state.language,
      theme: state.theme,
      settings: state.settings
    }));
  }

  function loadSettings() {
    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      state.language = saved.language || 'en';
      state.theme = saved.theme || 'auto';
      state.settings = { ...state.settings, ...(saved.settings || {}) };
    } catch {}

    if (state.settings.rememberLastJson) {
      const last = localStorage.getItem(JSON_STORAGE_KEY);
      if (last) {
        el.jsonInput.value = last;
        parseAndLoad(last, { silentStatus: true });
      }
    }
  }

  function persistLastJson(text) {
    if (state.settings.rememberLastJson && text) localStorage.setItem(JSON_STORAGE_KEY, text);
    else if (!state.settings.rememberLastJson) localStorage.removeItem(JSON_STORAGE_KEY);
  }

  function setStatus(message, kind = '') {
    el.statusBox.textContent = message;
    el.statusBox.className = `status ${kind}`.trim();
  }

  function applyTheme() {
    const theme = state.theme === 'auto'
      ? (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      : state.theme;
    document.body.classList.toggle('light', theme === 'light');
  }

  function updateLanguageUI() {
    document.documentElement.lang = state.language;
    $('app-title').textContent = t('title');
    $('app-subtitle').textContent = t('subtitle');
    $('input-title').textContent = t('input');
    $('viewer-title').textContent = t('viewer');
    $('tab-paste').textContent = t('paste');
    $('tab-file').textContent = t('file');
    $('tab-url').textContent = t('url');
    $('tab-diff').textContent = t('diff');
    $('json-input-label').textContent = t('pasteLabel');
    $('loadJsonBtn').textContent = t('loadJson');
    $('copyRawBtn').textContent = t('copyRaw');
    $('drop-label').textContent = t('dropLabel');
    $('drop-help').textContent = t('dropHelp');
    $('url-label').textContent = t('urlLabel');
    $('url-hint').textContent = t('urlHint');
    $('left-json-label').textContent = t('leftJson');
    $('right-json-label').textContent = t('rightJson');
    $('runDiffBtn').textContent = t('compare');
    $('loadLeftFromMainBtn').textContent = t('useMainLeft');
    $('loadRightFromMainBtn').textContent = t('useMainRight');
    $('input-action-label').textContent = t('inputAction');
    $('runInputActionBtn').textContent = t('apply');
    $('clearBtn').setAttribute('aria-label', t('clear'));
    $('clearBtn').setAttribute('title', t('clear'));
    $('expandAllBtn').textContent = t('expandAll');
    $('collapseAllBtn').textContent = t('collapseAll');
    $('toggleInputPanelBtn').textContent = state.inputHidden ? t('showInput') : t('hideInput');
    $('toggleDetailsPanelBtn').textContent = state.detailsHidden ? t('showNodePanel') : t('hideNodePanel');
    $('search-keys-label').textContent = t('keys');
    $('search-values-label').textContent = t('values');
    $('search-paths-label').textContent = t('paths');
    $('case-sensitive-label').textContent = t('caseSensitive');
    $('findBtn').textContent = t('find');
    $('prevMatchBtn').textContent = t('previous');
    $('nextMatchBtn').textContent = t('next');
    $('matches-only-label').textContent = t('matchesOnly');
    $('hide-nulls-label').textContent = t('hideNulls');
    $('hide-empty-label').textContent = t('hideEmpty');
    $('type-filter-label').textContent = t('type');
    $('view-mode-label').textContent = t('view');
    $('details-title').textContent = t('details');
    $('settings-btn-label').textContent = t('settings');
    $('settings-modal-title').textContent = t('settingsTitle');
    $('path-format-label').textContent = t('pathFormat');
    $('indent-label').textContent = t('indentSize');
    $('remember-json-label').textContent = t('rememberLast');
    $('type-badges-label').textContent = t('typeBadges');
    $('lang-label').textContent = t('language');
    $('theme-label').textContent = t('theme');
    $('copyDetailsBtn').textContent = t('copy');
    el.searchInput.placeholder = state.language === 'en' ? 'Search by key, value, or path' : 'Buscar por key, valor o ruta';

    const themeOptions = $('themeSelect').options;
    ['auto','light','dark'].forEach((k, i) => themeOptions[i].textContent = t(`themes.${k}`));
    const pathOptions = $('pathFormat').options;
    ['dot','bracket','jsonpath'].forEach((k, i) => pathOptions[i].textContent = t(`pathFormats.${k}`));
    const inputActionOptions = $('inputActionSelect').options;
    ['sample','beautify','minify'].forEach((k, i) => inputActionOptions[i].textContent = t(k));
    const viewOptions = $('viewMode').options;
    ['tree','raw','table','diff'].forEach((k, i) => viewOptions[i].textContent = t(k));
    const typeOptions = $('typeFilter').options;
    ['all','object','array','string','number','boolean','null'].forEach((k, i) => {
      typeOptions[i].textContent = k === 'all' ? (state.language === 'en' ? 'All' : 'Todos') : t(`typeNames.${k}`);
    });

    if (!el.statusBox.textContent) setStatus(t('statusReady'));
    if (!state.data) {
      el.treeView.textContent = t('treeEmpty');
      el.rawView.textContent = t('rawEmpty');
      renderTable([]);
      el.nodeDetails.textContent = t('selectNode');
    }
    renderSearchMeta();
    updateViewerMeta();
    renderPanelVisibility();
    renderCurrentView();
  }

  function formatPath(pathArray, mode = state.settings.pathFormat) {
    if (!pathArray.length) return mode === 'jsonpath' ? '$' : t('root');
    if (mode === 'dot') {
      return pathArray.map((segment, index) => {
        if (typeof segment === 'number') return `[${segment}]`;
        if (index === 0) return segment;
        return /^[A-Za-z_$][\w$]*$/.test(segment) ? `.${segment}` : `["${segment}"]`;
      }).join('');
    }
    if (mode === 'bracket') {
      return pathArray.map(segment => typeof segment === 'number' ? `[${segment}]` : `["${segment}"]`).join('');
    }
    return '$' + pathArray.map(segment => typeof segment === 'number' ? `[${segment}]` : /^[A-Za-z_$][\w$]*$/.test(segment) ? `.${segment}` : `["${segment}"]`).join('');
  }

  function safeStringify(value) {
    if (typeof value === 'string') return value;
    return JSON.stringify(value, null, state.settings.indentSize);
  }

  function parseAndLoad(text, options = {}) {
    try {
      const parsed = JSON.parse(text);
      state.data = parsed;
      state.rawText = text;
      persistLastJson(text);
      rebuild(parsed);
      if (!options.silentStatus) setStatus(t('loaded'), 'success');
      return true;
    } catch (error) {
      if (!options.silentStatus) setStatus(`${t('invalidJson')} ${error.message}`, 'error');
      return false;
    }
  }

  function rebuild(data) {
    state.parsedRoot = buildNode(data, [], null, null);
    state.selectedPath = null;
    state.searchResults = [];
    state.activeMatchIndex = -1;
    renderCurrentView();
    updateViewerMeta();
    showNodeDetails(null);
  }

  function buildNode(value, path, key, parentType) {
    const type = typeOfValue(value);
    const node = {
      id: path.length ? formatPath(path, 'jsonpath') : '$',
      key,
      value,
      type,
      parentType,
      path,
      pathLabel: formatPath(path),
      expanded: path.length < 2,
      children: [],
      searchableValue: type === 'object' || type === 'array' ? '' : String(value),
      size: type === 'object' ? Object.keys(value || {}).length : type === 'array' ? value.length : null
    };

    if (type === 'object') {
      for (const [childKey, childValue] of Object.entries(value)) {
        node.children.push(buildNode(childValue, [...path, childKey], childKey, type));
      }
    } else if (type === 'array') {
      value.forEach((childValue, index) => {
        node.children.push(buildNode(childValue, [...path, index], index, type));
      });
    }
    return node;
  }

  function flattenNodes(node, output = []) {
    output.push(node);
    node.children.forEach(child => flattenNodes(child, output));
    return output;
  }

  function shouldShowNode(node, matchedSet) {
    if (!node) return false;
    if (el.hideNulls.checked && node.type === 'null') return false;
    if (el.hideEmpty.checked && (node.type === 'object' || node.type === 'array') && node.size === 0) return false;
    const typeFilter = el.typeFilter.value;
    if (typeFilter !== 'all' && node.type !== typeFilter) return false;
    if (el.filterMatchesOnly.checked && matchedSet && !matchedSet.has(node.id) && !descendantMatches(node, matchedSet)) return false;
    return true;
  }

  function descendantMatches(node, matchedSet) {
    return node.children.some(child => matchedSet.has(child.id) || descendantMatches(child, matchedSet));
  }

  function renderCurrentView() {
    ['treeView','rawView','tableView','diffView'].forEach(id => $(id).classList.remove('active'));
    const mode = state.viewMode;
    if (mode === 'tree') renderTree();
    if (mode === 'raw') renderRaw();
    if (mode === 'table') renderTableView();
    if (mode === 'diff') renderDiffView();
    $(`${mode}View`).classList.add('active');
  }

  function renderTree() {
    if (!state.parsedRoot) {
      el.treeView.textContent = t('treeEmpty');
      return;
    }
    el.treeView.innerHTML = '';
    const matchedSet = new Set(state.searchResults.map(r => r.id));
    el.treeView.appendChild(createTreeElement(state.parsedRoot, matchedSet));
    highlightActiveMatch();
  }

  function createTreeElement(node, matchedSet) {
    const wrapper = document.createElement('div');
    wrapper.className = 'tree-node';
    if (!shouldShowNode(node, matchedSet)) wrapper.classList.add('hidden');

    const row = document.createElement('div');
    row.className = 'tree-row';
    row.dataset.nodeId = node.id;
    if (state.selectedPath === node.id) row.classList.add('selected');
    if (matchedSet.has(node.id)) row.classList.add('match');

    const toggle = document.createElement('button');
    toggle.className = 'toggle';
    toggle.textContent = node.children.length ? (node.expanded ? '▾' : '▸') : '·';
    toggle.disabled = !node.children.length;
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      node.expanded = !node.expanded;
      renderTree();
    });

    const content = document.createElement('div');
    content.className = 'flex-1';
    content.innerHTML = renderRowHtml(node);
    row.append(toggle, content);
    row.addEventListener('click', () => {
      state.selectedPath = node.id;
      showNodeDetails(node);
      renderTree();
    });

    wrapper.appendChild(row);

    if (node.children.length) {
      const children = document.createElement('div');
      children.className = 'children';
      if (!node.expanded) children.classList.add('hidden');
      node.children.forEach(child => children.appendChild(createTreeElement(child, matchedSet)));
      wrapper.appendChild(children);
    }
    return wrapper;
  }

  function renderRowHtml(node) {
    const key = node.key !== null && node.key !== undefined ? `<span class="key">${escapeHtml(String(node.key))}</span>:` : `<span class="key">${t('root')}</span>`;
    const typeBadge = state.settings.showTypeBadges ? `<span class="type-badge">${escapeHtml(t(`typeNames.${node.type}`))}</span>` : '';
    let valueHtml = '';

    if (node.type === 'object') valueHtml = `<span class="value">{ ${node.size} }</span>`;
    else if (node.type === 'array') valueHtml = `<span class="value">[ ${node.size} ]</span>`;
    else if (node.type === 'string') valueHtml = `<span class="value string">"${highlight(escapeHtml(node.searchableValue))}"</span>`;
    else valueHtml = `<span class="value ${node.type}">${highlight(escapeHtml(String(node.value)))}</span>`;

    const highlightedKey = node.key !== null && node.key !== undefined
      ? `<span class="key">${highlight(escapeHtml(String(node.key)), 'key')}</span>:`
      : `<span class="key">${t('root')}</span>`;

    return `
      <div class="row wrap gap-sm" title="${escapeHtml(formatPath(node.path))}">
        ${node.key !== null && node.key !== undefined ? highlightedKey : key}
        ${typeBadge}
        ${valueHtml}
      </div>
    `;
  }

  function highlight(text, mode = 'value') {
    const query = el.searchInput.value;
    if (!query || !state.searchResults.length) return text;
    const flags = el.caseSensitive.checked ? 'g' : 'gi';
    try {
      const regex = new RegExp(escapeRegExp(query), flags);
      const shouldHighlight = (mode === 'key' && el.searchKeys.checked) || (mode === 'value' && el.searchValues.checked) || mode === 'path';
      return shouldHighlight ? text.replace(regex, match => `<mark>${match}</mark>`) : text;
    } catch {
      return text;
    }
  }

  function renderRaw() {
    if (!state.data) {
      el.rawView.textContent = t('rawEmpty');
      return;
    }
    el.rawView.textContent = JSON.stringify(state.data, null, state.settings.indentSize);
  }

  function renderTableView() {
    if (!state.parsedRoot) {
      renderTable([]);
      return;
    }
    const rows = flattenNodes(state.parsedRoot)
      .filter(node => shouldShowNode(node, new Set(state.searchResults.map(r => r.id))))
      .map(node => ({
        key: node.key ?? t('root'),
        path: formatPath(node.path),
        type: t(`typeNames.${node.type}`),
        value: node.type === 'object' ? `{ ${node.size} }` : node.type === 'array' ? `[ ${node.size} ]` : safeStringify(node.value)
      }));
    renderTable(rows);
  }

  function renderTable(rows) {
    if (!rows.length) {
      el.tableView.innerHTML = `<div class="empty-state">${state.data ? `${0} ${t('tableRows')}` : t('tableEmpty')}</div>`;
      return;
    }
    el.tableView.innerHTML = `
      <table>
        <thead>
          <tr>
            <th>${t('key')}</th>
            <th>${t('path')}</th>
            <th>${t('type')}</th>
            <th>${t('value')}</th>
          </tr>
        </thead>
        <tbody>
          ${rows.map(row => `
            <tr>
              <td>${escapeHtml(String(row.key))}</td>
              <td>${escapeHtml(row.path)}</td>
              <td>${escapeHtml(row.type)}</td>
              <td>${escapeHtml(String(row.value)).slice(0, 1500)}</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  function renderDiffView() {
    if (!state.diffLines.length) {
      el.diffView.innerHTML = `<div class="empty-state">${t('diffEmpty')}</div>`;
      return;
    }
    const leftLines = [];
    const rightLines = [];
    state.diffLines.forEach(line => {
      const css = line.kind ? `diff-line ${line.kind}` : 'diff-line';
      leftLines.push(`<div class="${css}">${escapeHtml(line.left)}</div>`);
      rightLines.push(`<div class="${css}">${escapeHtml(line.right)}</div>`);
    });
    el.diffView.innerHTML = `
      <div class="diff-grid">
        <div class="diff-box">
          <div class="diff-box__header">${t('leftJson')}</div>
          <div class="diff-content">${leftLines.join('')}</div>
        </div>
        <div class="diff-box">
          <div class="diff-box__header">${t('rightJson')}</div>
          <div class="diff-content">${rightLines.join('')}</div>
        </div>
      </div>
    `;
  }

  function showNodeDetails(node) {
    if (!node) {
      el.nodeDetails.className = 'node-details empty-state';
      el.nodeDetails.textContent = t('selectNode');
      return;
    }
    el.nodeDetails.className = 'node-details';
    const value = node.type === 'object' || node.type === 'array' ? safeStringify(node.value) : String(node.value);
    el.nodeDetails.innerHTML = `
      <dl>
        <div>
          <dt>${t('key')}</dt>
          <dd>${escapeHtml(String(node.key ?? t('root')))}</dd>
        </div>
        <div>
          <dt>${t('path')}</dt>
          <dd>${escapeHtml(formatPath(node.path))}</dd>
        </div>
        <div>
          <dt>${t('type')}</dt>
          <dd>${escapeHtml(t(`typeNames.${node.type}`))}</dd>
        </div>
        <div>
          <dt>${t('size')}</dt>
          <dd>${node.size ?? '—'}</dd>
        </div>
        <div>
          <dt>${t('value')}</dt>
          <dd><pre class="raw-view">${escapeHtml(value)}</pre></dd>
        </div>
      </dl>
      <div class="row gap-sm wrap mt-sm">
        <button class="button ghost compact" data-action="copy-path">${t('copy')} ${t('path')}</button>
        <button class="button ghost compact" data-action="copy-value">${t('copy')} ${t('value')}</button>
      </div>
      <div class="mt-sm">
        <label class="label">${t('edit')} JSON</label>
        <textarea data-action="edit-value" class="small-textarea">${escapeHtml(safeStringify(node.value))}</textarea>
        <div class="row gap-sm wrap mt-sm">
          <button class="button primary compact" data-action="save-node">${t('save')}</button>
        </div>
      </div>
    `;

    el.nodeDetails.querySelector('[data-action="copy-path"]')?.addEventListener('click', () => {
      copyText(formatPath(node.path));
      setStatus(t('copiedPath'), 'success');
    });
    el.nodeDetails.querySelector('[data-action="copy-value"]')?.addEventListener('click', () => {
      copyText(value);
      setStatus(t('copiedValue'), 'success');
    });
    el.nodeDetails.querySelector('[data-action="save-node"]')?.addEventListener('click', () => {
      const edited = el.nodeDetails.querySelector('[data-action="edit-value"]')?.value ?? '';
      try {
        const parsed = JSON.parse(edited);
        updateValueAtPath(state.data, node.path, parsed);
        const refreshed = JSON.stringify(state.data, null, state.settings.indentSize);
        el.jsonInput.value = refreshed;
        state.rawText = refreshed;
        persistLastJson(refreshed);
        rebuild(state.data);
        const selected = findNodeById(state.parsedRoot, node.id);
        if (selected) {
          state.selectedPath = selected.id;
          showNodeDetails(selected);
        }
        setStatus(t('savedChanges'), 'success');
      } catch (error) {
        setStatus(`${t('invalidJson')} ${error.message}`, 'error');
      }
    });
  }

  function performSearch() {
    if (!state.parsedRoot) return;
    const query = el.searchInput.value;
    const nodes = flattenNodes(state.parsedRoot);
    if (!query) {
      state.searchResults = [];
      state.activeMatchIndex = -1;
      renderSearchMeta();
      renderCurrentView();
      return;
    }

    const normalize = value => el.caseSensitive.checked ? String(value) : String(value).toLowerCase();
    const q = normalize(query);
    state.searchResults = nodes.filter(node => {
      const keyMatch = el.searchKeys.checked && node.key !== null && normalize(node.key).includes(q);
      const valueMatch = el.searchValues.checked && normalize(node.searchableValue).includes(q);
      const pathMatch = el.searchPaths.checked && normalize(formatPath(node.path)).includes(q);
      return keyMatch || valueMatch || pathMatch;
    });

    state.activeMatchIndex = state.searchResults.length ? 0 : -1;
    state.searchResults.forEach(result => expandPath(result.path));
    renderSearchMeta();
    renderCurrentView();
    focusActiveMatch();
  }

  function renderSearchMeta() {
    if (!state.searchResults.length) {
      el.searchMeta.textContent = t('noMatches');
    } else {
      el.searchMeta.textContent = `${state.activeMatchIndex + 1}/${state.searchResults.length}`;
    }
  }

  function focusActiveMatch(step = 0) {
    if (!state.searchResults.length) return;
    state.activeMatchIndex = (state.activeMatchIndex + step + state.searchResults.length) % state.searchResults.length;
    const active = state.searchResults[state.activeMatchIndex];
    expandPath(active.path);
    state.selectedPath = active.id;
    showNodeDetails(active);
    renderCurrentView();
    setTimeout(highlightActiveMatch, 0);
  }

  function highlightActiveMatch() {
    document.querySelectorAll('.tree-row.active-match').forEach(node => node.classList.remove('active-match'));
    const active = state.searchResults[state.activeMatchIndex];
    if (!active) return;
    const row = document.querySelector(`.tree-row[data-node-id="${cssEscape(active.id)}"]`);
    row?.classList.add('active-match');
    row?.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

  function expandPath(path) {
    let current = state.parsedRoot;
    current.expanded = true;
    for (const segment of path) {
      current = current.children.find(child => child.key === segment);
      if (!current) break;
      current.expanded = true;
    }
  }

  function updateValueAtPath(root, path, value) {
    if (!path.length) {
      state.data = value;
      return;
    }
    let current = root;
    for (let i = 0; i < path.length - 1; i += 1) current = current[path[i]];
    current[path[path.length - 1]] = value;
  }

  function findNodeById(node, id) {
    if (!node) return null;
    if (node.id === id) return node;
    for (const child of node.children) {
      const found = findNodeById(child, id);
      if (found) return found;
    }
    return null;
  }

  function updateViewerMeta() {
    if (!state.data) {
      el.viewerMeta.textContent = t('noJson');
      return;
    }
    const type = t(`typeNames.${typeOfValue(state.data)}`);
    const count = flattenNodes(state.parsedRoot).length;
    el.viewerMeta.textContent = `${type} • ${count} ${state.language === 'en' ? 'nodes' : 'nodos'}`;
  }

  function expandCollapseAll(expanded) {
    if (!state.parsedRoot) return;
    flattenNodes(state.parsedRoot).forEach(node => { if (node.children.length) node.expanded = expanded; });
    renderTree();
  }

  function formatMainJson(minify = false) {
    if (!el.jsonInput.value.trim()) return;
    try {
      const parsed = JSON.parse(el.jsonInput.value);
      el.jsonInput.value = JSON.stringify(parsed, null, minify ? 0 : state.settings.indentSize);
      if (!minify) setStatus(t('loaded'), 'success');
    } catch (error) {
      setStatus(`${t('invalidJson')} ${error.message}`, 'error');
    }
  }

  async function copyText(text) {
    await navigator.clipboard.writeText(text);
  }

  function runDiff() {
    try {
      state.diffLeft = JSON.parse(el.leftDiffInput.value);
      state.diffRight = JSON.parse(el.rightDiffInput.value);
    } catch {
      setStatus(t('diffError'), 'error');
      return;
    }

    const left = flattenForDiff(state.diffLeft);
    const right = flattenForDiff(state.diffRight);
    const keys = Array.from(new Set([...Object.keys(left), ...Object.keys(right)])).sort();
    state.diffLines = keys.map(key => {
      const l = left[key];
      const r = right[key];
      if (l === undefined) return { left: '', right: `${key}: ${r}`, kind: 'added' };
      if (r === undefined) return { left: `${key}: ${l}`, right: '', kind: 'removed' };
      if (l !== r) return { left: `${key}: ${l}`, right: `${key}: ${r}`, kind: 'changed' };
      return { left: `${key}: ${l}`, right: `${key}: ${r}`, kind: '' };
    });
    state.viewMode = 'diff';
    el.viewMode.value = 'diff';
    renderCurrentView();
    setStatus(t('diffReady'), 'success');
  }

  function flattenForDiff(obj, path = [], output = {}) {
    const type = typeOfValue(obj);
    if (type === 'object') {
      const keys = Object.keys(obj);
      if (!keys.length) output[formatPath(path, 'jsonpath')] = '{}';
      keys.forEach(key => flattenForDiff(obj[key], [...path, key], output));
      return output;
    }
    if (type === 'array') {
      if (!obj.length) output[formatPath(path, 'jsonpath')] = '[]';
      obj.forEach((item, index) => flattenForDiff(item, [...path, index], output));
      return output;
    }
    output[formatPath(path, 'jsonpath')] = JSON.stringify(obj);
    return output;
  }

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = () => {
      const text = String(reader.result || '');
      el.jsonInput.value = text;
      parseAndLoad(text);
    };
    reader.readAsText(file);
  }

  async function loadJsonFromUrl() {
    const url = el.urlInput.value.trim();
    if (!url) return;
    try {
      const response = await fetch(url);
      const text = await response.text();
      let normalized = text;
      try {
        normalized = JSON.stringify(JSON.parse(text), null, state.settings.indentSize);
      } catch {}
      el.jsonInput.value = normalized;
      if (!parseAndLoad(normalized)) throw new Error('Invalid JSON');
      setStatus(t('fetched'), 'success');
    } catch {
      setStatus(t('fetchError'), 'error');
    }
  }

  function applySettingsFromInputs() {
    state.language = el.languageSelect.value;
    state.theme = el.themeSelect.value;
    state.settings.pathFormat = el.pathFormat.value;
    state.settings.indentSize = Number(el.indentSize.value) || 2;
    state.settings.rememberLastJson = el.rememberLastJson.checked;
    state.settings.showTypeBadges = el.showTypeBadges.checked;
    saveSettings();
    applyTheme();
    updateLanguageUI();
    renderCurrentView();
    if (state.settings.rememberLastJson) persistLastJson(el.jsonInput.value.trim());
    else localStorage.removeItem(JSON_STORAGE_KEY);
  }

  function bindEvents() {
    $('loadJsonBtn').addEventListener('click', () => parseAndLoad(el.jsonInput.value));
    $('runInputActionBtn').addEventListener('click', () => {
      const action = $('inputActionSelect').value;
      if (action === 'sample') {
        const text = JSON.stringify(SAMPLE_JSON, null, state.settings.indentSize);
        el.jsonInput.value = text;
        parseAndLoad(text);
        return;
      }
      if (action === 'beautify') {
        formatMainJson(false);
        return;
      }
      if (action === 'minify') formatMainJson(true);
    });
    $('clearBtn').addEventListener('click', () => {
      el.jsonInput.value = '';
      el.leftDiffInput.value = '';
      el.rightDiffInput.value = '';
      state.data = null;
      state.parsedRoot = null;
      state.searchResults = [];
      state.diffLines = [];
      renderCurrentView();
      updateViewerMeta();
      showNodeDetails(null);
      setStatus(t('cleared'), 'success');
      localStorage.removeItem(JSON_STORAGE_KEY);
    });
    $('copyRawBtn').addEventListener('click', async () => {
      await copyText(el.jsonInput.value);
      setStatus(t('copied'), 'success');
    });
    $('expandAllBtn').addEventListener('click', () => expandCollapseAll(true));
    $('collapseAllBtn').addEventListener('click', () => expandCollapseAll(false));
    $('toggleInputPanelBtn').addEventListener('click', () => {
      state.inputHidden = !state.inputHidden;
      renderPanelVisibility();
    });
    $('toggleDetailsPanelBtn').addEventListener('click', () => {
      state.detailsHidden = !state.detailsHidden;
      renderPanelVisibility();
    });
    $('findBtn').addEventListener('click', performSearch);
    $('nextMatchBtn').addEventListener('click', () => focusActiveMatch(1));
    $('prevMatchBtn').addEventListener('click', () => focusActiveMatch(-1));
    $('searchInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') performSearch();
    });
    ['searchKeys','searchValues','searchPaths','caseSensitive','filterMatchesOnly','hideNulls','hideEmpty','typeFilter'].forEach(id => {
      $(id).addEventListener('change', () => {
        if (id !== 'filterMatchesOnly' && id !== 'hideNulls' && id !== 'hideEmpty' && id !== 'typeFilter') performSearch();
        else renderCurrentView();
      });
    });
    $('viewMode').addEventListener('change', (e) => {
      state.viewMode = e.target.value;
      renderCurrentView();
    });
    $('runDiffBtn').addEventListener('click', runDiff);
    $('loadLeftFromMainBtn').addEventListener('click', () => { el.leftDiffInput.value = el.jsonInput.value; });
    $('loadRightFromMainBtn').addEventListener('click', () => { el.rightDiffInput.value = el.jsonInput.value; });
    $('loadUrlBtn').addEventListener('click', loadJsonFromUrl);

    document.querySelectorAll('[data-input-tab]').forEach(tab => {
      tab.addEventListener('click', () => {
        document.querySelectorAll('[data-input-tab]').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('[data-input-panel]').forEach(panel => panel.classList.remove('active'));
        tab.classList.add('active');
        document.querySelector(`[data-input-panel="${tab.dataset.inputTab}"]`).classList.add('active');
      });
    });

    el.dropZone.addEventListener('click', () => el.fileInput.click());
    el.fileInput.addEventListener('change', (e) => {
      const file = e.target.files?.[0];
      if (file) readFile(file);
    });
    el.dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
      el.dropZone.classList.add('dragover');
    });
    el.dropZone.addEventListener('dragleave', () => el.dropZone.classList.remove('dragover'));
    el.dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      el.dropZone.classList.remove('dragover');
      const file = e.dataTransfer.files?.[0];
      if (file) readFile(file);
    });

    $('settingsBtn').addEventListener('click', () => el.settingsModal.classList.remove('hidden'));
    $('closeSettingsBtn').addEventListener('click', () => el.settingsModal.classList.add('hidden'));
    document.querySelectorAll('[data-close-modal="true"]').forEach(node => node.addEventListener('click', () => el.settingsModal.classList.add('hidden')));

    ['languageSelect','themeSelect','pathFormat','indentSize','rememberLastJson','showTypeBadges'].forEach(id => {
      $(id).addEventListener('change', applySettingsFromInputs);
    });

    $('copyDetailsBtn').addEventListener('click', async () => {
      await copyText(el.nodeDetails.textContent.trim());
      setStatus(t('copied'), 'success');
    });

  }

  function syncInputsFromState() {
    el.languageSelect.value = state.language;
    el.themeSelect.value = state.theme;
    el.pathFormat.value = state.settings.pathFormat;
    el.indentSize.value = state.settings.indentSize;
    el.rememberLastJson.checked = state.settings.rememberLastJson;
    el.showTypeBadges.checked = state.settings.showTypeBadges;
    el.viewMode.value = state.viewMode;
  }

  function escapeHtml(str) {
    return str
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function cssEscape(value) {
    if (window.CSS?.escape) return CSS.escape(value);
    return value.replace(/"/g, '\\"');
  }

  function init() {
    cacheEls();
    bindEvents();
    loadSettings();
    syncInputsFromState();
    applyTheme();
    updateLanguageUI();
    setStatus(t('statusReady'));
  }

  init();
})();
