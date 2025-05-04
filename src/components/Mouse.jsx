import React, { useState, useEffect } from "react";

const MouseTracer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          width: "30px",
          height: "30px",
          border:"2px solid orange",
          borderRadius: "50%",
          pointerEvents: "none", // Ensure the circle doesn't interfere with mouse events
          transform: "translate(-50%, -50%)", // Center the circle on the cursor
          zIndex: 9999,
          cursor:"pointer"
        }}
      >
        <p style={{
            width:"5px",
            height:"5px",
            borderRadius:"100%",
            backgroundColor:"orange",
            position: "absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%,-50%)"
        }} />
      </div>
    </>
  );
};

export default MouseTracer;