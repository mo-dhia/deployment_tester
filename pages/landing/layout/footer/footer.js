import Link from "next/link";
export default function Footer({ screen }) {
    return (
        <div>
            <div className="footer-container" style={{ scale: screen === "mobile" || screen === "tablet" ? "0.4" : "0.7", height: "700px", width: "100%", transition: "scale 1s", cursor: "pointer" }}>
                <Link href="/contact" style={{ width: "700px", height: "700px", position: "absolute", transform: "translate(-50%,-50%)", top: "50%", left: "50%" }}>
                    <svg viewBox="0 0 700 700">
                        <defs>
                            <clipPath id="clip">
                                <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" />
                            </clipPath>
                        </defs>
                        <path d="M 556.58 105.892 A 319.757 319.757 0 0 0 45.004 361.709 c 0 176.559 143.154 319.712 319.713 319.712 c 173.826 0 315.135 -138.746 319.541 -311.495 q 0.176 -4.109 0.176 -8.218 V 41.997 a 159.711 159.711 0 0 0 -127.854 63.895 Z" fill="white" />
                        <foreignObject
                            className="footer-inner-container"
                            style={{
                                height: "100%",
                                width: "100%",
                                overflow: "hidden",
                            }}
                            clipPath="url(#clip)"
                        >
                            <h4 style={{ fontWeight: "normal", zIndex: "5555", marginTop: "-28px", color: "black", fontSize: "20px", position: "absolute", left: "50%", top: "50%", transform: 'translate(-50%, -50%)' }}>
                                Click to </h4>
                            <h1 style={{ fontWeight: "normal", zIndex: "5555", marginTop: "14px", color: "black", fontSize: "50px", position: "absolute", left: "50%", top: "50%", transform: 'translate(-50%, -50%)' }}>
                                Get in touch </h1>
                            <div
                                className="footer-inner"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    position: "absolute",
                                    transform: "scale(0)",

                                }}
                            >
                                <div
                                    className="footer-inner-inner"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        background: "black",
                                        borderRadius: "100%",
                                        transition: "0.4s ease-in-out",
                                    }}
                                />
                            </div>
                        </foreignObject>
                    </svg>

                </Link>
            </div>
            <div style={{ width: screen === "mobile" ? "100vw" : "100%", height: "100px", display: "flex", justifyContent: "center" }}>
                <div style={{ width: screen === "mobile" ? "90%" : "600px", height: "100%", display: "flex", justifyContent: "space-between" }}>
                    <div style={{ width: "50%" }}>
                        <div style={{ fontSize: ".48rem", position: "relative" }}>
                            <span onMouseEnter={() => {
                                document.getElementsByClassName("primary-cursor")[0].style.background = "black"
                                document.getElementsByClassName("primary-cursor")[0].style.width = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 0.9
                                setTimeout(() => {
                                    if (document.getElementsByClassName("cursor-click")[0].textContent !== "Copie") {
                                        document.getElementsByClassName("cursor-click")[0].textContent = "Copie"
                                    }
                                }, 300);
                            }} onMouseLeave={() => {
                                document.getElementsByClassName("primary-cursor")[0].style.background = "black"
                                document.getElementsByClassName("primary-cursor")[0].style.width = "12px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "12px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                                document.getElementsByClassName("cursor-click")[0].textContent = ""
                            }}
                                onClick={() => {
                                    navigator.clipboard.writeText("info@info.co")
                                        .then(() => {
                                            document.getElementsByClassName("cursor-click")[0].textContent = "Copied ✔"
                                        })
                                        .catch((error) => {
                                            console.error("Error copying text to clipboard:", error);
                                        });
                                }}
                                style={{ borderBottom: "1px solid black", cursor: "none" }}>info@info.co</span>
                        </div>
                        <p style={{ fontSize: "9.1px", color: "#6e6e73", paddingTop: "13px", fontWeight: "600" }}>Tunis, Tunisia</p>
                    </div>
                    <div onMouseEnter={() => {
                        document.getElementsByClassName("primary-cursor")[0].style.background = "#fff";
                        document.getElementsByClassName("primary-cursor")[0].style.width = "70px";
                        document.getElementsByClassName("primary-cursor")[0].style.height = "70px";
                        document.getElementsByClassName("primary-cursor")[0].style.opacity = 1;
                        document.getElementsByClassName("primary-cursor")[0].style.mixBlendMode = "difference";
                        document.getElementsByClassName("cursor-click")[0].textContent = "";
                    }} onMouseLeave={() => {
                        document.getElementsByClassName("primary-cursor")[0].style.background = "black"
                        document.getElementsByClassName("primary-cursor")[0].style.width = "12px"
                        document.getElementsByClassName("primary-cursor")[0].style.height = "12px"
                        document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                        document.getElementsByClassName("primary-cursor")[0].style.mixBlendMode = "normal"

                    }} style={{ width: "50%" }}>
                        <div style={{ fontSize: ".48rem", position: "relative", float: "right" }}>
                            <div
                                style={{ display: "flex" }}>
                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    style={{ width: "20px", height: "20px", marginRight: "15px" }} >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>

                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    style={{ width: "20px", height: "20px", marginRight: "15px" }} >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>
                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    style={{ width: "20px", height: "20px", marginRight: "15px" }} >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>
                                <div src="https://deveb.co/static/media/linkedin.6f93e620.svg"
                                    style={{ width: "20px", height: "20px" }} >
                                    <svg viewBox="0 0 50 50" width="100%" height="100%">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <br />
                        <p style={{ fontSize: "9.1px", color: "#6e6e73", marginTop: screen === "mobile" ? 0 : "-13px", float: "right", fontWeight: "600" }}>Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
