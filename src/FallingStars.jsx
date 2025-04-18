import React, { useEffect, useRef } from "react";

const FallingStars = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const stars = [];
    const numStars = 5; // Adjust the number of stars
    const starOpacity = 0.2; // 🌟 Opacity of the whole effect (0 = invisible, 1 = fully visible)

    // Function to set the canvas size dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Resize the canvas when the window is resized
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Generate stars with random properties
    for (let i = 0; i < numStars; i++) {
      let size = Math.random() * 5 + 3; // Box size between 3 - 8 pixels
      stars.push({
        x: Math.random() * canvas.width, // Random X position
        y: Math.random() * canvas.height, // Random Y position
        speed: Math.random() * 3 + 2, // Speed between 2 - 5
        size: size, // Width and height of the box
        color: Math.random() > 0.5 ? `rgba(255, 0, 0, ${starOpacity})` : `rgba(0, 0, 255, ${starOpacity})`, // Red or Blue with opacity
        trail: [],
        maxTrail: Math.floor(Math.random() * 100 + 900), // Trail length (5 - 20)
      });
    }

    // Function to update and draw stars
    const updateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      stars.forEach((star) => {
        // Add current position to trail
        star.trail.push({ x: star.x, y: star.y });

        // Keep trail length within the defined limit
        if (star.trail.length > star.maxTrail) {
          star.trail.shift();
        }

        // Move star downward
        star.y += star.speed * 5;
        //star.x -= star.speed;

        // Reset position when reaching the bottom
        if (star.y > canvas.height) {
          star.y = -10; // Reset to above screen
          star.x = Math.random() * canvas.width; // Random X position
          star.speed = Math.random() * 3 + 2; // New random speed
          star.maxTrail = Math.floor(Math.random() * 15 + 5); // New trail length
        }

        // Draw trail effect (same size as the star but fading)
        star.trail.forEach((t, index) => {
          const trailOpacity = ((index + 1) / star.trail.length) * starOpacity; // Gradual fade with global opacity
          ctx.fillStyle = star.color.replace(`${starOpacity}`, trailOpacity.toFixed(2));
          ctx.fillRect(t.x, t.y, star.size, star.size); // Draw square for trail
        });

        // Draw the main star (as a square box)
        ctx.fillStyle = star.color;
        ctx.fillRect(star.x, star.y, star.size, star.size); // Draw square star
      });

      requestAnimationFrame(updateStars); // Repeat animation
    };

    updateStars(); // Start animation

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed", // Fix canvas in place
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1, // Keep behind all other elements
        pointerEvents: "none", // Prevent interaction
      }}
    />
  );
};

export default FallingStars;
