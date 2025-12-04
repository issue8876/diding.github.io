document.addEventListener('DOMContentLoaded', () => {
    // 1. Inject Background Blobs
    const blobContainer = document.createElement('div');
    blobContainer.className = 'blob-cont';
    blobContainer.innerHTML = `
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
    `;
    document.body.prepend(blobContainer);

    // 2. Inject Mouse Light
    const mouseLight = document.createElement('div');
    mouseLight.id = 'mouseLight';
    mouseLight.className = 'mouse-blob';
    document.body.appendChild(mouseLight);

    // 3. Inject Navigation
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
    const basePath = isHomePage ? '' : '../'; // Adjust path based on current location
    
    const nav = document.createElement('nav');
    nav.className = 'nav-bar';
    nav.innerHTML = `
        <a href="${basePath}index.html" class="nav-logo">
            <span class="text-2xl">👩‍💻</span> 혜련의 웹페이지
        </a>
        <button class="menu-btn" onclick="toggleMenu()">☰</button>
        <div class="nav-links" id="navLinks">
            <a href="${basePath}index.html" class="nav-link ${isHomePage ? 'active' : ''}">홈</a>
            <a href="${basePath}pages/deeplearning.html" class="nav-link ${window.location.pathname.includes('deeplearning') ? 'active' : ''}">딥러닝 게임</a>
            <a href="${basePath}pages/seatingarrangement.html" class="nav-link ${window.location.pathname.includes('seatingarrangement') ? 'active' : ''}">자리 배치</a>
            <a href="${basePath}pages/englishword.html" class="nav-link ${window.location.pathname.includes('englishword') ? 'active' : ''}">영어 단어</a>
        </div>
    `;
    document.body.prepend(nav);

    // 4. Mouse Move Effect
    document.addEventListener('mousemove', function(e) {
        mouseLight.style.left = e.clientX + 'px';
        mouseLight.style.top = e.clientY + 'px';
    });

    // 5. Card Tilt Effect (if .glass-card exists)
    const card = document.querySelector('.glass-card');
    if (card) {
        document.addEventListener('mousemove', (e) => {
            const x = (window.innerWidth / 2 - e.pageX) / 25;
            const y = (window.innerHeight / 2 - e.pageY) / 25;
            card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
        });
        
        document.addEventListener('mouseleave', () => {
            card.style.transform = `rotateY(0deg) rotateX(0deg)`;
        });
    }
});

// Toggle Mobile Menu
function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('open');
}
