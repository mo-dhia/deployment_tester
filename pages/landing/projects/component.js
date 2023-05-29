import { useEffect, useCallback, useRef } from "react";
import { projectMouseEnter, projectMouseLeave } from "../../../functions/mouse"
export default function Sections({ preLast, last, element, index, scroll, setBackground, color, screen }) {
    useEffect(() => {
        if (color === undefined || !element) return;
        const lastImg = document.getElementsByClassName('project-img')[document.getElementsByClassName('project-img').length - 1]
        if ((scroll > (window.innerHeight * (0.25)) + (window.innerHeight * index)) && (scroll < (window.innerHeight * (0.25)) + (window.innerHeight * (index + 1))) && color !== index + 1) {
            setBackground(index + 1)
        } else if (window.innerHeight * 0.5 > scroll) {
            setBackground(0)
        }
        if (preLast && (100 - (((window.innerHeight * 0.70) - (scroll - window.innerHeight * index)) / 292) * 100) > 99 && lastImg.style.position === "fixed") {
            lastImg.style.position = "sticky"
            lastImg.style.width = "100%"

        } else if (preLast && (100 - (((window.innerHeight * 0.70) - (scroll - window.innerHeight * index)) / 292) * 100) < 99 && lastImg.style.position === "sticky") {
            lastImg.style.position = "fixed"
            lastImg.style.width = `calc(${screen === "tablet" ? "78%" : "62%"} / 2)`
        }
    }, [scroll, color, element, setBackground, index, preLast, last, screen]);
   
    const mousE = useCallback(projectMouseEnter, [])
    const mouseL = useCallback(projectMouseLeave, [])

    if (color === undefined || !element || !element.color) return null;

    const styles = {
        father_contaier: { marginTop: index ? 0 : "80px", width: "100vw", display: "flex", justifyContent: "center", height: "100vh", transition: "2s" },
        container: { width: screen === "tablet" ? "78%" : "62%", justifyContent: "center", display: "flex", position: "relative" },
        left_side: { marginTop: "-100px", width: "calc(43% - 10%)", paddingRight: "10%", marginLeft: screen === "tablet" ? 0 : "7%", display: "flex", justifyContent: "center", flexDirection: "column" },
        h1: { fontSize: "1.302rem", fontWeight: "500" },

        right_side: { width: "50%", position: "relative" },
        img: {
            clipPath: scroll ? scroll > (window.innerHeight * (0.25)) + (window.innerHeight * index) && !last ?
                "inset(0px 0px " + (100 - (((window.innerHeight * 0.70) - (scroll - window.innerHeight * index)) / 292) * 100) + "%)"
                : "none" : "none",
            zIndex: 5 + Number("-" + index), position: "fixed", top: "50%", transform: "translate(0, -50%)", width: "100%",
            width: `calc(${screen === "tablet" ? "78%" : "62%"} / 2)`, height: `calc(100vw * ${screen === "tablet" ? "0.78" : "0.62"} / 2)`, objectFit: "cover", borderRadius: "11%"
        },
        h2: { fontSize: "0.5rem", color: element.color, fontWeight: "500" },
        btn_container: { width: "250px", marginLeft: "-25px", display: "flex", justifyContent: "center", alignItems: "center", height: "150px" },
        btn: { cursor: "pointer", position: "relative", overflow: "hidden", transition: "0.8s", fontSize: "0.48rem", width: "150px", height: "55px", borderRadius: "50px", border: `1px solid ${element.color}`, background: "transparent" }
    };



    return (
        <div style={styles.father_contaier}>
            <div style={styles.container}>
                <div style={styles.left_side} >
                    <h2 style={styles.h2}>Vimcosmo.com</h2>
                    <h1 style={styles.h1}>Beauty brand, e-commerce</h1>
                    <p style={{ fontSize: "0.45rem" }}>Branding, Website, Design, Development</p>
                    <div onMouseEnter={mousE} onMouseLeave={mouseL} className="project-container" style={styles.btn_container}>
                        <button style={styles.btn}>
                            <div style={{
                                width: "100%",
                                height: "100%",
                                background: "black",
                                color: "white",
                                position: "absolute", transform: "translate(-50%,-50%)",
                                top: "-50%", left: "50%", transition: "0.6s",
                                borderRadius: "100%", pointerEvents: "none", zIndex: -1
                            }} />
                            <div style={{
                                transition: "1s", color: "black", position: "absolute", left: "50%",
                                top: "50%", transform: "translate(-50%, -50%)", width: "100%",
                            }}>View more</div>
                            <div style={{
                                transition: "1s", color: "transparent", position: "absolute", left: "50%",
                                top: "50%", transform: "translate(-50%, -50%)", width: "100%", marginTop: "30px",
                            }}>View more</div>
                        </button>
                    </div>
                </div>
                <div style={styles.right_side}>
                    <img alt="#" className="project-img" style={styles.img} src={element.img} />
                </div>
            </div>
        </div>
    )
}
