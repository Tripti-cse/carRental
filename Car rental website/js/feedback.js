const feedbackData = [
    { name: "Alice", rating: 5, message: "Great service!" },
    { name: "Bob", rating: 4, message: "Very reliable!" },
    { name: "Charlie", rating: 3, message: "Good, but could be better." }
];

document.addEventListener('DOMContentLoaded', () => {
    const feedbackContainer = document.getElementById('feedback-container');

    feedbackData.forEach(fb => {
        const stars = '⭐'.repeat(fb.rating) + '☆'.repeat(5 - fb.rating);
        const feedbackCard = `
            <div class="bg-white p-4 shadow-lg rounded-lg max-w-md">
                <p>"${fb.message}"</p>
                <p class="mt-2">${stars}</p>
                <p class="text-gray-600">- ${fb.name}</p>
            </div>
        `;
        feedbackContainer.innerHTML += feedbackCard;
    });
});
