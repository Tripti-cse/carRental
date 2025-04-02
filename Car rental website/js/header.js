window.onload = () => {
    const headerContainer = document.createElement('div');

    // Adjust the path reference based on the current page location
    const path = window.location.pathname.includes('/pages') ? '../' : './';

    fetch(`${path}components/header.html`)
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
            document.body.insertBefore(headerContainer, document.body.firstChild);

            // Mobile menu functionality
            const menuBtn = document.getElementById('menu-btn');
            const closeBtn = document.getElementById('close-btn');
            const modal = document.getElementById('mobile-modal');

            if (menuBtn && closeBtn && modal) {
                menuBtn.addEventListener('click', () => {
                    modal.classList.remove('hidden');
                    modal.classList.add('flex');
                });

                closeBtn.addEventListener('click', () => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                });

                // Close modal when clicking outside of it
                modal.addEventListener('click', (event) => {
                    if (event.target === modal) {
                        modal.classList.add('hidden');
                        modal.classList.remove('flex');
                    }
                });
            }
        })
        .catch(error => console.error('Error loading header:', error));
};
