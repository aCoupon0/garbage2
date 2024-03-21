document.querySelector('.finalBtn').addEventListener('click', function() {
    let name = document.getElementById('nameInput').value.trim();
    let address = document.getElementById('addressInput').value.trim();
    let noirQuantity2 = parseInt(document.getElementById('noirQuantity').innerHTML);
    let careyQuantity2 = parseInt(document.getElementById('careyQuantity').innerHTML);
    let totalPrice = parseInt(document.getElementById('totalPrice').innerHTML.replace(/\./g, '')); // Elimina los puntos

    if (name.length > 0 && address.length >= 10 && (careyQuantity2 > 0 || noirQuantity2 > 0)) {
        let message = `*${name}*\n${address}`;

        if (careyQuantity2 > 0) {
            message += `\nModelo Carey: ${careyQuantity2}`;
        }

        if (noirQuantity2 > 0) {
            message += `\nModelo Noir: ${noirQuantity2}`;
        }

        message += `\nCobro: ${totalPrice.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}\n*Envía este mensaje para confirmar*`;

        const phone = '573058376094';
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.location.href = url;
    } else {
        alert('Por favor llena todos los campos');
    }
});