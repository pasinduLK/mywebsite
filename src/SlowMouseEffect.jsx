import { useEffect, useState } from "react";

const SlowMouseEffect = () => {
  const [realMouse, setRealMouse] = useState({ x: 0, y: 0 });
  const [fakeMouse, setFakeMouse] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    // Detect if the user is on a mobile device
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = /android|iphone|ipad|ipod|blackberry|opera mini|iemobile|wpdesktop/;
      setIsMobile(mobileKeywords.test(userAgent) || window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleMouseMove = (e) => {
      if (isMobile) return; // Stop fake cursor on mobile
      setIsMoving(true);
      setRealMouse({ x: e.clientX, y: e.clientY }); // Track real mouse position

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 1000);
    };

    const disableOnTouch = () => setIsMobile(true);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", disableOnTouch);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", disableOnTouch);
      window.removeEventListener("resize", checkMobile);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Smooth movement effect using requestAnimationFrame
  useEffect(() => {
    if (isMobile) return; // Stop movement calculations on mobile

    let animationFrameId;
    const moveFakeCursor = () => {
      setFakeMouse((prev) => ({
        x: prev.x + (realMouse.x - prev.x) * 0.07, // Smoothly follow the cursor
        y: prev.y + (realMouse.y - prev.y) * 0.07,
      }));

      animationFrameId = requestAnimationFrame(moveFakeCursor);
    };

    moveFakeCursor();

    return () => cancelAnimationFrame(animationFrameId);
  }, [realMouse, isMobile]);

  // Completely remove the fake cursor on mobile
  if (isMobile) return null;

  return (
    <img
      src="/fakecursor.png"
      alt="Fake Cursor"
      style={{
        position: "fixed",
        top: `${fakeMouse.y}px`,
        left: `${fakeMouse.x}px`,
        width: "40px",
        height: "auto",
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        transition: "opacity 0.3s ease-out",
        opacity: isMoving ? 1 : 0,
        zIndex: 9999,
      }}
    />
  );
};

export default SlowMouseEffect;
