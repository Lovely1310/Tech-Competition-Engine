import React, { useEffect, useRef } from 'react';

const Globe = () => {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const CONFIG = {
      MIN_FONT_SIZE: 12,
      MAX_FONT_SIZE: 16,
      FONT_SCALE: 0.008,
      GLOBE_RADIUS_SCALE: 0.75,
      LAT_STEP: 15,
      LNG_STEP: 12,
      LAT_POINTS_SCALE: 120,
      LNG_POINTS_SCALE: 50,
      ROTATION_SPEED: 0.06,
      CHANGE_INTERVAL: 2500,
      TRANSITION_DURATION: 600,
      CHARS: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$%&*+=<>?[]{}|~'
    };

    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;
    
    if (!canvas || !wrapper) return;

    const ctx = canvas.getContext('2d');
    
    function resizeCanvas() {
      const size = Math.min(500, window.innerWidth * 0.9);
      canvas.width = size;
      canvas.height = size;
      canvas.style.width = `${size}px`;
      canvas.style.height = `${size}px`;
      return size;
    }

    const canvasSize = resizeCanvas();
    const centerX = canvasSize / 2;
    const centerY = canvasSize / 2;
    const radius = (canvasSize / 2) * CONFIG.GLOBE_RADIUS_SCALE;
    const tilt = 0;
    let rotation = 0;
    
    function getFontSize() {
      return Math.min(CONFIG.MAX_FONT_SIZE, 
             Math.max(CONFIG.MIN_FONT_SIZE, window.innerWidth * CONFIG.FONT_SCALE));
    }
    
    const globePoints = [];

    function generatePoints() {
      globePoints.length = 0;
      
      for (let lat = -90; lat <= 90; lat += CONFIG.LAT_STEP) {
        const cosLat = Math.abs(Math.cos(lat * Math.PI / 180));
        const pointsAtThisLat = Math.floor(CONFIG.LAT_POINTS_SCALE * Math.pow(cosLat, 2.5));
        const lngStep = pointsAtThisLat > 0 ? 360 / pointsAtThisLat : 360;
        
        for (let lng = -180; lng <= 180; lng += lngStep) {
          if (pointsAtThisLat > 0) {
            globePoints.push({
              lat,
              lng,
              char: CONFIG.CHARS[Math.floor(Math.random() * CONFIG.CHARS.length)],
              nextChar: CONFIG.CHARS[Math.floor(Math.random() * CONFIG.CHARS.length)],
              transitionStart: Math.random() * CONFIG.CHANGE_INTERVAL,
              transitionProgress: 0
            });
          }
        }
      }
      
      for (let lng = -180; lng < 180; lng += CONFIG.LNG_STEP) {
        const cosLng = Math.abs(Math.cos(lng * Math.PI / 180));
        const pointsAtThisLng = Math.floor(CONFIG.LNG_POINTS_SCALE * (1 + cosLng * 0.5));
        const latStep = pointsAtThisLng > 0 ? 180 / pointsAtThisLng : 180;
        
        for (let lat = -90; lat <= 90; lat += latStep) {
          if (pointsAtThisLng > 0) {
            globePoints.push({
              lat,
              lng,
              char: CONFIG.CHARS[Math.floor(Math.random() * CONFIG.CHARS.length)],
              nextChar: CONFIG.CHARS[Math.floor(Math.random() * CONFIG.CHARS.length)],
              transitionStart: Math.random() * CONFIG.CHANGE_INTERVAL,
              transitionProgress: 0
            });
          }
        }
      }
    }

    function drawGlobe(rotation) {
      ctx.clearRect(0, 0, canvasSize, canvasSize);
      ctx.font = `${getFontSize()}px 'Inter', monospace`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      const currentTime = Date.now();

      globePoints.forEach(point => {
        if (currentTime - point.transitionStart >= CONFIG.CHANGE_INTERVAL) {
          point.char = point.nextChar;
          point.nextChar = CONFIG.CHARS[Math.floor(Math.random() * CONFIG.CHARS.length)];
          point.transitionStart = currentTime + Math.random() * 1000;
          point.transitionProgress = 0;
        }

        const phi = (90 - point.lat) * (Math.PI / 180);
        const theta = (point.lng + rotation) * (Math.PI / 180);
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        
        const tiltedY = y * Math.cos(tilt) - z * Math.sin(tilt);
        const tiltedZ = y * Math.sin(tilt) + z * Math.cos(tilt);
        
        if (tiltedZ > -radius * 0.3) {
          const projX = centerX + x;
          const projY = centerY + tiltedY;
          
          const depthOpacity = 0.3 + (tiltedZ / radius) * 0.7;
          
          const timeSinceTransition = currentTime - point.transitionStart;
          point.transitionProgress = Math.min(1, timeSinceTransition / CONFIG.TRANSITION_DURATION);
          const transitionOpacity = Math.sin(point.transitionProgress * Math.PI);
          
          // Use blue color similar to the screenshot
          ctx.fillStyle = `rgba(59, 130, 246, ${depthOpacity * (1 - transitionOpacity)})`;
          ctx.fillText(point.char, projX, projY);
          
          ctx.fillStyle = `rgba(59, 130, 246, ${depthOpacity * transitionOpacity})`;
          ctx.fillText(point.nextChar, projX, projY);
        }
      });
    }

    function animate() {
      rotation += CONFIG.ROTATION_SPEED;
      drawGlobe(rotation);
      requestAnimationFrame(animate);
    }

    const handleResize = () => {
      resizeCanvas();
      generatePoints();
    };

    window.addEventListener('resize', handleResize);
    generatePoints();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="header-globe-wrapper">
      <canvas ref={canvasRef} id="globe" />
    </div>
  );
};

export default Globe;