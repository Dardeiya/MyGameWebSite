document.addEventListener('DOMContentLoaded', function() {
    // Счётчик кликов по кнопке "Версии"
    let clickCount = 0;
    const updatesButton = document.getElementById('updates-button');
    const cheatInfoSection = document.getElementById('cheat-info');

    updatesButton.addEventListener('click', function() {
        clickCount++;
        
        if (clickCount === 7) {
            cheatInfoSection.classList.remove('hidden'); // Показать скрытый раздел после 7 кликов
            clickCount = 0; // Сбросить счётчик
        }
    });

    // --- Лайтбокс для просмотра изображений ---
    const lightboxOverlay = document.getElementById('lightbox-overlay');
    const lightboxImage = lightboxOverlay.querySelector('img');

    // Добавляем курсор "zoom-in" и обработчик клика ко всем изображениям
    document.querySelectorAll('img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightboxImage.alt = this.alt || 'Изображение';
            lightboxOverlay.style.display = 'flex';
        });
    });

    // Закрываем лайтбокс при клике на оверлей (фон) или изображение
    lightboxOverlay.addEventListener('click', function() {
        lightboxOverlay.style.display = 'none';
        lightboxImage.src = '';
        lightboxImage.alt = '';
    });
});
