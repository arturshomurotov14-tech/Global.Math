// LocalStorage dan ma'lumotlarni boshqarish
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let history = JSON.parse(localStorage.getItem('history')) || [];
let currentTheme = localStorage.getItem('theme') || 'light';

// Sahifa yuklanganda mavzuni o'rnatish
document.addEventListener('DOMContentLoaded', function() {
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-theme');
        document.getElementById('themeIcon').classList.replace('fa-moon', 'fa-sun');
    }
    updateFormulaCount();
});

// Mavzuni o'zgartirish
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const icon = document.getElementById('themeIcon');
    
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        currentTheme = 'dark';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        currentTheme = 'light';
    }
    
    localStorage.setItem('theme', currentTheme);
    showToast('Mavzu o\'zgartirildi', 'success');
}

// Akkordeonni boshqarish
function toggleAccordion(button) {
    const content = button.nextElementSibling;
    const isActive = content.classList.contains('active');
    
    document.querySelectorAll('.accordion-content').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelectorAll('.accordion-header').forEach(item => {
        item.classList.remove('active');
    });
    
    if (!isActive) {
        content.classList.add('active');
        button.classList.add('active');
    }
}

// Sinfni yuklash
function loadGrade(grade) {
    const data = formulas[grade];
    if (!data) return;
    
    addToHistory(`${grade}-sinf`, grade);
    
    let html = `
        <div class="grade-header">
            <h2>${data.title}</h2>
            <div class="grade-actions">
                <button onclick="printPage()" class="formula-btn"><i class="fas fa-print"></i> Chop etish</button>
                <button onclick="exportGrade(${grade})" class="formula-btn"><i class="fas fa-download"></i> Yuklab olish</button>
            </div>
        </div>
    `;
    
    data.sections.forEach(section => {
        html += `<div class="formula-section">
            <h3>${section.name}</h3>`;
        
        section.formulas.forEach((item, index) => {
            const formulaId = `g${grade}-${index}`;
            const isFavorite = favorites.includes(formulaId);
            
            html += `
                <div class="formula-item" id="${formulaId}">
                    <h4>
                        ${item.name}
                        <div class="formula-actions">
                            <button class="formula-btn favorite ${isFavorite ? 'active' : ''}" 
                                    onclick="toggleFavorite('${formulaId}')" 
                                    title="Sevimlilar">
                                <i class="fas fa-star"></i>
                            </button>
                            <button class="formula-btn" 
                                    onclick="copyFormula('${item.formula}')" 
                                    title="Nusxalash">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </h4>
                    <div class="formula">${item.formula}</div>
                    <div class="formula-description">${item.description}</div>
                    ${item.example ? `<div class="formula-example"><strong>Misol:</strong> ${item.example}</div>` : ''}
                </div>`;
        });
        
        html += `</div>`;
    });
    
    document.getElementById('formulaContent').innerHTML = html;
    MathJax.typesetPromise();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Mavzuni yuklash
function loadTopic(topic) {
    const data = topics[topic];
    if (!data) return;
    
    addToHistory(data.title, topic);
    
    let html = `
        <div class="topic-header">
            <h2>${data.title}</h2>
            <div class="grade-actions">
                <button onclick="printPage()" class="formula-btn"><i class="fas fa-print"></i> Chop etish</button>
            </div>
        </div>
        <div class="formula-section">`;
    
    data.content.forEach((item, index) => {
        const formulaId = `t${topic}-${index}`;
        const isFavorite = favorites.includes(formulaId);
        
        html += `
            <div class="formula-item" id="${formulaId}">
                <h4>
                    ${item.name}
                    <div class="formula-actions">
                        <button class="formula-btn favorite ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite('${formulaId}')" 
                                title="Sevimlilar">
                            <i class="fas fa-star"></i>
                        </button>
                        <button class="formula-btn" 
                                onclick="copyFormula('${item.formula}')" 
                                title="Nusxalash">
                            <i class="fas fa-copy"></i>
                        </button>
                    </div>
                </h4>
                <div class="formula">${item.formula}</div>
                <div class="formula-description">${item.description}</div>
                ${item.example ? `<div class="formula-example"><strong>Misol:</strong> ${item.example}</div>` : ''}
            </div>`;
    });
    
    html += `</div>`;
    
    document.getElementById('formulaContent').innerHTML = html;
    MathJax.typesetPromise();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Qidiruv funksiyasi
function searchFormula() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (!searchTerm) {
        showToast('Qidiruv maydoni bo\'sh', 'error');
        return;
    }
    
    let results = [];
    
    // Sinflarda qidirish
    Object.keys(formulas).forEach(grade => {
        formulas[grade].sections.forEach(section => {
            section.formulas.forEach((formula, index) => {
                if (formula.name.toLowerCase().includes(searchTerm) || 
                    formula.description.toLowerCase().includes(searchTerm) ||
                    formula.example.toLowerCase().includes(searchTerm)) {
                    results.push({
                        id: `g${grade}-${index}`,
                        grade: formulas[grade].title,
                        section: section.name,
                        ...formula
                    });
                }
            });
        });
    });
    
    // Mavzularda qidirish
    Object.keys(topics).forEach(topicKey => {
        topics[topicKey].content.forEach((formula, index) => {
            if (formula.name.toLowerCase().includes(searchTerm) || 
                formula.description.toLowerCase().includes(searchTerm) ||
                (formula.example && formula.example.toLowerCase().includes(searchTerm))) {
                results.push({
                    id: `t${topicKey}-${index}`,
                    grade: topics[topicKey].title,
                    section: "Umumiy",
                    ...formula
                });
            }
        });
    });
    
    addToHistory(`Qidiruv: "${searchTerm}"`, 'search');
    
    let html = `
        <h2><i class="fas fa-search"></i> Qidiruv natijalari: "${searchTerm}"</h2>
        <p style="color: var(--text-light); margin-bottom: 20px;">Topildi: <strong>${results.length}</strong> ta natija</p>
    `;
    
    if (results.length === 0) {
        html += `
            <div style="text-align: center; padding: 60px 20px;">
                <i class="fas fa-search" style="font-size: 4rem; color: var(--text-light); opacity: 0.3;"></i>
                <p style="color: var(--text-light); margin-top: 20px;">Hech narsa topilmadi. Boshqa kalit so'z bilan qidiring.</p>
            </div>
        `;
    } else {
        html += `<div class="formula-section">`;
        results.forEach(item => {
            const isFavorite = favorites.includes(item.id);
            html += `
                <div class="formula-item" id="${item.id}">
                    <h4>
                        ${item.name} <small style="color: var(--text-light);">(${item.grade} - ${item.section})</small>
                        <div class="formula-actions">
                            <button class="formula-btn favorite ${isFavorite ? 'active' : ''}" 
                                    onclick="toggleFavorite('${item.id}')" 
                                    title="Sevimlilar">
                                <i class="fas fa-star"></i>
                            </button>
                            <button class="formula-btn" 
                                    onclick="copyFormula('${item.formula}')" 
                                    title="Nusxalash">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </h4>
                    <div class="formula">${item.formula}</div>
                    <div class="formula-description">${item.description}</div>
                    ${item.example ? `<div class="formula-example"><strong>Misol:</strong> ${item.example}</div>` : ''}
                </div>`;
        });
        html += `</div>`;
    }
    
    document.getElementById('formulaContent').innerHTML = html;
    MathJax.typesetPromise();
}

// Enter tugmasi bilan qidiruv
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchFormula();
            }
        });
    }
});

