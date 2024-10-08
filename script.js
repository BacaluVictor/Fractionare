// Datele pentru tumori și tratamente
const tumorData = {
  'cap': [
    {
      name: "Adenom hipofizar",
      doza: "45-50.4 Gy (EBRT) sau 14-18 Gy (SRS)",
      fractionare: "25-28 fracții (EBRT), fx=1.8 Gy; 1 fracție (SRS)",
      tipRadioterapie: "Adjuvantă, pentru boală reziduală",
      volume: "GTV = tumoră reziduală; CTV = GTV + 0-5 mm; PTV = CTV + 2-3 mm",
      algoritm: "1. Microadenoame secretante: tratament medicamentos (ex. agoniști dopaminergici pentru prolactinoame).<br>2. Macroadenoame: rezecție chirurgicală transsfenoidală.<br>3. Radioterapie pentru tumori reziduale sau recurente.",
      benign: true
    },
    {
      name: "Craniofaringiom",
      doza: "50.4-54 Gy",
      fractionare: "28-30 fracții, fx=1.8 Gy",
      tipRadioterapie: "Adjuvantă, după rezecție subtotală",
      volume: "GTV = tumoră reziduală; CTV = GTV + 0-5 mm; PTV = CTV + 2-3 mm",
      algoritm: "1. Rezecție chirurgicală maximală.<br>2. Radioterapie adjuvantă pentru rezecție subtotală sau boală recurentă.",
      benign: true
    },
    {
      name: "Meningiom grad I",
      doza: "50-54 Gy",
      fractionare: "27-30 fracții, fx=1.8-2 Gy",
      tipRadioterapie: "Adjuvantă",
      volume: "GTV = tumoră reziduală; CTV = GTV + 1-2 cm (respectând barierele anatomice); PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Observație pentru tumori mici asimptomatice.<br>2. Rezecție chirurgicală.<br>3. Radioterapie pentru tumori inoperabile sau rezecție incompletă.",
      benign: true
    },
    {
      name: "Meningiom grad II",
      doza: "54-60 Gy",
      fractionare: "30-33 fracții, fx=1.8-2 Gy",
      tipRadioterapie: "Adjuvantă",
      volume: "GTV = tumoră reziduală; CTV = GTV + 1-2 cm; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală urmată de radioterapie adjuvantă.",
      benign: false
    },
    {
      name: "Meningiom grad III",
      doza: "60 Gy",
      fractionare: "30 fracții, fx=2 Gy",
      tipRadioterapie: "Adjuvantă",
      volume: "GTV = tumoră reziduală; CTV = GTV + 1-2 cm; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală urmată de radioterapie adjuvantă.",
      benign: false
    },
    {
      name: "Tumori cu celule germinale intracraniene (Germinom)",
      doza: "24 Gy (CSI) + boost până la 40-45 Gy",
      fractionare: "16 fracții (CSI), fx=1.5 Gy + boost",
      tipRadioterapie: "adjuvantă",
      volume: "GTV = Tumora; CTV = Tumora + 1-2 cm margine; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Chimioterapie neoadjuvantă (opțional).<br>2. Radioterapie craniospinală (CSI) + boost tumoral.",
      benign: false
    },
    {
      name: "Tumori cu celule germinale non-germinomatoase",
      doza: "36 Gy (CSI) + boost până la 54 Gy",
      fractionare: "20 fracții (CSI), fx=1.8 Gy + boost",
      tipRadioterapie: "Adjuvantă",
      volume: "GTV = Tumora; CTV = Tumora + 1-2 cm margine; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală (când este posibilă).<br>2. Chimioterapie (4-6 cicluri).<br>3. Radioterapie craniospinală + boost tumoral.",
      benign: false
    },
    {
      name: "Gliom de grad înalt (GBM)",
      doza: "60 Gy",
      fractionare: "30 fracții, fx=2 Gy",
      tipRadioterapie: "Adjuvantă (cu Temozolomidă)",
      volume: "GTV = cavitate postoperatorie + tumoră reziduală + edem (T2/FLAIR); CTV = GTV + 2 cm; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală maximală.<br>2. Radioterapie postoperatorie + Temozolomidă concomitentă urmată de Temozolomidă adjuvantă.",
      benign: false
    },
    {
      name: "Gliom de grad scăzut (LGG)",
      doza: "50.4-54 Gy",
      fractionare: "28-30 fracții, fx=1.8 Gy",
      tipRadioterapie: "adjuvantă",
      volume: "GTV = leziune T2/FLAIR + cavitate postoperatorie; CTV = GTV + 1-2 cm; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală maximală.<br>2. Evaluare factori de risc.<br>3. Radioterapie postoperatorie ± chimioterapie adjuvantă (PCV sau Temozolomidă) pentru pacienți cu factori de risc.",
      benign: false
    },
    {
      name: "Meduloblastom risc standard",
      doza: "23.4 Gy (CSI) + boost până la 54 Gy",
      fractionare: "13 fracții (CSI), fx=1.8 Gy + boost",
      tipRadioterapie: "Adjuvantă",
      volume: "GTV = Tumora reziduală; CTV = Tumora + 1-1.5 cm margine; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală maximală.<br>2. Radioterapie craniospinală (CSI) + boost fosă posterioară.<br>3. Chimioterapie adjuvantă.",
      benign: false
    },
    {
      name: "Meduloblastom risc crescut",
      doza: "36 Gy (CSI) + boost până la 54-55.8 Gy",
      fractionare: "20 fracții (CSI), fx=1.8 Gy + boost",
      tipRadioterapie: "Adjuvantă",
      volume: "GTV = Tumora reziduală; CTV = Tumora + 1-1.5 cm margine; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală maximală.<br>2. Radioterapie craniospinală (CSI) + boost fosă posterioară.<br>3. Chimioterapie adjuvantă.",
      benign: false
    },
    {
      name: "Ependimom spinal",
      doza: "45-50.4 Gy",
      fractionare: "25-28 fracții, fx=1.8 Gy",
      tipRadioterapie: "Adjuvantă (pentru rezecție incompletă)",
      volume: "GTV = Tumora vizibilă + edem (T1 + T2); CTV = GTV + 1-2 cm cranio-caudal (incluzând corpii vertebrali adiacenți); PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală maximală.<br>2. Radioterapie adjuvantă pentru tumori incomplet rezecate sau cu risc mare de recidivă.",
      benign: false
    },
    {
      name: "Schwanom vestibular (Neurinom acustic)",
      doza: "12-13 Gy (SRS) sau 50.4 Gy (FSRT)",
      fractionare: "1 fracție (SRS); 28 fracții (FSRT), fx=1.8 Gy",
      tipRadioterapie: "Definitivă (pentru tumori inoperabile)",
      volume: "GTV = Tumora vizibilă pe RMN; PTV = GTV + 1-2 mm",
      algoritm: "1. Observație pentru tumori mici asimptomatice.<br>2. Rezecție chirurgicală pentru tumori mari.<br>3. Radiochirurgie stereotactică pentru tumori < 3 cm.",
      benign: true
    },
    {
      name: "Tumori spinale benigne",
      doza: "45-50.4 Gy",
      fractionare: "25-28 fracții, fx=1.8 Gy",
      tipRadioterapie: "Adjuvantă sau definitivă pt inoperabile",
      volume: "GTV = Tumora vizibilă + edem (T1 + T2); CTV = GTV + 1-2 cm cranio-caudal; PTV = CTV + 0.3-0.5 cm",
      algoritm: "1. Rezecție chirurgicală maximală.<br>2. Radioterapie adjuvantă pentru tumori incomplet rezecate.",
      benign: true
    },
    {
      name: "Paragangliom jugulotimpanic",
      doza: "45-50 Gy (RT convențională) sau 12-15 Gy (SRS)",
      fractionare: "25-28 fracții (RT convențională), fx=1.8-2 Gy; 1 fracție (SRS)",
      tipRadioterapie: "Adjuvantă sau definitivă, pentru tumori inoperabile",
      volume: "GTV = Tumora vizibilă; CTV = GTV + 5 mm; PTV = CTV + 2-3 mm",
      algoritm: "1. Observație pentru tumori mici asimptomatice.<br>2. Rezecție chirurgicală.<br>3. Radioterapie pentru tumori inoperabile sau rezecție incompletă.",
      benign: true
    },
    {
      name: "Nevralgia de trigemen",
      doza: "70-90 Gy",
      fractionare: "1 fracție (SRS)",
      tipRadioterapie: "Definitivă, pentru cazuri rezistente la medicație sau chirurgie",
      volume: "Țintă: Rădăcina nervului trigemen la 2-3 mm de emergența din trunchiul cerebral",
      algoritm: "1. Medicamente (Carbamazepină, Oxcarbazepină).<br>2. Decompresie microvasculară.<br>3. Radiochirurgie stereotactică.",
      benign: true
    },
    {
      name: "Malformație arterio-venoasă (MAV)",
      doza: "16-20 Gy",
      fractionare: "1 fracție (SRS) sau 3 fracții, fx=8-9 Gy",
      tipRadioterapie: "Definitivă, pentru MAV < 3 cm sau Adjuvantă pentru reziduuri post-chirurgicale",
      volume: "GTV = Nidusul MAV; CTV = Nidus + 5 mm; PTV = CTV + 2-3 mm",
      algoritm: "1. Observație pentru MAV mici asimptomatice.<br>2. Embolizare endovasculară.<br>3. Rezecție microchirurgicală.<br>4. Radiochirurgie stereotactică pentru MAV < 3 cm sau reziduale.",
      benign: true
    }
    // Poți adăuga mai multe tumori și regiuni aici
  ],
  // Alte regiuni anatomice pot fi adăugate aici
};

