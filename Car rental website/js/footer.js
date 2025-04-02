window.onload = () => {
    const footerContainer = document.createElement('div');

    // Adjust the path reference based on the current page location
    const path = window.location.pathname.includes('/pages') ? '../' : './';

    fetch(`${path}components/footer.html`)
        .then(response => response.text())
        .then(data => {
            footerContainer.innerHTML = data;
            document.body.appendChild(footerContainer);
        })
        .catch(error => console.error('Error loading footer:', error));
};
