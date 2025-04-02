import { addCar } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('add-car-form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const newCar = {
            ownerName: form.ownerName.value,
            carModel: form.carModel.value,
            carNumber: form.carNumber.value,
            rentPerDay: parseInt(form.rentPerDay.value),
            location: form.location.value,
            imageUrl: form.imageUrl.value
        };

        // Simulate adding to backend
        await addCar(newCar);

        // Clear form
        form.reset();

        alert('Car added successfully!');
        window.location.href = './dashboard.html';  // Redirect to services page
    });
});
