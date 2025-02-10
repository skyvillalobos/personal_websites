// Animación de fade-in staggered para los elementos de la lista
document.addEventListener("DOMContentLoaded", function () {
    const contactItems = document.querySelectorAll(".contact-info li");

    contactItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }, index * 300); // Retraso de 300ms entre cada elemento
    });
});