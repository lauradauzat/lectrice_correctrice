document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gestion du formulaire de contact
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                project: document.getElementById('project').value
            };

            // Ici, vous pourriez ajouter le code pour envoyer les données à un serveur
            console.log('Données du formulaire :', formData);
            
            // Affichage d'un message de confirmation
            alert('Merci pour votre message ! Je vous répondrai dans les plus brefs délais.');
            form.reset();
        });
    }

    // Animation au scroll pour les sections
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach((section) => {
        observer.observe(section);
    });
}); 