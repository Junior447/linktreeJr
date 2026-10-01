const whatsapp = document.querySelector('.whatsapp')

whatsapp.addEventListener('click', () => {
    const phoneNumber = '5511958480468'; // contato adicionado
    const message = 'Seja Bem-Vindo(a)'; // mensagem 
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});