let currentPath = [];

function removeDiacritics(str) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function showTumors(region) {
  const contentDiv = document.getElementById('content');
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = 'block';

  currentPath = [{ name: 'Acasă', action: 'goHome()' }, { name: region.charAt(0).toUpperCase() + region.slice(1) }];
  updateBreadcrumb();

  if (tumorData[region]) {
    let tumorGrid = `<h2>Tumori în regiunea: ${region.charAt(0).toUpperCase() + region.slice(1)}</h2><div class="tumor-grid">`;
    tumorData[region].forEach(function(tumor) {
      const tumorCardClass = tumor.benign ? 'tumor-card benign-tumor-card' : 'tumor-card';
      tumorGrid += `
        <div class="${tumorCardClass}" onclick="toggleTumor(event, this)">
          <h3>${tumor.name}</h3>
          <span class="toggle-indicator">+</span>
          <div class="tumor-details">
            <p><strong>Doză:</strong> ${tumor.doza}</p>
            <p><strong>Fracționare:</strong> ${tumor.fractionare}</p>
            <p><strong>Tip Radioterapie:</strong> ${formatRadiotherapyTypes(tumor.tipRadioterapie)}</p>
            <p><strong>Volume:</strong> ${tumor.volume}</p>
            <button class="alg-button" onclick="openModal(event, '${tumor.name}', \`${tumor.algoritm}\`)">Vezi Algoritmul Terapeutic</button>
          </div>
        </div>`;
    });
    tumorGrid += '</div>';
    contentDiv.innerHTML = tumorGrid;
  } else {
    contentDiv.innerHTML = '<p>Nu există tumori pentru această regiune.</p>';
  }
}

