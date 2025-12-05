// Data Kata-kata Lucu Romantis (Khusus Ngambek)
const funnyQuotes = [
    "aku mungkin nggak sempurna, tapi akuu selalu berusahaa jadi alasan kamuu tersenyumm setiap harii, maafin aku ya, sayangggggggg 😊",
    "kalau kamuu cemebrutt, duniaaa akuu ikut sepii karnaa senyum kamu itu adalahh cahayaa dalam hidupp akuu 🥰",
    "kamuuu tauu ngga kenapaa akuu selalu pengenn bawaa kamuu kemanapun akuu pergi? karnaa kamuu adalahh bagiann palingg terindahh nyaa sayanggggggggg😘",
    "kamuuu tuhh bagaikann kompass dalam hidupp akuu, tanpaaa kamuuu akuu bagaikann hilangg arahann dalam hidupku 😘",
    "kamuu akann selaluuu jadiii perempuann yg selaluu adaa di sampingg akuuu, karnaa akuu yakinn kamuu adalahh tulangg rusukk yg di ciptakann buatt akuuu 🥰",
    "kamuu bagaikann edelweis di puncakk gunung, selaluuu cantikkk dan spesial buatt akuuu sayangggggggg 🌸",
    "cintaakuu samaa kamuu bagaikann bintang di langitt, selaluuu bersinar walau di kegelapan malamh 🌟",
    "kamuu tauu nggaaa, senyummmm kamuuu ituhh bagaikann keindahann yg selaluu menjadii indahhhh dengann segalaa kecantikann kamuuu☀️",
    "romansaakuu samaa kamuuu bagaikann melodi indahhh yg selaluuu mengisi hari-hari akuuu dengan kebahagiaann 🎶",
];

// --- FUNGSI UTAMA ---
function generateFunnyQuote() {
    // [Kode Fungsi generateFunnyQuote]
    const quoteElement = document.getElementById('funny-quote');
    const randomIndex = Math.floor(Math.random() * funnyQuotes.length);
    quoteElement.textContent = funnyQuotes[randomIndex];
    
    // Efek visual kecil
    quoteElement.style.opacity = 0;
    quoteElement.style.transform = 'translateY(10px)';
    setTimeout(() => {
        quoteElement.style.opacity = 1;
        quoteElement.style.transform = 'translateY(0)';
    }, 200);
}

// --- ANIMASI HATI (Floating Hearts) ---
const heartContainer = document.querySelector('.heart-container');

function createHeart() {
    // [Kode Fungsi createHeart]
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDuration = `${Math.random() * 5 + 7}s`; 
    const size = Math.random() * 15 + 10; 
    heart.style.width = heart.style.height = `${size}px`;
    heart.style.animationDelay = `${Math.random() * 4}s`; 
    
    heart.style.setProperty('--float-x', `${Math.random() * 400 - 200}px`); 
    heart.style.setProperty('--float-rotate', `${Math.random() * 720 - 360}deg`); 

    heartContainer.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, parseFloat(heart.style.animationDuration) * 1000);
}

setInterval(createHeart, 300);

// --- ANIMASI ON SCROLL ---
const sections = document.querySelectorAll('.animate-on-scroll, .slide-in-left, .slide-in-right');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => {
    observer.observe(section);
});

// --- PENGATURAN MUSIK LATAR ---
const backgroundMusic = document.getElementById('background-music');
const musicToggleButton = document.getElementById('music-toggle');
let isPlaying = true; 

window.addEventListener('load', () => {
    backgroundMusic.volume = 0.4;
    const playPromise = backgroundMusic.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Musik diputar secara otomatis.");
        }).catch(error => {
            console.log("Autoplay musik diblokir. Pengguna perlu berinteraksi.");
            isPlaying = false;
            musicToggleButton.innerHTML = '<i class="fas fa-play"></i>';
            musicToggleButton.style.display = 'flex';
        });
    }
});

musicToggleButton.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        musicToggleButton.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        backgroundMusic.play();
        musicToggleButton.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});