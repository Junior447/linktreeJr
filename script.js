const whatsapp = document.querySelector('.whatsapp')

whatsapp.addEventListener('click', () => {
    const phoneNumber = '55958480468'; // contato adicionado
    const message = 'Em que posso ajudar'; // mensagem 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});


