document.addEventListener('DOMContentLoaded', () => {
    
       // =========================================================================
    // БАЗА ДАННЫХ ПРОЕКТОВ (СТРОГО 20 ПРЕМИАЛЬНЫХ ОБЪЕКТОВ)
    // =========================================================================
      // =========================================================================
    // ОБНОВЛЕННАЯ БАЗА ДАННЫХ НА 20 ПРОЕКТОВ (6 КАТЕГОРИЙ)
    // =========================================================================
    // =========================================================================
    // ОБНОВЛЕННАЯ БАЗА ДАННЫХ: КАРТИНКИ ИЗ МЕСТНОЙ ПАПКИ img/
    // =========================================================================
    let ALL_PROJECTS = [
        // --- Пачка 1-4 ---
        { id: 1, category: 'BATH', name: 'Баня 1»', area: '31 м²', geo: 'Каркасная Баня 6х6м', img: 'img/1.jpg',  price: '2 070 000 ₽' },
        { id: 2, category: 'BATH', name: 'Баня 2', area: '42,2 м²', geo: 'Каркасная Баня 6х6м + терраса 6х2м:', img: 'img/2.jpg', price: '2 195 000 ₽' },
        { id: 3, category: 'BATH', name: 'Баня 3', area: '31,1 м²', geo: 'Каркасная Баня 6х6м', img: 'img/3.jpg',  price: '2 375 000 ₽' },
        { id: 4, category: 'BATH', name: 'Баня 4', area: ' 29,5 м²', geo: 'Каркасная Баня 6х6м:', img: 'img/4.jpg',  price: '2 690 000 ₽' },
        
        // --- Пачка 5-8 ---
        { id: 5, category: 'BATH', name: 'Баня 5', area: '46,8 м²', geo: 'Баня из клееного бруса 6х6м + терраса 2х6м', img: 'img/5.jpg' ,  price: '3 570 000 ₽'},
        { id: 6, category: 'S', name: 'Проект дома S -1', area: '72 м²', geo: 'Дом(6x9м + террасса 3х6м)', img: 'img/6.jpg', price: '2 520 000 ₽' },
        { id: 7, category: 'S', name: 'Проект дома S -2', area: '72 м²', geo: 'Дом в стиле барн (6x9м + террасса 3х6м)', img: 'img/7.jpg',  price: '2 520 000 ₽' },
        { id: 8, category: 'S', name: 'Проект дома S -3', area: '64,5 м²', geo: 'Дом(6x9м, терраса 3х2,5м и 3х1м)', img: 'img/8.jpg',  price: '2 370 000 ₽' },
        
        // --- Пачка 9-12 ---
        { id: 9, category:  'S', name: 'Проект дома S -4', area: '67,5 м²', geo: 'Дом(6x9м, терраса 6х1,5м и 3х1,5м)', img: 'img/9.jpg',  price: '2 370 000 ₽' },
        { id: 10, category: 'S', name: 'Проект дома S 5', area: '73,5 м²', geo: 'Дом 2эт в стиле A-фрейм.(7,5х6м), терраса и крыльцо (6х6м)', img: 'img/10.jpg',  price: '2 275 000 ₽' },
        { id: 11, category: 'M', name: 'Проект дома М -1', area:  '109,7 м²', geo: 'Дом(6x10,5м, терраса 10,5х4,25м и крыльцо 2х1м)', img: 'img/11.jpg',  price: '3 535 000 ₽' },
        { id: 12, category: 'M', name: 'Проект дома М -2', area: '108 м²', geo: 'Дом в стиле барн (8x9м + террасса 8х3м)', img: 'img/12.jpg',  price: '3 360 000 ₽' },
        
        // --- Пачка 13-16 ---
        { id: 13, category: 'L', name: 'Проект дома L-1', area: '135,2 м²', geo: 'Дом(8x13,9м + террасса 8х3м)', img: 'img/13.jpg',  price: '4 930 000 ₽' },
        { id: 14, category: 'L', name: 'Проект дома L-2', area: '143,1 м²', geo: 'Дом(9x12,9м + террасса 9х3м)', img: 'img/14.jpg',  price: '5 185 000 ₽' },
        { id: 15, category: 'L', name: 'Проект дома L-3', area: '100 м²', geo: 'Дом(10x10м)', img: 'img/15.jpg', price: '4 000 000 ₽' },
        { id: 16, category: 'L', name: 'Проект дома L-4', area: '108 м²', geo: 'Дом 1эт в стиле фахверк. (12x9м)', img: 'img/16.jpg',  price: '7 560 000 ₽' },
        
        // --- Пачка 17-20 ---
        { id: 17, category: 'XL', name: 'Проект дома XL-1', area: '156 м²', geo: 'Дом 2эт(8x8,5м) с террасой 8х2,5м', img: 'img/17.jpg',  price: '4 380 000 ₽' },
        { id: 18, category: 'XL', name: 'Проект дома XL-2', area: '190 м²', geo: 'Дом 2эт(10x12,5м)', img: 'img/18.jpg' ,  price: '7 600 000 ₽'},
        { id: 19, category: 'XL', name: 'Проект дома XL-3', area: '263,5 м²', geo: 'дом 2эт(13,5x8,5м) с террасой 13,5х2х5м', img: 'img/19.jpg',  price: '7 426 000 ₽' },
        { id: 20, category: 'L', name: 'Проект дома L-5', area: ' 99,21 м²', geo: 'Проект дома L-5', img: 'img/20.jpg',  price: '3 500 000 ₽' }
    ];


    // Функция генерации тега на карточке (внутри функции createCardHTML)
    function createCardHTML(item) {
        let tagText = 'Проект';
        if (item.category === 'BATH') tagText = 'Проект Бани';
        if (item.category === 'S') tagText = 'Проект "S"';
        if (item.category === 'M') tagText = 'Проект "M"';
        if (item.category === 'L') tagText = 'Проект "L"';
        if (item.category === 'XL') tagText = 'Проект "XL"';


          return `
            <div class="portfolio-item">
                <div class="portfolio-img-box">
                    <img src="${item.img}" alt="${item.name}" class="portfolio-img" loading="lazy">
                    <div class="portfolio-glass-meta">
                        <span class="item-tag">${tagText}</span>
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-details">${item.area} • ${item.geo}</p>
                        <!-- 🔥 ДОБАВЛЕНО: Вывод цены -->
                        <p class="item-price">${item.price}</p> 
                    </div>
                </div>
            </div>
        `;
    }





    const ITEMS_PER_PAGE = 4; 
    let currentFilter = 'all'; 
    let visibleCount = ITEMS_PER_PAGE; 

    const grid = document.getElementById('portfolioGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');

    function createCardHTML(item) {
        let tagText = 'Проект';
        if (item.category === 'hitech') tagText = 'Hi-Tech виллы';
        if (item.category === 'chalet') tagText = 'Шале / Брус';
        if (item.category === 'baths') tagText = 'Бани / SPA';

      return `
            <!-- 🔥 ИСПРАВЛЕНО: Клик по карточке теперь ведет на страницу проекта с передачей ID -->
            <div class="portfolio-item" onclick="window.location.href='project-detail.html?id=${item.id}'">
                <div class="portfolio-img-box">
                    <img src="${item.img}" alt="${item.name}" class="portfolio-img" loading="lazy">
                    <div class="portfolio-glass-meta">
                        <span class="item-tag">${tagText}</span>
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-details">${item.area} • ${item.geo}</p>
                        <p class="item-price">${item.price}</p> 
                    </div>
                </div>
            </div>
        `;
    }

    function renderGrid() {
        if (!grid) return;
        const filtered = ALL_PROJECTS.filter(p => currentFilter === 'all' || p.category === currentFilter);
        const toShow = filtered.slice(0, visibleCount);
        grid.innerHTML = toShow.map(item => createCardHTML(item)).join('');

        if (visibleCount >= filtered.length) {
            if (loadMoreContainer) loadMoreContainer.style.display = 'none';
        } else {
            if (loadMoreContainer) loadMoreContainer.style.display = 'flex';
        }
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            currentFilter = button.getAttribute('data-filter');
            visibleCount = ITEMS_PER_PAGE; 
            renderGrid();
        });
    });

    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += ITEMS_PER_PAGE; 
            renderGrid();
        });
    }

    if (grid) renderGrid();
});
    // =========================================================================
    // СЕКРЕТНЫЙ ВХОД ДЛЯ ВЛАДЕЛЬЦА (ЗАЩИТА АДМИНКИ)
    // =========================================================================
    const secretTrigger = document.getElementById('secretAdminLogin');
    const adminSection = document.querySelector('.admin-panel-section');

    if (secretTrigger && adminSection) {
        secretTrigger.addEventListener('click', () => {
            // Всплывающее окно запроса пароля у пользователя
            const password = prompt('Введите секретный пароль владельца для доступа к админке:');
            
            // 🔥 ЗАДАЙ СВОЙ ПАРОЛЬ ТУТ (сейчас стоит: dom2026)
            if (password === 'dom2026') { 
                adminSection.classList.add('unlocked'); // Показываем скрытую форму
                alert('Доступ разрешен. Панель управления успешно разблокирована!');
                
                // Плавно скроллим владельца вниз прямо к админке
                adminSection.scrollIntoView({ behavior: 'smooth' });
            } else if (password !== null) {
                alert('В доступе отказано. Неверный пароль владельца.');
            }
        });
    }
