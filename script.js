// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Toggle mobile menu
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }

    // Tracking form submission
    const trackForm = document.getElementById('track-form');
    if (trackForm) {
        trackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const trackingNumber = document.getElementById('tracking-number').value;
            if (trackingNumber) {
                fetchTrackingData(trackingNumber);
            } else {
                alert('Por favor, ingrese un número de seguimiento.');
            }
        });
    }

    // Fetch tracking data and update map
    function fetchTrackingData(trackingNumber) {
        fetch(`track.php?tracking=${trackingNumber}`)
            .then(response => response.json())
            .then(data => updateMap(data))
            .catch(error => console.error('Error:', error));
    }

    function updateMap(data) {
        if (data.error) {
            document.getElementById('tracking-result').innerText = data.error;
            return;
        }

        const map = L.map('map').setView([data.latitude, data.longitude], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        L.marker([data.latitude, data.longitude]).addTo(map)
            .bindPopup(`Paquete: ${data.status}`).openPopup();
        document.getElementById('tracking-result').innerText = `Estado: ${data.status}`;
    }

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                fetch('contact.php', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: `name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`
                })
                .then(response => response.text())
                .then(result => alert(result))
                .catch(error => console.error('Error:', error));
            } else {
                alert('Por favor, complete todos los campos.');
            }
        });
    }
});