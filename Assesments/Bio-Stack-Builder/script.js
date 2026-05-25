const form = document.getElementById('linkForm');
const titleInput = document.getElementById('linkTitle');
const urlInput = document.getElementById('linkURL');
const container = document.getElementById('linksContainer');
const counter = document.getElementById('linkCount');
const themeBtn = document.getElementById('themeToggle');
const titleErr = document.getElementById('titleError');
const urlErr = document.getElementById('urlError');

let allLinks = [];


document.addEventListener('DOMContentLoaded', function() {
    loadTheme();
    loadData();
    showLinks();
    addListeners();
});

function loadTheme() {
    let saved = localStorage.getItem('theme');
    if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-mode');
    }
    updateIcon();
}

function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    updateIcon();
    let mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', mode);
}

function updateIcon() {
    let icon = themeBtn.querySelector('.theme-icon');
    icon.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
}


function addListeners() {
    form.addEventListener('submit', addNewLink);
    themeBtn.addEventListener('click', toggleTheme);
    titleInput.addEventListener('input', function() { clearErr('titleError'); });
    urlInput.addEventListener('input', function() { clearErr('urlError'); });
}

function addNewLink(e) {
    e.preventDefault();

    let title = titleInput.value.trim();
    let url = urlInput.value.trim();

    clearErr('titleError');
    clearErr('urlError');

    let ok = true;

    if (!title) {
        showErr('titleError', 'Title is required');
        ok = false;
    }

    if (!url) {
        showErr('urlError', 'URL is required');
        ok = false;
    } else if (!isGoodURL(url)) {
        showErr('urlError', 'URL must start with https:// or http://');
        ok = false;
    }

    if (!ok) return;

    let newLink = {
        id: Date.now(),
        title: title,
        url: url
    };

    allLinks.push(newLink);
    saveData();
    showLinks();
    form.reset();
    titleInput.focus();
}

function isGoodURL(url) {
    return /^https?:\/\/.+/i.test(url);
}

function showErr(id, msg) {
    document.getElementById(id).textContent = msg;
    if (id === 'titleError') {
        titleInput.classList.add('invalid');
    } else {
        urlInput.classList.add('invalid');
    }
}

function clearErr(id) {
    document.getElementById(id).textContent = '';
    if (id === 'titleError') {
        titleInput.classList.remove('invalid');
    } else {
        urlInput.classList.remove('invalid');
    }
}

function showLinks() {
    container.innerHTML = '';

    if (allLinks.length === 0) {
        container.innerHTML = '<p class="empty-state">No links added yet. Start building your bio stack!</p>';
        counter.textContent = '0';
        return;
    }

    allLinks.forEach(function(link) {
        let item = makeLink(link);
        container.appendChild(item);
    });

    counter.textContent = allLinks.length;
}

function makeLink(link) {
    let div = document.createElement('div');
    div.className = 'link-item';
    div.setAttribute('data-id', link.id);

    let content = document.createElement('div');
    content.className = 'link-content';

    let a = document.createElement('a');
    a.href = link.url;
    a.textContent = link.title;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';

    let urlText = document.createElement('span');
    urlText.className = 'link-url';
    urlText.textContent = link.url;

    content.appendChild(a);
    content.appendChild(urlText);

    let btn = document.createElement('button');
    btn.className = 'btn btn-danger';
    btn.textContent = '🗑️ Delete';
    btn.onclick = function() { deleteLink(link.id); };

    let actions = document.createElement('div');
    actions.className = 'link-actions';
    actions.appendChild(btn);

    div.appendChild(content);
    div.appendChild(actions);

    return div;
}

function deleteLink(id) {
    allLinks = allLinks.filter(function(link) {
        return link.id !== id;
    });
    saveData();
    showLinks();
}

function saveData() {
    try {
        localStorage.setItem('links', JSON.stringify(allLinks));
    } catch (err) {
        alert('Could not save. Storage problem.');
    }
}

function loadData() {
    try {
        let saved = localStorage.getItem('links');
        if (saved) {
            allLinks = JSON.parse(saved);
            if (!Array.isArray(allLinks)) {
                allLinks = [];
            }
        }
    } catch (err) {
        alert('Could not load. Starting fresh.');
        allLinks = [];
    }
}
