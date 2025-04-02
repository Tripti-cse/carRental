// Select menu button, close button, and modal
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const mobileModal = document.getElementById('mobile-modal');

// Open the modal on menu button click
menuBtn.addEventListener('click', () => {
    mobileModal.classList.remove('hidden');
    mobileModal.classList.add('flex', 'opacity-100');
});

// Close the modal on close button click
closeBtn.addEventListener('click', () => {
    mobileModal.classList.add('hidden');
    mobileModal.classList.remove('flex', 'opacity-100');
});

// Close the modal if user clicks outside the modal
window.addEventListener('click', (e) => {
    if (e.target === mobileModal) {
        mobileModal.classList.add('hidden');
        mobileModal.classList.remove('flex', 'opacity-100');
    }
});
