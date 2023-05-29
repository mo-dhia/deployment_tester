import React, { useEffect, useRef } from 'react'

export default function About({ scroll, screen, container }) {

    const leftContainer = useRef(null)
    const rightContainer = useRef(null)
    const scrollTrigger = (ref, f, values, start, end) => {

        container.current.offsetTop + container.current.children[0].clientHeight - innerHeight * 1.2

        if (scroll <= end && start <= scroll) {

            let percentages = []
            for (let i = 0; values.length > i; i++) {
                percentages.push((((scroll - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
        }
    }

    useEffect(() => {
        if (screen.mobile) {

            const leftStart = leftContainer.current.offsetTop - (innerHeight * 1)
            const leftEnd = leftStart + leftContainer.current.clientHeight
            scrollTrigger(container, (v, ref) => {
                leftContainer.current.style.transform = `translate3d(${v[0]}%, 0px, 0px) rotateZ(${v[1]}deg)`
                leftContainer.current.children[1].style.transform = `translate3d(${v[2]}%, ${v[4]}px, 0px) rotateZ(${v[3]}deg)`
            }, [[-100, 6], [-15, 15], [50, -62], [15, -32], [0, 20]], leftStart, leftEnd)

            const rightStart = rightContainer.current.offsetTop - (innerHeight * 1)
            const rightEnd = rightStart + rightContainer.current.clientHeight + (innerHeight * 0.5)
            scrollTrigger(container, (v, ref) => {
                rightContainer.current.style.transform = `translate3d(${v[0]}%, 0px, 0px) rotateZ(${v[1]}deg)`
                rightContainer.current.children[1].style.transform = `translate3d(${v[2]}%, ${v[4]}px, 0px) rotateZ(${v[3]}deg)`
            }, [[300, 150], [15, 15], [50, 0], [-15, -32], [-0, 30]], rightStart, rightEnd)

            console.log(rightContainer.current.children[1].style.transform)

        } else {
            const start = container.current.offsetTop - innerHeight
            const end = container.current.offsetTop + container.current.children[0].clientHeight - innerHeight * 1.2

            scrollTrigger(container, (v, ref) => {
                leftContainer.current.children[1].style.transform = `translate3d(-${v[0]}%, 0px, 0px) rotateZ(-${v[1]}deg)`
                leftContainer.current.style.transform = `translate3d(-${v[2]}%, 0px, 0px) rotateZ(-${v[3]}deg)`
                rightContainer.current.children[1].style.transform = `translate3d(${v[0]}%, 0px, 0px) rotateZ(${v[1]}deg)`
                rightContainer.current.style.transform = `translate3d(${v[2]}%, 0px, 0px) rotateZ(${v[3]}deg)`

            }, [[100, 0], [50, 15], [100, 0], [15, 0]], start, end)

        }

    }, [scroll])


    return (
        <div>

            <div style={{ display: "flex", zIndex: 5, flexDirection: screen.mobile ? "column" : "row" }}>
                <div style={{ width: "45%", height: "auto", marginTop: "14%" }}>
                    <h1 style={{ fontWeight: "500", fontSize: "2em", color: "white", position: "relative", left: "20%" }}>About</h1>
                </div>
                <div style={{ width: screen.mobile ? "100%" : "75%", marginTop: screen.mobile ? 0 : "14%", display: "flex", justifyContent: "center" }}>
                    <div style={{ fontSize: screen.mobile ? "0.9em" : "1.58em", fontWeight: "400", color: "white", lineHeight: "2.1", color: "#808080", width: "80%" }}>
                        We elevate  <span style={{
                            backgroundImage: 'url(https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640528a303087c65a9603d30_underline-green.svg)',
                            backgroundPosition: "50% 100%",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "contain", color: "white", paddingBottom: "15px"
                        }}>phenomenal</span>  solutions for growth by translating their future potential into a strategic brand narrative and authentic digital presence.
                    </div>
                </div>
            </div>
            <div ref={container} style={{ paddingBottom: "20vh", flexDirection: screen.mobile ? "column" : "row", height: screen.mobile ? "200vh" : "100vh", display: "flex", marginTop: "14%", overflow: "hidden", paddingTop: "50px" }}>
                <div ref={leftContainer} style={{
                    willChange: "transform", marginTop: screen.mobile ? "10vh" : 0,
                    width: screen.mobile ? "100vw" : "calc(69% / 2)", position: "relative", transformStyle: "preserve-3d",
                    transform: "translate3d(-100%, 0px, 0px) rotateZ(-15deg)",
                    height: screen.mobile ? "60vh" : "auto",
                }}>
                    <img alt="#" style={{
                        borderRadius: screen.mobile ? "40px" : "60px",
                        objectFit: "cover",
                        height: screen.mobile ? "14em" : "80vh",
                        width: screen.mobile ? "10em" : "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        right: screen.mobile ? "auto" : "15px",
                        top: screen.mobile ? "5px" : "7px",
                        left: screen.mobile ? "calc(50% - (10em / 2 ))" : "auto"
                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1e9294c46d4ca88d0fc3_card1-p-800.jpg"} />
                    <img alt="#" style={{
                        willChange: "transform",
                        borderRadius: screen.mobile ? "40px" : "60px",
                        objectFit: "cover",
                        height: screen.mobile ? "14em" : "80vh",
                        width: screen.mobile ? "10em" : "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        left: screen.mobile ? "calc((50% - (10em / 2)) + (10em * 0.25))" : "-35px",
                        transform: 'translate3d(50%, 0px, 0px) rotateZ(15deg)',
                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d0ee5569e00035865a5_sc3-p-800.jpg"} />
                </div>
                <div style={{ width: screen.mobile ? "100%" : "31%", color: "white", textAlign: "center", display: "flex", alignItems: "center", flexDirection: "column", marginTop: "3%" }}>
                    <h1 style={{ width: "80%", textAlign: "center", fontWeight: "500", fontSize: screen.tablet ? "2em" : screen.mobile ? "3em" : "3em", color: "#d9d9d9" }}>
                        We’re
                        Shaping
                        Industry
                    </h1>
                    <h2 style={{ position: "relative",  height: "200px", width: "200px", display: "flex", justifyContent: "center", alignItems: "center", marginTop: "9%" }}>
                        <img className="logo" style={{ width: screen.mobile ? "90vw": screen.tablet ? "100%":"200%" }}
                            src="https://cdn.discordapp.com/attachments/1073737355896299542/1110855539329597481/logo_blanc_hor.png" />
                    </h2>
                </div>
                <div ref={rightContainer} style={{
                    willChange: "transform",
                    width: "calc(69% / 2)",
                    position: "relative", transformStyle: "preserve-3d",
                    position: "relative",
                    marginTop: screen.mobile ? "10vh" : 0,
                    transform: "ranslate3d(299.1%, 0px, 0px) rotateZ(15deg)"
                }}>
                    <img alt="#" style={{
                        borderRadius: screen.mobile ? "40px" : "60px",
                        objectFit: "cover",
                        height: screen.mobile ? "14em" : "80vh",
                        width: screen.mobile ? "10em" : "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        left: screen.mobile ? "auto" : "15px",
                        top: "7px",

                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/642071c9b4f0d2f23c0d0fd3_stewart-maclean-Zs1WKNa4Oy0-unsplash-p-800.jpg"} />
                    <img alt="#" style={{
                        willChange: "transform",
                        borderRadius: screen.mobile ? "40px" : "60px",
                        objectFit: "cover",
                        height: screen.mobile ? "14em" : "80vh",
                        width: screen.mobile ? "10em" : "15em",
                        position: "absolute",
                        maxHeight: "22.5em",
                        right: screen.mobile ? "calc((50% - (10em / 2)) + (10em * 0.25))" : "-35px",
                        transform: "translate3d(300%, 0px, 0px) rotateZ(15deg)"
                    }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1e9cc0fb34d5e7819b2f_card2-p-800.jpg"} />
                </div>
            </div>
        </div >
    )
}
