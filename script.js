document.addEventListener('DOMContentLoaded', function() {
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
});
