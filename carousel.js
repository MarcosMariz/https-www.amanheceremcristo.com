window.onload = function () {
    let index = 0;
    const images = document.querySelectorAll('.carousel-img');
    const total = images.length;
    const durations = [8000, 8000, 8000, 8000, 8000]; // ← Aqui muda o tempo de cada imagem
    let timer;

    function showImage(i) {
        images.forEach((img, idx) => {
            img.classList.remove('active');
            if (idx === i) {
                img.classList.add('active');
            }
        });
    }

    function nextImage() {
        index = (index + 1) % total;
        showImage(index);
        startAutoplay(); // agendar próxima imagem com novo tempo
    }

    function prevImage() {
        index = (index - 1 + total) % total;
        showImage(index);
        resetTimer();
    }

    function startAutoplay() {
        clearTimeout(timer);
        const delay = durations[index] || 5000; // tempo da imagem atual
        timer = setTimeout(nextImage, delay);
    }

    function stopAutoplay() {
        clearTimeout(timer);
    }

    function resetTimer() {
        stopAutoplay();
        startAutoplay();
    }

    document.querySelector('.prev').addEventListener('click', () => {
        prevImage();
    });

    document.querySelector('.next').addEventListener('click', () => {
        nextImage();
    });

    showImage(index);
    startAutoplay();
};

function redirecionarWhatsApp() {
    const numeros = ['553191337673', '553191845869'];
    const numero = numeros[Math.floor(Math.random() * numeros.length)];
    const mensagem = 'Bom dia, fiquei interessado no Hotel Fazenda! Poderia me repassar mais informações?.'; //Ver com cliente que msg deseja no whatsapp
    const textoCodificado = encodeURIComponent(mensagem); 

    const linkMobile = `https://api.whatsapp.com/send?phone=${numero}&text=${textoCodificado}`;
    const linkDesktop = `https://web.whatsapp.com/send?phone=${numero}&text=${textoCodificado}`;
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    window.open(isMobile ? linkMobile : linkDesktop, '_blank');
}
