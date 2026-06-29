import React, { useEffect, useRef } from 'react';

const ParticleBackground = ({ theme = 'fire' }) => {
  const canvasRef = useRef(null);
  const animFrameRef = useRef(null);

  // Store the active theme in a ref so the animation loop always gets the freshest state without restarting useEffect
  const themeRef = useRef(theme);
  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let width, height;
    let particles = [];

    const getThemeConfig = (currentTheme) => {
      switch (currentTheme) {
        case 'water':
          return {
            vxMin: -0.1, vxMax: 0.4, // Drift right
            vyMin: -0.1, vyMax: 0.1,
            color: '6, 182, 212', // Cyan
            speedFactor: 1
          };
        case 'grass':
          return {
            vxMin: -0.2, vxMax: 0.2,
            vyMin: 0.05, vyMax: 0.35, // Drift down
            color: '16, 185, 129', // Emerald
            speedFactor: 0.8
          };
        case 'electric':
          return {
            vxMin: -0.8, vxMax: 0.8, // Fast sparks
            vyMin: -0.8, vyMax: 0.8,
            color: '234, 179, 8', // Yellow
            speedFactor: 2
          };
        case 'fire':
        default:
          return {
            vxMin: -0.15, vxMax: 0.15,
            vyMin: -0.3, vyMax: -0.05, // Float up
            color: '245, 158, 11', // Amber
            speedFactor: 1
          };
      }
    };

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      const particleCount = Math.min(Math.floor(width * height / 22000), 75);
      particles = [];

      const config = getThemeConfig(themeRef.current);

      for (let i = 0; i < particleCount; i++) {
        const speedMultiplier = config.speedFactor;
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() * (config.vxMax - config.vxMin) + config.vxMin) * speedMultiplier,
          vy: (Math.random() * (config.vyMax - config.vyMin) + config.vyMin) * speedMultiplier,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.25 + 0.1,
        });
      }
    };

    init();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const activeTheme = themeRef.current;
      const config = getThemeConfig(activeTheme);

      // Draw particles
      particles.forEach((p) => {
        // Apply wind/drift slowly
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        // Colored glow particles instead of plain white
        ctx.fillStyle = `rgba(${config.color}, ${p.opacity})`;
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw connections
      const connectionDist = 110;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distSq = dx * dx + dy * dy;

          if (distSq < connectionDist * connectionDist) {
            const dist = Math.sqrt(distSq);
            const opacity = (1 - dist / connectionDist) * 0.07;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${config.color}, ${opacity})`;
            ctx.lineWidth = 0.45;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    // Watch for theme changes and adjust particle velocities on-the-fly
    const interval = setInterval(() => {
      const config = getThemeConfig(themeRef.current);
      particles.forEach((p) => {
        const targetVx = (Math.random() * (config.vxMax - config.vxMin) + config.vxMin) * config.speedFactor;
        const targetVy = (Math.random() * (config.vyMax - config.vyMin) + config.vyMin) * config.speedFactor;
        // Ease towards new velocity
        p.vx = p.vx * 0.95 + targetVx * 0.05;
        p.vy = p.vy * 0.95 + targetVy * 0.05;
      });
    }, 1000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-2] opacity-35 pointer-events-none"
    />
  );
};

export default ParticleBackground;
