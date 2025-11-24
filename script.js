// Particles Background (ساده با canvas)
function createParticles() {
    const canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById('particles').appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            radius: Math.random() * 2 + 1
        });
    }
    
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${Math.random()*360}, 100%, 50%)`;
            ctx.fill();
        });
        requestAnimationFrame(animate);
    }
    animate();
}

// Typing Animation
function typeWriter(element, text, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML = text.substring(0, i + 1);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Form Submit with Confetti (ساده)
function joinWaitlist() {
    alert('Redirecting to waitlist...'); // جایگزین با فرم واقعی
}

document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    typeWriter(document.getElementById('typing'), 'initialize ai-web3 bridge', 150);
    
    document.getElementById('waitlistForm').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thanks! You\'re on the waitlist. 🎉'); // Confetti ساده
    });
});

// Parallax on Scroll (GSAP-like ساده)
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    document.querySelector('.hero-content').style.transform = `translateY(${scrolled * 0.5}px)`;
});