function toggleTumor(event, element) {
  event.stopPropagation();
  const isExpanded = element.classList.toggle('expanded');
  const indicator = element.querySelector('.toggle-indicator');
  if (isExpanded) {
    indicator.textContent = '-';
  } else {
    indicator.textContent = '+';
  }
}

function searchTumor() {
  const searchInput = removeDiacritics(document.getElementById('searchInput').value.trim());
  const contentDiv = document.getElementById('content');

  currentPath = [{ name: 'Acasă', action: 'goHome()' }, { name: 'Căutare' }];
  updateBreadcrumb();

  if (searchInput === '') {
    goHome();
    return;
  }

  const searchTerms = searchInput.split(' ').filter(term => term !== '');

  let results = [];
  for (let region in tumorData) {
    tumorData[region].forEach((tumor) => {
      const tumorNameNormalized = removeDiacritics(tumor.name);
      const matches = searchTerms.every(term => tumorNameNormalized.includes(term));
      if (matches) {
        results.push({ region: region, tumor: tumor });
      }
    });
  }

  if (results.length > 0) {
    let resultGrid = `<h2>Rezultate căutare pentru "${document.getElementById('searchInput').value}"</h2><div class="tumor-grid">`;
    results.forEach(result => {
      const tumorCardClass = result.tumor.benign ? 'tumor-card benign-tumor-card' : 'tumor-card';
      resultGrid += `
        <div class="${tumorCardClass}" onclick="toggleTumor(event, this)">
          <h3>${result.tumor.name}</h3>
          <span class="toggle-indicator">+</span>
          <p>Regiune: ${result.region.charAt(0).toUpperCase() + result.region.slice(1)}</p>
          <div class="tumor-details">
            <p><strong>Doză:</strong> ${result.tumor.doza}</p>
            <p><strong>Fracționare:</strong> ${result.tumor.fractionare}</p>
            <p><strong>Tip Radioterapie:</strong> ${formatRadiotherapyTypes(result.tumor.tipRadioterapie)}</p>
            <p><strong>Volume:</strong> ${result.tumor.volume}</p>
            <button class="alg-button" onclick="openModal(event, '${result.tumor.name}', \`${result.tumor.algoritm}\`)">Vezi Algoritmul Terapeutic</button>
          </div>
        </div>`;
    });
    resultGrid += '</div>';
    contentDiv.innerHTML = resultGrid;
  } else {
    contentDiv.innerHTML = `<p>Nu au fost găsite rezultate pentru "${document.getElementById('searchInput').value}".</p>`;
  }
}

