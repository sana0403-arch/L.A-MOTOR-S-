// --- CONTROLE DE FONTE (A+ / A-) ---
let currentScale = 1;

function changeFontSize(delta) {
    currentScale += delta * 0.1;
    if (currentScale < 0.8) currentScale = 0.8;
    if (currentScale > 1.5) currentScale = 1.5;
    document.documentElement.style.setProperty('--font-scale', currentScale);
}

// --- MODO ESCURO / MODO CLARO ---
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// --- LEITOR DE ÁUDIO (SINTETIZADOR DE VOZ) ---
let synth = window.speechSynthesis;

function readPageText() {
    if (synth.speaking) {
        synth.cancel();
    }
    let mainContent = document.body.innerText;
    let utterance = new SpeechSynthesisUtterance(mainContent);
    utterance.lang = 'pt-BR';
    utterance.rate = 1.0;
    synth.speak(utterance);
}

function stopAudio() {
    if (synth.speaking) {
        synth.cancel();
    }
}

// --- SISTEMA DE ABAS (PROCESSO DE CRIAÇÃO) ---
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].classList.remove("active");
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.classList.add("active");
}

// --- MODAL INTERATIVO (VER INTERIOR/DETALHES) ---
function openInteractiveModal(title, exteriorUrl, interiorUrl, motorUrl, bateriaUrl) {
    document.getElementById('modalTitle').innerText = title + " - Experiência Imersiva";
    document.getElementById('imgExterior').src = exteriorUrl;
    document.getElementById('imgInterior').src = interiorUrl;
    document.getElementById('imgMotor').src = motorUrl;
    document.getElementById('imgBateria').src = bateriaUrl;
    
    let modal = document.getElementById('interactiveModal');
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
    let modal = document.getElementById('interactiveModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
}

// Fechar o modal ao clicar fora da área interna
window.onclick = function(event) {
    let modal = document.getElementById('interactiveModal');
    if (event.target == modal) {
        closeModal();
    }
};
