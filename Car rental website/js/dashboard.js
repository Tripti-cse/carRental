import { getCars } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    const carContainer = document.getElementById('car-container');

    const cars = await getCars();
    cars.forEach(car => {
        const card = `
            <div class="bg-white p-4 shadow-lg rounded-lg">
                <img src="${car.imageUrl}" class="w-full h-48 object-cover rounded" alt="${car.carModel}">
                <h3 class="text-xl font-bold">${car.carModel}</h3>
                <p>Owner: ${car.ownerName}</p>
                <p>Rent: $${car.rentPerDay}/day</p>
                <p>Location: ${car.location}</p>
            </div>
        `;
        carContainer.innerHTML += card;
    });
});
