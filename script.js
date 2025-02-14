document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const audio = document.getElementById('bg-music');

    // Permitir la reproducción del audio al hacer clic en cualquier carta
    document.body.addEventListener('click', () => {
        audio.play().catch(error => console.log("Reproducción bloqueada por el navegador:", error));
    }, { once: true }); // Solo se ejecutará una vez

    // Mensajes para las cartas
    const messages = [
        "Ты - причина моего счастья  💖",
        "Каждый день с тобой - это подарок🎁",
        "Твоя улыбка озаряет мою жизнь ✨",
        "Любовь, которую я испытываю к тебе, безгранична.💫",
        "Спасибо, что ты всегда был в моей жизни. 💌"
    ];

    // Asignar eventos a cada carta
    cards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (card.classList.contains('flip')) return;

            const back = card.querySelector('.back');
            back.textContent = messages[index];
            card.classList.add('flip');

            if (index === messages.length - 1) {
                setTimeout(() => {
                    alert("С Днем святого Валентина, Лиза :3!❤️");
                    audio.play(); // Reproducir la canción
                }, 800);
            }
        });
    });

    // Crear la lluvia de corazones
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = '💖';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.querySelector('.heart-rain').appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }

    setInterval(createHeart, 300);
});
