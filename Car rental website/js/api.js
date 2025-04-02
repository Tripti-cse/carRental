export const cars = [
    {
        ownerName: "John Doe",
        carModel: "Tesla Model 3",
        carNumber: "ABC-1234",
        rentPerDay: 100,
        location: "New York",
        imageUrl: "../assets/tesla.jpg"
    },
    {
        ownerName: "Jane Smith",
        carModel: "Ford Mustang",
        carNumber: "XYZ-5678",
        rentPerDay: 120,
        location: "Los Angeles",
        imageUrl: "../assets/mustang.jpg"
    }
];

export const getCars = () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(cars), 500);
    });
};

export const addCar = (newCar) => {
    cars.push(newCar);
    return Promise.resolve(newCar);
};
