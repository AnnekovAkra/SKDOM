// Простая интерактивная фильтрация для каталога проектов
document.addEventListener("DOMContentLoaded", () => {
        // Логика отправки премиальной формы контактов
    const leadForm = document.getElementById('leadForm');
    if (leadForm) {
        leadForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Предотвращаем перезагрузку страницы
            
            const name = document.getElementById('userName').value;
            const phone = document.getElementById('userPhone').value;
            
            // Здесь в будущем будет отправка на ваш email или в CRM
            alert(`Спасибо, ${name}! Заявка принята. Главный архитектор «СК ВАШ ДОМ» свяжется с вами по номеру ${phone} в течение 30 минут.`);
            
            leadForm.reset(); // Очищаем форму
        });
    }

    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(button => {
        button.addEventListener("click", () => {
            // Переключение активного класса у кнопок
            filterButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");

            const filterValue = button.getAttribute("data-filter");

            // Логика скрытия/показа карточек
            projectCards.forEach(card => {
                if (filterValue === "all" || card.getAttribute("data-category") === filterValue) {
                    card.style.display = "block";
                    setTimeout(() => card.style.opacity = "1", 50);
                } else {
                    card.style.opacity = "0";
                    setTimeout(() => card.style.display = "none", 300);
                }
            });
        });
    });
});
