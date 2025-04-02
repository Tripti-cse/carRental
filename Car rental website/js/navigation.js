// Dynamically load header and footer on every page
document.addEventListener('DOMContentLoaded', () => {
    const loadComponent = async (path, target) => {
        const response = await fetch(path);
        const content = await response.text();
        document.querySelector(target).innerHTML = content;
    };

    loadComponent('../components/header.html', '#header');
    loadComponent('../components/footer.html', '#footer');
});