// --- УНИВЕРСАЛЬНЫЙ СУПЕР-СКРИПТ ДЛЯ МОБИЛЬНОГО БУРГЕРА ---
document.addEventListener('DOMContentLoaded', () => {
    const burgerToggle = document.getElementById('burgerToggle');
    
    // Скрипт интеллектуально ищет как старые (.navigation), так и новые (.nav-links) классы меню
    const mobileMenu = document.querySelector('.navigation') || document.querySelector('.nav-links');
    const allLinks = document.querySelectorAll('.nav-link') || document.querySelectorAll('.nav-item');

    if (burgerToggle && mobileMenu) {
        // 1. Открытие и закрытие меню по клику на гамбургер
        burgerToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Защита от случайных ложных кликов
            burgerToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // 2. Закрытие меню при клике на любой пункт (чтобы плавно скроллить к блоку)
        allLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // 3. Закрытие меню, если кликнули в любую пустую область экрана мимо шторки
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !burgerToggle.contains(e.target)) {
                burgerToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
});
// --- ЖЕЛЕЗОБЕТОННЫЙ ЗАПУСК БУРГЕРА ДЛЯ ВСЕХ СТРАНИЦ ---
document.addEventListener('DOMContentLoaded', () => {
    const burgerToggle = document.getElementById('burgerToggle');
    
    // Скрипт ищет любой вариант класса меню на странице
    const mobileMenu = document.querySelector('.navigation') || document.querySelector('.nav-links');

    if (burgerToggle && mobileMenu) {
        // Открытие и закрытие шторки при клике на гамбургер
        burgerToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            burgerToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Автоматическое закрытие шторки при клике на любой пункт меню
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Закрытие меню, если кликнули мимо него на экран
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !burgerToggle.contains(e.target)) {
                burgerToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
});
// --- АБСОЛЮТНЫЙ ФИКС БУРГЕРА ДЛЯ ВСЕХ СТРАНИЦ ПРОЕКТА ---
document.addEventListener('DOMContentLoaded', () => {
    const burgerToggle = document.getElementById('burgerToggle');
    
    // Ищем любой возможный класс мобильного меню на текущей странице
    const mobileMenu = document.querySelector('.navigation') || document.querySelector('.nav-links');

    if (burgerToggle && mobileMenu) {
        // Открытие и закрытие шторки при клике на гамбургер
        burgerToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            burgerToggle.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Закрытие меню при клике на любой пункт внутри шторки
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                burgerToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });

        // Закрытие шторки, если кликнули в пустую область экрана мимо меню
        document.addEventListener('click', (e) => {
            if (!mobileMenu.contains(e.target) && !burgerToggle.contains(e.target)) {
                burgerToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
            }
        });
    }
});
    // Исправленный блок админки (замени только его в самом низу script.js)
    const adminForm = document.getElementById('adminAddForm');
    if (adminForm) {
        adminForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const newProject = {
                id: ALL_PROJECTS.length + 1,
                category: document.getElementById('adminCategory').value,
                name: document.getElementById('adminName').value,
                area: document.getElementById('adminArea').value,
                geo: document.getElementById('adminGeo').value,
                img: document.getElementById('adminImg').value
            };
            ALL_PROJECTS.unshift(newProject);
            currentFilter = 'all';
            
            // ИСПРАВЛЕНО: Сбрасываем и активируем первую кнопку [0] ("Все объекты") правильно
            filterButtons.forEach(btn => btn.classList.remove('active'));
            if (filterButtons[0]) filterButtons[0].classList.add('active');
            
            adminForm.reset();
            visibleCount = ITEMS_PER_PAGE;
            renderGrid();
            alert('Успех! Новый дом добавлен.');
        });
    }
    // Сбор цены из админки
    const newProject = {
        id: ALL_PROJECTS.length + 1,
        category: document.getElementById('adminCategory').value,
        name: document.getElementById('adminName').value,
        area: document.getElementById('adminArea').value,
        geo: document.getElementById('adminGeo').value,
        img: document.getElementById('adminImg').value,
        price: document.getElementById('adminPrice').value // Добавлено поле цены
    };
       
