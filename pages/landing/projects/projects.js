import data from "@/data/landing/projects"

import { useEffect, useCallback, useRef } from "react"
import { projectMouseEnter, projectMouseLeave } from "../../../functions/mouse"

export default function Sections({ screen, scroll }) {
    const container = useRef(null)
    const leftContainer = useRef(null)
    const rightContainer = useRef(null)
    const scrollTrigger = (ref, f, values, Start, End) => {
        const start = container.current.offsetTop
        const end = start + container.current.clientHeight - innerHeight
        let percentages = []

        if (scroll <= end && start <= scroll) {
            for (let i = 0; values.length > i; i++) {
                percentages.push((((scroll - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
        }
        if (screen !== "mobile") {
            const imgs = rightContainer.current.children
            if (!percentages.length && start >= scroll && imgs[0].style.clipPath !== "inset(0px 0px 0%)") {
                imgs[0].style.clipPath = "inset(0px 0px 0%)"
            } else if (scroll >= end && imgs[imgs.length - 2].style.clipPath !== "inset(0px 0px 100%)") {
                imgs[imgs.length - 2].style.clipPath = "inset(0px 0px 100%)"
            }
        }
    }
    const mousE = useCallback(projectMouseEnter, []);
    const mouseL = useCallback(projectMouseLeave, []);

    useEffect(() => {

        scrollTrigger(container, (v) => {
            const index = parseInt(((v[1] * (data.length - 1)) / 100))

            if (index + 0.5 < ((v[1] * (data.length - 1)) / 100) && data[index + 1] && document.querySelector('html').style.background !== data[index + 1].background) {
                document.querySelector('html').style.background = data[index + 1].background
                document.getElementsByClassName("primary-cursor")[0].style.background = data[index + 1].color

            } else if (index + 0.5 > ((v[1] * (data.length - 1)) / 100) && document.querySelector('html').style.background !== data[index].background) {
                document.querySelector('html').style.background = data[index].background
                document.getElementsByClassName("primary-cursor")[0].style.background = data[index].color
            }

            const children = leftContainer.current.children
            for (let i = 0; children.length > i; i++) {
                children[i].style.transform = `translateY(-${v[0]}px)`
            }

            if (screen !== "mobile") {

                const imgs = rightContainer.current.children

                imgs[index].style.clipPath = `inset(0px 0px ${v[1] * (data.length - 1) - (index * 100)}%)`

                if (index && imgs[index - 1].style.clipPath !== "inset(0px 0px 100%)") {
                    imgs[index - 1].style.clipPath = "inset(0px 0px 100%)"
                } else if (index < data.length - 2 && imgs[index + 1].style.clipPath !== "inset(0px 0px 100%)") {
                    imgs[index + 1].style.clipPath = "inset(0px 0px 0%)"
                }

            }
        }, [[0, ((data.length - 1) * (innerHeight * 0.9))], [0, 100]])

        if ((container.current.offsetTop > scroll && document.getElementsByClassName("primary-cursor")[0].style.width !== "10px") || (container.current.offsetTop + container.current.clientHeight - (innerHeight * 0.4) >= scroll && container.current.offsetTop + container.current.clientHeight - innerHeight <= scroll)) {
            document.getElementsByClassName("primary-cursor")[0].style.width = "10px"
            document.getElementsByClassName("primary-cursor")[0].style.height = "10px"
            document.getElementsByClassName("cursor-click")[0].textContent = ""
        }

    }, [scroll]);

    const styles = {
        veil: { height: "calc(100% + 150px + 90vh)", width: "100%", position: "absolute", top: "-90vh", zIndex: 50, pointerEvents: "none", opacity: 0, transition: "2s", background: "black" },
        h1: { fontSize: "1.302rem", fontWeight: "500", textAlign: screen === "mobile" ? "center" : "left" },
        h2: { fontSize: "0.45rem", fontWeight: "300", textAlign: screen === "mobile" ? "center" : "left" },
        btn_container: { width: "250px", marginLeft: "-25px", display: "flex", justifyContent: "center", alignItems: screen === "mobile" ? "start" : "center", top: screen === "mobile" ? "2vh" : 0, height: "150px", position: "relative", left: screen === "mobile" ? "50%" : "100px", transform: screen === "mobile" ? "translateX(-50%)" : "translateX((clamp(-100px, -10vw, -150px)))" },
        btn: { cursor: "pointer", position: "relative", overflow: "hidden", transition: "0.8s", fontSize: "0.48rem", width: "clamp(100px, 10vw, 150px)", height: "clamp(50px, 3vw, 55px)", borderRadius: "50px", background: "transparent" },
        btn_wrapper: { width: "100%", height: "100%", background: "black", color: "white", position: "absolute", transform: "translate(-50%,-50%)", top: "-50%", left: "50%", transition: "0.6s", borderRadius: "100%", pointerEvents: "none", zIndex: -1 },
        dark_btn: { transition: "1s", color: "black", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", },
        lignt_btn: { transition: "1s", color: "transparent", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "100%", marginTop: "30px" },
        contentWrapper: { marginTop: screen === "mobile" ? "30vh" : 0, position: "relative", display: "flex", justifyContent: "center" },
        wrapper: { width: "80%", height: `${data.length * 600 + (600 / 2)}px`, position: "relative", zIndex: 1 },
        container: { position: "sticky", top: "0", width: "100%", height: "100vh", zIndex: 1, overflow: "hidden", display: "flex", flexDirection: screen === "mobile" ? "column" : "row" },
        left_wrapper: { width: screen === "mobile" ? "100%" : "50%", height: "100%", position: "relative" },
        left_container: { width: "100%", position: "relative", transform: `translateY(calc(-90vh / 2))`, top: '50%' },
        left_content_wrapper: { position: "relative", height: "90vh", display: "flex", justifyContent: "center", flexDirection: "column" },
        left_child_wrapper: { width: screen === "tablet" ? "70%" : screen === "mobile" ? "100%" : "50%", float: "right", position: "relative", marginLeft: "50%", transform: "translateX(-50%)" },
        right_wrapper: { width: "50%", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" },
        right_container: { width: "30vw", height: "30vw", position: "relative", gap: 0 },
        img: { cursor: "none", objectFit: "cover", width: "100%", height: "100%", position: "absolute", borderRadius: "50px" },
        left_img_container: { width: "80vw", height: "90vw", display: screen !== "mobile" ? "none" : "block" },
        left_img: { width: "100%", height: "90%", objectFit: "cover", borderRadius: "50px" }
    };

    return (
        <div ref={container} style={styles.contentWrapper}>
            <div style={styles.wrapper}>
                <div style={styles.container}>
                    <div style={styles.left_wrapper} >
                        <div ref={leftContainer} style={styles.left_container}>
                            {data.map((e, i) => {
                                return <div key={i} style={styles.left_content_wrapper}>
                                    <div style={styles.left_child_wrapper} >
                                        <div style={styles.left_img_container}>
                                            <img src={e.img} style={styles.left_img} />
                                        </div>
                                        <h2 style={{ ...styles.h2, color: e.color }}>{e.link}</h2>
                                        <h1 style={styles.h1}>{e.t1}</h1>
                                        <p style={{
                                            fontSize: "0.45rem",
                                            textAlign: screen === "mobile" ? "center" : "left"
                                        }}>Branding, Website, Design, Development</p>
                                        <div onMouseEnter={mousE} onMouseLeave={mouseL} className="project-container" style={styles.btn_container}>
                                            <button style={{ ...styles.btn, border: `${screen === "mobile" ? 2 : 1}px solid ${e.border}`, }}>
                                                <div style={styles.btn_wrapper} />
                                                <div style={styles.dark_btn}>View more</div>
                                                <div style={styles.lignt_btn}>View more</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>

                    </div>
                    <div style={styles.right_wrapper}><div ref={rightContainer} style={styles.right_container}>{data.map((e, i) => <img
                        onMouseLeave={(event) => {
                            //  console.log((i === data.length - 1 && !event.target.style.clipPath) || (i === 0 && event.target.style.clipPath === 'inset(0px 0px 0%)'))

                            if ((i === data.length - 1 && !event.target.style.clipPath) || (i === 0 && event.target.style.clipPath === "inset(0px 0px 0%)")) {
                                document.getElementsByClassName("primary-cursor")[0].style.width = "10px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "10px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                                document.getElementsByClassName("cursor-click")[0].textContent = ""
                            } else {
                                scrollTrigger(container, (v) => {
                                    const index = parseInt(((v[1] * (data.length - 1)) / 100))

                                    if (index + 0.5 < ((v[1] * (data.length - 1)) / 100) && data[index + 1] && document.querySelector('html').style.background !== data[index + 1].background) {
                                        document.getElementsByClassName("primary-cursor")[0].style.background = data[index + 1].color
                                    } else if (index + 0.5 > ((v[1] * (data.length - 1)) / 100) && document.querySelector('html').style.background !== data[index].background) {
                                        document.getElementsByClassName("primary-cursor")[0].style.background = data[index].color
                                    }
                                    document.getElementsByClassName("primary-cursor")[0].style.width = "10px"
                                    document.getElementsByClassName("primary-cursor")[0].style.height = "10px"
                                    document.getElementsByClassName("primary-cursor")[0].style.opacity = 1
                                    document.getElementsByClassName("cursor-click")[0].textContent = ""

                                }, [[0, ((data.length - 1) * (innerHeight * 0.9))], [0, 100]])

                            }
                        }}
                        onMouseEnter={() => {
                            document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                            document.getElementsByClassName("primary-cursor")[0].style.background = e.color
                            document.getElementsByClassName("primary-cursor")[0].style.width = "80px"
                            document.getElementsByClassName("primary-cursor")[0].style.height = "80px"
                            document.getElementsByClassName("primary-cursor")[0].style.opacity = 0.9
                            document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                            document.getElementsByClassName("cursor-click")[0].style.color = "white"

                        }} onMouseMove={() => {
                            if (document.getElementsByClassName("primary-cursor")[0].style.height !== "80px") {
                                document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                                document.getElementsByClassName("primary-cursor")[0].style.background = e.color
                                document.getElementsByClassName("primary-cursor")[0].style.width = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.height = "80px"
                                document.getElementsByClassName("primary-cursor")[0].style.opacity = 0.9
                                document.getElementsByClassName("cursor-click")[0].textContent = "Click"
                                document.getElementsByClassName("cursor-click")[0].style.color = "white"

                            }
                        }}
                        key={i} style={{ ...styles.img, zIndex: 5 - i }} src={e.img} />)} </div> </div>
                </div>
            </div>
            <div className="veil" style={styles.veil} />
        </div>
    )
}
