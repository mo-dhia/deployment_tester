import { useEffect, useRef } from 'react'

export default function Wow({ scroll, screen }) {
    const container = useRef(null)
    const scrollTrigger = (ref, f, values, Start, End) => {
        let start = container.current.offsetTop - innerHeight
        let end = start + container.current.clientHeight

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

        scrollTrigger(container, (v, ref) => {
            ref.style.transform = `scale3d(${v[0]}, ${v[0]}, 1)`
        }, [[0.2, screen === "mobile" ? 1.2 : 1]])

    }, [scroll])

    return (
        <div style={{ width: "100%", height: screen === "mobile" ? "50vh" : "100vh", display: "flex", justifyContent: "center", marginTop: screen === "mobile" ? "30vh" : 0 }}>
            <div ref={container} style={{ width: "80%", height: "100%", display: "flex", flexDirection: "column", alignItems: "center", transform: "scale3d(0.2, 0.2, 1)" }}>
                <img alt="#" style={{ objectFit: "cover", width: "22vw", height: "22vw", background: "green", borderRadius: "100%" }}
                    src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b2d50f321ab8607ee1953_wow-p-500.jpg" />
                <h1 style={{
                    color: "white", fontWeight: "500", fontSize: "7.5vw",
                }}><span style={{
                    backgroundImage: 'url(https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640528a303087c65a9603d30_underline-green.svg)',
                    backgroundPosition: "50% 100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain"
                }}>Wow</span> Your Audience</h1>
            </div>
        </div>
    )
}