function updateBreadcrumb() {
  const breadcrumbDiv = document.getElementById('breadcrumb');
  let breadcrumbHtml = '';
  currentPath.forEach((item, index) => {
    if (item.action) {
      breadcrumbHtml += `<a href="#" onclick="${item.action}">${item.name}</a>`;
    } else {
      breadcrumbHtml += `<span>${item.name}</span>`;
    }
    if (index < currentPath.length - 1) {
      breadcrumbHtml += ' > ';
    }
  });
  breadcrumbDiv.innerHTML = breadcrumbHtml;
}

function goHome() {
  const contentDiv = document.getElementById('content');
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = 'block';

  currentPath = [];
  updateBreadcrumb();
  contentDiv.innerHTML = `
    <h2>Alege Regiunea Anatomică</h2>
    <div class="tumor-grid">
      <div class="tumor-card" onclick="showTumors('cap')">
        <h3>Cap</h3>
      </div>
      <!-- Adaugă mai multe regiuni după nevoie -->
    </div>
  `;
}

// Funcții pentru modal
function openModal(event, tumorName, algoritmContent) {
  event.stopPropagation();
  const modal = document.getElementById('algModal');
  const modalTitle = document.getElementById('algModalTitle');
  const modalContent = document.getElementById('algModalContent');
  modalTitle.textContent = `Algoritm Terapeutic - ${tumorName}`;
  modalContent.innerHTML = algoritmContent;
  modal.style.display = 'block';
}

function closeModal() {
  const modal = document.getElementById('algModal');
  modal.style.display = 'none';
}

