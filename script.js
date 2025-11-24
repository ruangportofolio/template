// Animasi fade-in saat halaman dibuka
const cards = document.querySelectorAll(".template-card");

cards.forEach((card, i) => {
    setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, i * 130);
});
