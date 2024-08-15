const foodImages = {
    burger: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-731189,resizemode-75,msid-72863458/markets/stocks/news/burger-king-india-could-be-a-better-treat-than-mcdonalds-franchisee/burger-thnkstck.jpg',
    fries: 'https://www.kuchpakrahahai.in/wp-content/uploads/2023/05/Air-fried-french-fries.jpg',
    coke: 'https://www.dairyqueen.com/dA/f9656683f3/coca_cola.png',
    all :'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5FzZMW-n1vEDxHuZagj-iG1sMUD4AstiX5Q&s'
};



document.getElementById('order-btn').addEventListener('click', function() {
    const selectedItems = document.querySelectorAll('input[type="checkbox"]:checked');
    if (selectedItems.length === 0) {
        alert('Please select at least one food item.');
        return;
    }

    const orderStatus = document.getElementById('order-status');
    const orderId = document.getElementById('order-id');
    const foodImageContainer = document.getElementById('food-image-container');

    // Show loading message
    orderStatus.classList.remove('hidden');
    orderId.textContent = 'Processing your order...';
    foodImageContainer.innerHTML = ''; // Clear previous images

    // Create a promise to simulate food preparation time
    const preparationTime = Math.floor(Math.random() * 5) + 2; // Random time between 2-6 seconds
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, preparationTime * 1000);
    }).then(() => {
        // Generate a random order ID
        const orderNum = Math.floor(Math.random() * 10000) + 1;
        orderId.textContent = 'Order ID: ' + orderNum;

        // Display the images of the ordered food
        selectedItems.forEach(item => {
            const img = document.createElement('img');
            img.src = foodImages[item.value]; // Get the image URL based on the selected item
            img.alt = item.value;
            img.classList.add('food-image'); // Optional: Add a class for styling
            foodImageContainer.appendChild(img);
        });
    });
});
