export const CustomCursor = ({ activeMouse }) => {
    return (
      <div
        className="primary-cursor"
        style={{
          position: "fixed",
          width: "10px",
          height: "10px",
          borderRadius: "100%",
          background: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 999,
          left: 0,
          top: 0,
          display: activeMouse ? "block" : "none",
          transition: "width 0.5s, height 0.5s, transform 0.1s linear",
          pointerEvents: "none", overflow: "hidden"
        }}
      >
        <div
          className="cursor-click"
          style={{
            textAlign: "center",
            pointerEvents: "none",
            fontSize: "12px",
            color: "white",
            transform: "translate(-50%,-50%)",
            position: "absolute",
            left: "50%",
            top: "50%",
          }}
        />
      </div>
    );
  };
  