import React, { useState, useRef } from "react";

const CustomImageMagnifier = ({
  imageSrc,
  zoomScale = 1,
  magnifierSize = 10,
}) => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      imageRef.current.getBoundingClientRect();

    // Get cursor position relative to the image
    const x = e.pageX - window.scrollX - left;
    const y = e.pageY - window.scrollY - top;

    // Check if cursor is within image bounds
    if (x < 0 || y < 0 || x > width || y > height) {
      setShowMagnifier(false);
      return;
    }

    setShowMagnifier(true);
    setMagnifierPosition({ x, y });
  };

  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "zoom-in",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setShowMagnifier(false)}
    >
      {/* Main Image */}
      <img
        ref={imageRef}
        src={imageSrc}
        alt="Zoomable"
        style={{
          width: "100%",
          objectFit: "contain",
          borderRadius: "8px",
        }}
      />

      {/* Magnifier */}
      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            top: `${magnifierPosition.y - magnifierSize / 2}px`,
            left: `${magnifierPosition.x - magnifierSize / 2}px`,
            width: `${magnifierSize}px`,
            height: `${magnifierSize}px`,
            border: "2px solid #ccc",
            borderRadius: "50%",
            backgroundColor: "white",
            backgroundImage: `url(${imageSrc})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imageRef.current.offsetWidth * zoomScale}px ${
              imageRef.current.offsetHeight * zoomScale
            }px`,
            backgroundPosition: `-${
              magnifierPosition.x * zoomScale - magnifierSize / 2
            }px -${magnifierPosition.y * zoomScale - magnifierSize / 2}px`,
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default CustomImageMagnifier;
