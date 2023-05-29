import { useRef, useEffect } from 'react'

export default function Services({ scroll, screen }) {
    const container = useRef(null);
    const left_img = useRef(null);
    const right_img = useRef(null);
    const bottom_img = useRef(null);

    const scrollTrigger = (ref, f, values) => {
        const start = ref.current.offsetTop - innerHeight
        const end = start + ref.current.clientHeight + (innerHeight / 1.5)
        if (scroll <= end && start <= scroll) {
            let percentages = []
            for (let i = 0; values.length > i; i++) {
                if (!i) {
                }
                percentages.push((((scroll - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
        }
    }
    useEffect(() => {
        scrollTrigger(container, (v) => {
            if (document.querySelector('html').style.background !== "rgb(240, 240, 240)" && screen.mobile) {
                document.querySelector('html').style.background = "rgb(240, 240, 240)"
            } else if (document.querySelector('html').style.background !== "rgb(245, 245, 247)") {
                document.querySelector('html').style.background = "rgb(245, 245, 247)"
            }
            right_img.current.style.transform = `translate3d(-1.8em, ${v[0]}em, 0px)   rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`
        }, [[-2, 5], [0, 23], [20, 27]]);
        scrollTrigger(container, (v) => {
            left_img.current.style.transform = `translate3d(1.7em, ${v[0]}em, 0px)  rotateZ(${v[1]}deg) `
        }, [[-2, 2], [-30, -8]]);
        scrollTrigger(container, (v) => {
            bottom_img.current.style.transform = `translate3d(0px, ${v[0]}em, 0px)   rotateY(${v[1]}deg) rotateZ(${v[2]}deg)`
        }, [[8, -4], [0, -10], [-15, -1]]);

    }, [scroll])

    return (
        <div ref={container} style={{ width: "100%", marginTop: "200px", overflow: "hidden", paddingTop: "15vh", marginTop: "-15vh", paddingBottom: screen.mobile ? 0 : "40vh" }}>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <div style={{ width: "30%", }}>
                    <img alt="#" ref={left_img}
                        src='https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d0ee5569e00035865a5_sc3-p-500.jpg'
                        style={{
                            willChange: "transform", transform: "translate3d(1.7em, -2em, 0px) rotateX(0deg) rotateZ(-30deg)",
                            transformStyle: "preserve-3d", width: screen.mobile ? "8em" : "9.6em", height: screen.mobile ? "8em" : "9.6em", objectFit: "cover", borderRadius: screen.mobile ? "35px" : "65px",
                            float: "right", transition: "0.2s"
                        }} />

                </div>
                <div style={{
                    width: "40%", display: "flex", justifyContent: "center"
                }}>
                    <div style={{ marginTop: screen.mobile || screen.tablet ? "270px" : `150px` }}>
                        <h1 style={{ fontSize: "1.8em", fontWeight: "500", color: "gray" }}>Experience</h1>
                        <h1 style={{ fontSize: "2.02em", fontWeight: "500", color: "white" }}>Excellence</h1>
                        <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "50px" }}>
                            <h1 style={{ color: "gray", fontSize: "1em", fontWeight: "500" }}>
                                Check our <br /> <span style={{ color: "white" }}>Solutions</span>
                            </h1>
                            <div style={{
                                height: "5vw",
                                width: "5vw",
                                background: "linear-gradient(297deg,#73ffa2 36%,#000 87%)",
                                position: "relative",
                                borderRadius: "100%", right: "0"
                            }}>
                                <div style={{ width: "96.8%", height: "96.8%", background: "linear-gradient(225deg,#73ffa2 14%,#000 52%)", borderRadius: "100%", position: "absolute", top: '2%', left: "2%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                    <svg fill="white" width="60" height="30" viewBox="0 0 90 60">
                                        <path d="M4 26C1.79086 26 0 27.7909 0 30C0 32.2091 1.79086 34 4 34V26ZM86.8284 32.8284C88.3905 31.2663 88.3905 28.7337 86.8284 27.1716L61.3726 1.71573C59.8105 0.153631 57.2778 0.153631 55.7157 1.71573C54.1536 3.27783 54.1536 5.81049 55.7157 7.37258L78.3431 30L55.7157 52.6274C54.1536 54.1895 54.1536 56.7222 55.7157 58.2843C57.2778 59.8464 59.8105 59.8464 61.3726 58.2843L86.8284 32.8284ZM4 34H84V26H4V34Z" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ width: "30%", }}>
                    <img alt="#" ref={right_img}
                        src='https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1cf36bc2117bb361cf7d_sc1.jpg'
                        style={{
                            willChange: "transform", transform: "translate3d(-1.8em, -2em, 0px)  rotateX(0deg) rotateZ(20deg)",
                            transformStyle: "preserve-3d", width: screen.mobile ? "10em" : "12.7em", height: screen.mobile ? "10em" : "12.7em", objectFit: "cover", borderRadius: screen.mobile ? "35px" : "65px",
                            float: "left", transition: "0.2s"
                        }} />
                </div>
            </div>

            <div style={{ width: "100%", display: "flex", justifyContent: "center", height: "530px" }}>
                <img alt="#" ref={bottom_img} src='https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d01ba675235f7da86e3_main.jpg'
                    style={{
                        width: screen.mobile ? "12em" : "15.2em", height: screen.mobile ? "12em" : "15.2em", objectFit: "cover", marginTop: "100px",
                        transform: "translate3d(0px, 8em, 0px) rotateY(0deg) rotateZ(-15deg) ",
                        borderRadius: screen.mobile ? "35px" : "65px", transition: "0.2s"
                    }} />
            </div>
        </div>
    )
}
