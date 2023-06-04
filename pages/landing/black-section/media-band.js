import { useRef, useEffect } from 'react'

export default function MediaBand({ scroll, screen }) {
    const container = useRef(null);

    useEffect(() => {
        const start = container.current.offsetTop - window.innerHeight - (container.current.clientHeight / 2);
        let end = container.current.offsetTop + ((window.innerWidth / 2.9) * 3) - window.innerHeight
        if (screen === "mobile") {
            end = end + innerHeight
        }
        if (start <= scroll && end >= scroll) {
            const children = container.current.children
            const percentage = ((scroll - start) / (end - start)) * (children[0].clientWidth * 2);
            for (let i = 0; children.length > i; i++) {
                children[i].style.transform = `translateX(-${percentage}px)`
            }
        }

    }, [scroll])
    return (
        <div style={{ paddingBottom: "0%", paddingTop: "14%", overflow: "hidden", width: "100vw" }}>
            <div style={{
                color: "white", top: "0", width: "50%", flexDirection: "column", paddingBottom: screen === "mobile" ? "25px" : "100px",
                position: "relative", left: "5%"
            }}>
                <h1 style={{ fontWeight: "400", fontSize: screen === "mobile" ? "1.5em" : "2.02em", color: "gray", lineHeight: "1", textAlign: "left" }} >unlock your</h1>
                <h1 style={{ fontWeight: "400", fontSize: screen === "mobile" ? "1.5em" : "2.02em", textAlign: "left" }}>super power</h1>
            </div>
            <div ref={container} style={{ transform: "rotate(345deg)", width: "100%", height: screen === "mobile" ? "30vh" : "55vh", gap: screen === "mobile" ? "5vw" : "80px", display: "flex", whiteSpace: "nowrap" }}>
                <img alt="#" style={{ transition: "0.1s", objectFit: "cover", width: screen === "mobile" ? "20vh" : "40vh", height: "100%", borderRadius: screen === "mobile" ? "30px" : "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b201b4481e4c4ebf2e944_slide1-p-800.jpg"} />
                <img alt="#" style={{ transition: "0.1s", objectFit: "cover", width: screen === "mobile" ? "20vh" : "40vh", height: "100%", borderRadius: screen === "mobile" ? "30px" : "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d2e6bc211d52461d466_sc4.jpg"} />
                <img alt="#" style={{ transition: "0.1s", objectFit: "cover", width: screen === "mobile" ? "20vh" : "40vh", height: "100%", borderRadius: screen === "mobile" ? "30px" : "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1db490971b1346e686fc_sc8-p-800.jpg"} />
                <img alt="#" style={{ transition: "0.1s", objectFit: "cover", width: screen === "mobile" ? "20vh" : "40vh", height: "100%", borderRadius: screen === "mobile" ? "30px" : "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d7eec022d7db635105c_sc7-p-800.jpg"} />
                <img alt="#" style={{ transition: "0.1s", objectFit: "cover", width: screen === "mobile" ? "20vh" : "40vh", height: "100%", borderRadius: screen === "mobile" ? "30px" : "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1ea717d12b6f4c6bc028_card3-p-800.jpg"} />
                <img alt="#" style={{ transition: "0.1s", objectFit: "cover", width: screen === "mobile" ? "20vh" : "40vh", height: "100%", borderRadius: screen === "mobile" ? "30px" : "75px" }} src={"https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1ea717d12b6f4c6bc028_card3-p-800.jpg"} />
            </div>
            <div style={{ color: "white", top: "0", paddingTop: screen === "mobile" ? "25px" : "100px", position: "relative" }}>
                <h1 style={{ fontWeight: "400", fontSize: screen === "mobile" ? "1.5em" : "2.02em", color: "gray", lineHeight: "1", textAlign: "right", position: "relative", marginRight: "5%" }}>Amazing</h1>
                <h1 style={{ fontWeight: "400", fontSize: screen === "mobile" ? "1.5em" : "2.02em", textAlign: "right", position: "relative", marginRight: "5%" }}>& unique</h1>
            </div>

        </div>
    )
}
