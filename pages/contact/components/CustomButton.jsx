import React from 'react';
import styles from "../components/customButton.module.css";

const CustomButton = ({ label, value, isActive, onClick }) => {
  const handleMouseEnter = (event) => {
    if (!isActive) {
      event.target.classList.add("project-button");
      event.target.children[0].style.top = "50%";
      event.target.children[0].style.borderRadius = "0";
      event.target.children[1].style.marginTop = "-40px";
      event.target.children[1].style.opacity = 0;
      event.target.children[1].style.color = "white";
      event.target.children[2].style.opacity = 1;
      event.target.children[2].style.marginTop = "0";
      event.target.children[2].style.color = "white";
      event.target.style.border = "1px solid black";
    }
  };

  const handleMouseLeave = (event) => {
    if (!isActive) {
      event.target.children[0].style.top = "150%";
      event.target.children[1].style.marginTop = "0";
      event.target.children[1].style.opacity = 1;
      event.target.children[2].style.opacity = 0;
      event.target.children[2].style.marginTop = "50px";
      event.target.children[1].style.color = "black";
      event.target.children[2].style.color = "black";
      event.target.style.transform = "none";
    }
  };

  return (
    <div className={styles.buttonsContainer}>
      <button style={{
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          fontWeight: "500",
          transition: "0.8s",
          fontSize: "0.8rem",
          width: "150px",
          height: "55px",
          borderRadius: "20% 20% 20% 20%/45% 45% 45% 45%" ,
          border: "1px solid black",
         background: isActive ? "black" : "transparent",
      }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
    
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            background: "black",
            color: "white",
            position: "absolute",
            transform: "translate(-50%,-50%)",
            top: "-50%",
            left: "50%",
            transition: "0.6s",
            borderRadius: "100%",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        <div
          style={{
            transition: "1s",
            color: isActive ? "white" : "black",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            pointerEvents: "none",
          }}
        >
          {label}
        </div>
        <div
          style={{
            transition: "1s",
            color: "transparent",
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            marginTop: "30px",
            pointerEvents: "none",
          }}
        >
          {label}
        </div>
      </button>
    </div>
  )
};

export default CustomButton;
