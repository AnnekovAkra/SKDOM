      document.addEventListener('DOMContentLoaded', () => {
    
    // =========================================================================
    // БАЗА ДАННЫХ ПРОЕКТОВ (Добавляйте сюда новые дома, сайт сам всё построит!)
    // =========================================================================
    const ALL_PROJECTS = [
        { id: 1, category: 'hitech', name: 'Резиденция Evolution', area: '420 м²', geo: 'Новая Рига', img: 'https://unsplash.com' },
        { id: 2, category: 'chalet', name: 'Усадьба «Альпы»', area: '310 м²', geo: 'Клязьма', img: 'https://unsplash.com' },
        { id: 3, category: 'baths', name: 'SPA-комплекс «Кедр»', area: '120 м²', geo: 'Рублевка', img: 'https://unsplash.com' },
        { id: 4, category: 'hitech', name: 'Вилла Spectrum', area: '560 м²', geo: 'Сочи', img: 'https://unsplash.com' },
        
        // Пошли проекты «с запасом» (следующая пачка для кнопки "Показать ещё")
        { id: 5, category: 'chalet', name: 'Дом Forestwood', area: '240 м²', geo: 'Истра', img: 'https://unsplash.com' },
        { id: 6, category: 'hitech', name: 'Вилла Cubism', area: '380 м²', geo: 'Барвиха', img: 'https://unsplash.com' },
        { id: 7, category: 'baths', name: 'Баня «Nordic SPA»', area: '95 м²', geo: 'Звенигород', img: 'https://unsplash.com' },
        { id: 8, category: 'chalet', name: 'Усадьба Тайга', area: '450 м²', geo: 'Красноярск', img: 'https://unsplash.com' },
        
        // Сюда вы можете прописать хоть 20, хоть 50 домов по такому же шаблону...
    ];

    const ITEMS_PER_PAGE = 4; // Сколько домов показывать за один раз
    let currentFilter = 'all'; // Текущий выбранный фильтр
    let visibleCount = ITEMS_PER_PAGE; // Сколько сейчас отображено

    const grid = document.getElementById('portfolioGrid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    const loadMoreContainer = document.getElementById('loadMoreContainer');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Функция генерации HTML-карточки дома
    function createCardHTML(item) {
        let tagText = 'Проект';
        if (item.category === 'hitech') tagText = 'Hi-Tech виллы';
        if (item.category === 'chalet') tagText = 'Шале / Брус';
        if (item.category === 'baths') tagText = 'Бани / SPA';

        return `
            <div class="portfolio-item">
                <div class="portfolio-img-box">
                    <img src="${item.img}" alt="${item.name}" class="portfolio-img" loading="lazy">
                    <div class="portfolio-glass-meta">
                        <span class="item-tag">${tagText}</span>
                        <h3 class="item-name">${item.name}</h3>
                        <p class="item-details">${item.area} • ${item.geo}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Главная функция рендеринга сетки
    function renderGrid() {
        // 1. Фильтруем массив по выбранной категории
        const filtered = ALL_PROJECTS.filter(p => currentFilter === 'all' || p.category === currentFilter);
        
        // 2. Отрезаем кусок массива для текущей страницы
        const toShow = filtered.slice(0, visibleCount);

        // 3. Выводим карточки на экран
        grid.innerHTML = toShow.map(item => createCardHTML(item)).join('');

        // 4. Прячем кнопку "Показать ещё", если вывели все доступные дома данной категории
        if (visibleCount >= filtered.length) {
            loadMoreContainer.style.display = 'none';
        } else {
            loadMoreContainer.style.display = 'flex';
        }
    }

    // Обработчик клика на кнопки фильтрации
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            currentFilter = button.getAttribute('data-filter');
            visibleCount = ITEMS_PER_PAGE; // Сбрасываем счетчик страниц при смене категории
            renderGrid();
        });
    });

    // Обработчик клика на кнопку "Показать ещё"
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            visibleCount += ITEMS_PER_PAGE; // Увеличиваем лимит показа еще на 4 дома
            renderGrid();
        });
    }

    // Первый запуск при открытии страницы
    if (grid) {
        renderGrid();
    }
});