// Sevimlilarni boshqarish
function toggleFavorite(formulaId) {
    const index = favorites.indexOf(formulaId);
    const button = document.querySelector(`#${CSS.escape(formulaId)} .favorite`);
    
    if (index > -1) {
        favorites.splice(index, 1);
        button.classList.remove('active');
        showToast('Sevimlilardan olib tashlandi', 'success');
    } else {
        favorites.push(formulaId);
        button.classList.add('active');
        showToast('Sevimlilarga qo\'shildi', 'success');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Sevimlilarni ko'rsatish
function showFavorites() {
    if (favorites.length === 0) {
        document.getElementById('formulaContent').innerHTML = `
            <div style="text-align: center; padding: 80px 20px;">
                <i class="fas fa-star" style="font-size: 5rem; color: var(--text-light); opacity: 0.2;"></i>
                <h2 style="margin-top: 30px; color: var(--text-dark);">Sevimlilar bo'sh</h2>
                <p style="color: var(--text-light);">Hali hech qanday formula saqlanmagan</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <h2><i class="fas fa-star"></i> Sevimli Formulalar</h2>
        <p style="color: var(--text-light); margin-bottom: 20px;">Jami: ${favorites.length} ta formula</p>
        <div class="formula-section">
    `;
    
    favorites.forEach(id => {
        const item = findFormulaById(id);
        if (item) {
            html += `
                <div class="formula-item" id="${id}">
                    <h4>
                        ${item.name} <small style="color: var(--text-light);">(${item.source})</small>
                        <div class="formula-actions">
                            <button class="formula-btn favorite active" 
                                    onclick="toggleFavorite('${id}')" 
                                    title="Sevimlilardan olib tashlash">
                                <i class="fas fa-star"></i>
                            </button>
                            <button class="formula-btn" 
                                    onclick="copyFormula('${item.formula}')" 
                                    title="Nusxalash">
                                <i class="fas fa-copy"></i>
                            </button>
                        </div>
                    </h4>
                    <div class="formula">${item.formula}</div>
                    <div class="formula-description">${item.description}</div>
                    ${item.example ? `<div class="formula-example"><strong>Misol:</strong> ${item.example}</div>` : ''}
                </div>`;
        }
    });
    
    html += `</div>`;
    document.getElementById('formulaContent').innerHTML = html;
    MathJax.typesetPromise();
}

// Tarixni ko'rsatish
function showHistory() {
    if (history.length === 0) {
        document.getElementById('formulaContent').innerHTML = `
            <div style="text-align: center; padding: 80px 20px;">
                <i class="fas fa-history" style="font-size: 5rem; color: var(--text-light); opacity: 0.2;"></i>
                <h2 style="margin-top: 30px; color: var(--text-dark);">Tarix bo'sh</h2>
                <p style="color: var(--text-light);">Hali hech narsa ko'rilmagan</p>
            </div>
        `;
        return;
    }
    
    let html = `
        <h2><i class="fas fa-history"></i> Ko'rish Tarixi</h2>
        <p style="color: var(--text-light); margin-bottom: 20px;">Oxirgi faoliyatlar</p>
        <div class="formula-section">
    `;
    
    [...history].reverse().forEach((item, index) => {
        html += `
            <div class="formula-item" onclick="loadFromHistory('${item.id}')" style="cursor: pointer;">
                <h4>
                    <i class="fas fa-clock" style="color: var(--primary-color);"></i> ${item.title}
                    <small style="color: var(--text-light);">${item.time}</small>
                </h4>
                <p style="color: var(--text-light); margin: 0;">Ko'rish uchun bosing</p>
            </div>`;
    });
    
    html += `</div>`;
    document.getElementById('formulaContent').innerHTML = html;
}

// Tarixga qo'shish
function addToHistory(title, id) {
    const time = new Date().toLocaleString('uz-UZ');
    history = history.filter(item => item.id !== id); // Dublikatlarni olib tashlash
    history.push({ title, id, time });
    
    if (history.length > 50) {
        history.shift(); // Eng eskisini o'chirish
    }
    
    localStorage.setItem('history', JSON.stringify(history));
}

// Tarixdan yuklash
function loadFromHistory(id) {
    if (id === 'search') return;
    if (typeof id === 'number' || !isNaN(id)) {
        loadGrade(parseInt(id));
    } else {
        loadTopic(id);
    }
}

// Tarixni tozalash
function clearHistory() {
    if (confirm('Tarixni butunlay tozalashni xohlaysizmi?')) {
        history = [];
        localStorage.removeItem('history');
        showToast('Tarix tozalandi', 'success');
        showHistory();
    }
}

// Formula topish (ID bo'yicha)
function findFormulaById(id) {
    // Sinflarda qidirish
    for (let grade in formulas) {
        for (let section of formulas[grade].sections) {
            for (let i = 0; i < section.formulas.length; i++) {
                if (`g${grade}-${i}` === id) {
                    return {
                        ...section.formulas[i],
                        source: formulas[grade].title
                    };
                }
            }
        }
    }
    
    // Mavzularda qidirish
    for (let topicKey in topics) {
        for (let i = 0; i < topics[topicKey].content.length; i++) {
            if (`t${topicKey}-${i}` === id) {
                return {
                    ...topics[topicKey].content[i],
                    source: topics[topicKey].title
                };
            }
        }
    }
    
    return null;
}

// Formulani nusxalash
function copyFormula(formula) {
    const tempInput = document.createElement('textarea');
    tempInput.value = formula.replace(/\\\(|\\\)|\\\[|\\\]/g, '');
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    showToast('Formula nusxalandi', 'success');
}

// Toast xabarlar
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Sahifani chop etish
function printPage() {
    window.print();
}

// Sinfni eksport qilish
function exportGrade(grade) {
    const data = formulas[grade];
    if (!data) return;
    
    let text = `${data.title}\n${'='.repeat(50)}\n\n`;
    
    data.sections.forEach(section => {
        text += `${section.name}\n${'-'.repeat(30)}\n\n`;
        section.formulas.forEach(formula => {
            text += `${formula.name}\n`;
            text += `Formula: ${formula.formula}\n`;
            text += `Tavsif: ${formula.description}\n`;
            if (formula.example) text += `Misol: ${formula.example}\n`;
            text += `\n`;
        });
        text += `\n`;
    });
    
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${grade}-sinf-formulalar.txt`;
    a.click();
    showToast('Fayl yuklab olindi', 'success');
}

// Barcha formulalarni eksport qilish
function exportFormulas() {
    if (confirm('Barcha formulalarni yuklab olishni xohlaysizmi?')) {
        // JSON formatda eksport
        const allData = { formulas, topics };
        const blob = new Blob([JSON.stringify(allData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'global-math-formulas.json';
        a.click();
        showToast('Barcha formulalar yuklab olindi', 'success');
    }
}

// Kalkulyator
function showCalculator() {
    const html = `
        <h2><i class="fas fa-calculator"></i> Kalkulyator</h2>
        <div class="calculator-container">
            <input type="text" class="calc-display" id="calcDisplay" value="0" readonly>
            <div class="calc-buttons">
                <button class="calc-btn clear" onclick="clearCalc()">C</button>
                <button class="calc-btn clear" onclick="backspace()">←</button>
                <button class="calc-btn operator" onclick="appendCalc('/')">/</button>
                <button class="calc-btn operator" onclick="appendCalc('*')">×</button>
                
                <button class="calc-btn" onclick="appendCalc('7')">7</button>
                <button class="calc-btn" onclick="appendCalc('8')">8</button>
                <button class="calc-btn" onclick="appendCalc('9')">9</button>
                <button class="calc-btn operator" onclick="appendCalc('-')">-</button>
                
                <button class="calc-btn" onclick="appendCalc('4')">4</button>
                <button class="calc-btn" onclick="appendCalc('5')">5</button>
                <button class="calc-btn" onclick="appendCalc('6')">6</button>
                <button class="calc-btn operator" onclick="appendCalc('+')">+</button>
                
                <button class="calc-btn" onclick="appendCalc('1')">1</button>
                <button class="calc-btn" onclick="appendCalc('2')">2</button>
                <button class="calc-btn" onclick="appendCalc('3')">3</button>
                <button class="calc-btn equals" onclick="calculateCalc()" style="grid-row: span 2;">=</button>
                
                <button class="calc-btn" onclick="appendCalc('0')" style="grid-column: span 2;">0</button>
                <button class="calc-btn" onclick="appendCalc('.')">.</button>
            </div>
        </div>
    `;
    
    document.getElementById('formulaContent').innerHTML = html;
}

function clearCalc() {
    document.getElementById('calcDisplay').value = '0';
}

function backspace() {
    const display = document.getElementById('calcDisplay');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = '0';
    }
}

function appendCalc(value) {
    const display = document.getElementById('calcDisplay');
    if (display.value === '0' && value !== '.') {
        display.value = value;
    } else {
        display.value += value;
    }
}

function calculateCalc() {
    const display = document.getElementById('calcDisplay');
    try {
        const result = eval(display.value);
        display.value = result;
    } catch (error) {
        display.value = 'Xato';
        setTimeout(() => {
            display.value = '0';
        }, 1500);
    }
}

// Bosh sahifani ko'rsatish
function showHome() {
    location.reload();
}

// Formulalar sonini hisoblash
function updateFormulaCount() {
    let count = 0;
    Object.keys(formulas).forEach(grade => {
        formulas[grade].sections.forEach(section => {
            count += section.formulas.length;
        });
    });
    Object.keys(topics).forEach(topic => {
        count += topics[topic].content.length;
    });
    
    const countElement = document.getElementById('totalFormulas');
    if (countElement) {
        countElement.textContent = count + '+';
    }
}