// Închide modalul când utilizatorul face clic în afara acestuia
window.onclick = function(event) {
  const modal = document.getElementById('algModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Funcție pentru a formata și afișa tipurile de radioterapie cu culorile corespunzătoare
function formatRadiotherapyTypes(tipRadioterapie) {
  const tipuri = extractRadiotherapyTypes(tipRadioterapie);
  let formattedTypes = '<span class="tip-radioterapie">';
  tipuri.forEach((tip, index) => {
    const cssClass = getRadiotherapyCssClass(tip);
    formattedTypes += `<span class="${cssClass}">${tip}</span>`;
    if (index < tipuri.length - 1) {
      formattedTypes += ', ';
    }
  });
  formattedTypes += '</span>';
  return formattedTypes;
}

// Funcție pentru a extrage tipurile de radioterapie din text
function extractRadiotherapyTypes(tipRadioterapie) {
  // Normalizează textul și elimină parantezele
  let text = tipRadioterapie.toLowerCase().replace(/\(.*?\)/g, '');
  // Înlocuiește 'sau' și 'și' cu virgule
  text = text.replace(/sau|și/g, ',');
  // Împarte textul în funcție de virgule
  let tipuri = text.split(',').map(t => t.trim());
  // Elimină elementele goale și capitalizează primul caracter
  tipuri = tipuri.filter(t => t).map(t => t.charAt(0).toUpperCase() + t.slice(1));
  return tipuri;
}

// Funcție pentru a obține clasa CSS corespunzătoare unui tip de radioterapie
function getRadiotherapyCssClass(tip) {
  let tipLower = tip.toLowerCase();
  if (tipLower.includes('adjuvantă')) {
    return 'adjuvanta';
  } else if (tipLower.includes('definitivă')) {
    return 'definitiva';
  } else if (tipLower.includes('neoadjuvantă')) {
    return 'neoadjuvanta';
  } else {
    return '';
  }
}

// Funcții pentru Jocul de Asociere
function showMatchingGame() {
  const contentDiv = document.getElementById('content');
  const searchBar = document.getElementById('search-bar');
  searchBar.style.display = 'none';

  currentPath = [{ name: 'Acasă', action: 'goHome()' }, { name: 'Joc de Asociere' }];
  updateBreadcrumb();

  contentDiv.innerHTML = `
    <h2>Joc de Asociere - Doze și Tumori</h2>
    <div id="game-container"></div>
    <button id="check-button" onclick="checkAnswers()">Verifică Răspunsurile</button>
    <button id="reset-button" onclick="resetGame()">Resetează Jocul</button>
    <div id="result"></div>
  `;

  initGame();
}

const tumorsForGame = [
  // Listează tumorile și dozele pentru joc
  { name: "Adenom hipofizar", dose: "45-50.4 Gy (EBRT) sau 14-18 Gy (SRS)" },
  { name: "Craniofaringiom", dose: "50.4-54 Gy" },
  { name: "Meningiom grad I", dose: "50-54 Gy" },
  { name: "Meningiom grad II", dose: "54-60 Gy" },
  { name: "Meningiom grad III", dose: "60 Gy" },
  { name: "Gliom de grad înalt (GBM)", dose: "60 Gy" },
  { name: "Gliom de grad scăzut (LGG)", dose: "50.4-54 Gy" },
  { name: "Meduloblastom risc standard", dose: "23.4 Gy (CSI) + boost până la 54 Gy" },
  { name: "Meduloblastom risc crescut", dose: "36 Gy (CSI) + boost până la 54-55.8 Gy" },
  { name: "Ependimom spinal", dose: "45-50.4 Gy" },
  { name: "Schwanom vestibular (Neurinom acustic)", dose: "12-13 Gy (SRS) sau 50.4 Gy (FSRT)" },
  { name: "Nevralgia de trigemen", dose: "70-90 Gy" },
  { name: "Malformație arterio-venoasă (MAV)", dose: "16-20 Gy" }
  // Adaugă mai multe tumori după nevoie
];

let shuffledTumors = [];
let shuffledDoses = [];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function initGame() {
  shuffledTumors = shuffle([...tumorsForGame]);
  shuffledDoses = shuffle([...tumorsForGame]);

  const tumorList = document.createElement('ul');
  tumorList.className = 'list';
  shuffledTumors.forEach((tumor, index) => {
    const li = document.createElement('li');
    li.textContent = tumor.name;
    li.draggable = true;
    li.dataset.tumorIndex = index;
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragend', handleDragEnd);
    tumorList.appendChild(li);
  });

  const doseList = document.createElement('ul');
  doseList.className = 'list';
  shuffledDoses.forEach((tumor, index) => {
    const li = document.createElement('li');
    li.textContent = tumor.dose;
    li.draggable = true;
    li.dataset.doseIndex = index;
    li.addEventListener('dragstart', handleDragStart);
    li.addEventListener('dragend', handleDragEnd);
    doseList.appendChild(li);
  });

  const gameContainer = document.getElementById('game-container');
  gameContainer.innerHTML = '';

  const tumorColumn = document.createElement('div');
  tumorColumn.className = 'column';
  tumorColumn.innerHTML = '<h2>Tumori</h2>';
  tumorColumn.appendChild(tumorList);

  const doseColumn = document.createElement('div');
  doseColumn.className = 'column';
  doseColumn.innerHTML = '<h2>Doze</h2>';
  doseColumn.appendChild(doseList);

  gameContainer.appendChild(tumorColumn);
  gameContainer.appendChild(doseColumn);

  // Evenimente pentru drag and drop
  const allItems = document.querySelectorAll('.list li');
  allItems.forEach(item => {
    item.addEventListener('dragover', handleDragOver);
    item.addEventListener('drop', handleDrop);
  });
}

let draggedItem = null;

function handleDragStart(event) {
  draggedItem = event.target;
  event.target.classList.add('dragging');
  event.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(event) {
  event.target.classList.remove('dragging');
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';

  const draggingItem = document.querySelector('.dragging');
  if (event.target && event.target.nodeName === 'LI' && event.target !== draggingItem) {
    const list = event.target.parentNode;
    const nodes = Array.from(list.children);
    const indexA = nodes.indexOf(draggingItem);
    const indexB = nodes.indexOf(event.target);
    if (indexA < indexB) {
      list.insertBefore(draggingItem, event.target.nextSibling);
    } else {
      list.insertBefore(draggingItem, event.target);
    }
  }
}

function handleDrop(event) {
  event.preventDefault();
}

function checkAnswers() {
  const tumorItems = document.querySelectorAll('.column:nth-child(1) .list li');
  const doseItems = document.querySelectorAll('.column:nth-child(2) .list li');

  let correct = 0;

  tumorItems.forEach((tumorItem, index) => {
    const tumorIndex = tumorItem.dataset.tumorIndex;
    const doseIndex = doseItems[index].dataset.doseIndex;

    if (shuffledTumors[tumorIndex].dose === shuffledDoses[doseIndex].dose) {
      correct++;
      tumorItem.classList.add('correct');
      doseItems[index].classList.add('correct');
    } else {
      tumorItem.classList.add('incorrect');
      doseItems[index].classList.add('incorrect');
    }
  });

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `Ai obținut ${correct} din ${tumorItems.length} corecte.`;

  // Deactivează funcționalitatea de drag-and-drop după verificare
  const allItems = document.querySelectorAll('.list li');
  allItems.forEach(item => {
    item.draggable = false;
    item.removeEventListener('dragstart', handleDragStart);
    item.removeEventListener('dragend', handleDragEnd);
    item.removeEventListener('dragover', handleDragOver);
    item.removeEventListener('drop', handleDrop);
  });
}

function resetGame() {
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = '';
  showMatchingGame();
}

// Inițializează aplicația
goHome();
