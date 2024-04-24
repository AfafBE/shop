
document.querySelectorAll('.add-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.card');
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    });
});

document.querySelectorAll('.minus-btn').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.card');
        const quantityElement = item.querySelector('.quantity');
        let quantity = parseInt(quantityElement.textContent);
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    });
});


document.querySelectorAll('.ri-delete-bin-line').forEach(button => {
    button.addEventListener('click', () => {
        const item = button.closest('.card');
        item.remove();
        updateTotalPrice();
    });
});
var heartButtons = document.querySelectorAll('.heart-button');
heartButtons.forEach(function(heartButton) {
    var emptyHeart = heartButton.querySelector('.ri-heart-line');
    var filledHeart = heartButton.querySelector('.ri-heart-fill');


    filledHeart.style.display = 'none';


    emptyHeart.addEventListener('click', function() {
        
        emptyHeart.style.display = 'none';
        filledHeart.style.display = 'inline';
    });

    filledHeart.addEventListener('click', function() {
      
        filledHeart.style.display = 'none';
        emptyHeart.style.display = 'inline';
    });
});

function updateTotalPrice() {
    let totalPrice = 0;
    document.querySelectorAll('.card').forEach(item => {
        const quantity = parseInt(item.querySelector('.quantity').textContent);
        const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
        totalPrice += quantity * price;
    });
    document.getElementById('totalPrice').textContent = '$' + totalPrice.toFixed(2);
}


