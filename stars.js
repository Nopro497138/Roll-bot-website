const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

// Canvas-Größe setzen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Sterne generieren
const stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random(),
    dx: (Math.random() - 0.5) * 0.2,
    dy: (Math.random() - 0.5) * 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();

    // Sterne leicht bewegen
    star.x += star.dx;
    star.y += star.dy;

    // Zurücksetzen, wenn sie aus dem Bild fliegen
    if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
    if (star.y < 0 || star.y > canvas.height) star.dy *= -1;
  }
  requestAnimationFrame(drawStars);
}

drawStars();
