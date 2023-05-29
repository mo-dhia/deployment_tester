
export const CustomCursor = ({ activeMouse }) => {


    return (
        <div className="primary-cursor" style={{
            position: "fixed",
            width: "10px",
            height: "10px",
            borderRadius: "100%",
            background: "black", display: "flex", justifyContent: "center",
            alignItems: "center", zIndex: 999, left: 0, top: 0, display: activeMouse ? "block" : "none", transition: "0.1s",
            pointerEvents: "none"
        }}>
        </div>
    );
};

