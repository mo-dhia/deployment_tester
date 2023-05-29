import { useEffect, useRef } from 'react'

export default function Catalogue({ screen, scroll }) {
    const container = useRef(null)
    const img = useRef(null)
    const txt = useRef(null)

    const scrollTrigger = (ref, f, values, startCondition, endCondition, Start, End) => {
        let start = ref.current.offsetTop - innerHeight;
        let end = start + ref.current.clientHeight - (innerHeight * 0.2);
        if (screen.mobile) {
            start += (innerHeight * 0.4)
            end += (innerHeight * 0.4)
        }
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
            img.current.style.transform = `translate3d(${v[0]}%, 0%, 0px)  rotateZ(${v[1]}deg)`
            txt.current.style.transform = `translate3d(${v[2]}%, 0%, 0px)`
        }, [[100, 0], [15, 0], [-40, 0]])
    }, [scroll])
    return (
        <>
            <div ref={container} style={{ width: "100%", height: screen.mobile ? "50vh" : "100vh", display: "flex", justifyContent: "center", overflow: "hidden" }}>
                <div style={{ display: "flex", flexDirection: screen.mobile ? "column-reverse" : "row", width: screen.mobile ? "90%" : "80%", height: "100%", alignItems: "center" }}>
                    <div style={{
                        width: screen.mobile ? "50%" : "70%", height: "100%", display: "flex",
                        flexDirection: "column", justifyContent: "center",
                    }} >
                        <div style={{ transition: "0.1s linear", transform: "translate3d(-40%, 0%, 0px)" }} ref={txt}>

                            <h1 style={{ fontSize: "clamp(1em, 5vw, 5em)", color: "white", fontWeight: "500", position: "relative", display: "flex" }}>
                                Explore our
                                <div style={{
                                    height: screen.mobile ? "8vw" : "5vw",
                                    width: screen.mobile ? "8vw" : "5vw",
                                    background: "linear-gradient(297deg,#73ffa2 36%,#000 87%)",
                                    position: "relative",
                                    borderRadius: "100%",
                                    left: "1.5em", top: "0.2em",
                                }}>
                                    <div style={{ width: "96.8%", height: "96.8%", background: "linear-gradient(225deg,#73ffa2 14%,#000 52%)", borderRadius: "100%", position: "absolute", top: '2%', left: "2%", display: "flex", justifyContent: "center", alignItems: "center" }} >
                                        <svg fill="white" width={"60%"} height="30" viewBox="0 0 90 60">
                                            <path d="M4 26C1.79086 26 0 27.7909 0 30C0 32.2091 1.79086 34 4 34V26ZM86.8284 32.8284C88.3905 31.2663 88.3905 28.7337 86.8284 27.1716L61.3726 1.71573C59.8105 0.153631 57.2778 0.153631 55.7157 1.71573C54.1536 3.27783 54.1536 5.81049 55.7157 7.37258L78.3431 30L55.7157 52.6274C54.1536 54.1895 54.1536 56.7222 55.7157 58.2843C57.2778 59.8464 59.8105 59.8464 61.3726 58.2843L86.8284 32.8284ZM4 34H84V26H4V34Z" />
                                        </svg>
                                    </div>
                                </div>
                            </h1>

                            <br />
                            <h1 style={{ fontSize: screen.mobile ? "clamp(1em, 5vw, 1.5em)" : "clamp(1em, 5vw, 5em)", color: "white", fontWeight: "500", marginTop: screen.mobile ? "-1em" : "-50px" }}>
                                <span style={{ color: "gray" }}>Twin</span> Catalogues
                            </h1>
                        </div>
                        <br />
                    </div>
                    <div style={{
                        width: screen.mobile ? "50%" : "30%", height: screen.mobile ? "50vw" : "100%", display: "flex",
                        flexDirection: "column", justifyContent: "center"
                    }} >
                        <img alt='#' ref={img} style={{
                            width: screen.mobile ? "40vw" : "25vw", height: "40vw", float: "right", transition: "0.1s linear",
                            transform: "translate3d(100%, 0%, 0px)  rotateZ(15deg)", objectFit: "cover", borderRadius: screen.mobile ? "100%" : "300px"
                        }}
                            src='https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1cd48441822608c3eb49_newsletter.jpg' />
                    </div>
                </div>
            </div >
        </>
    )
}
