import { useEffect, useRef } from 'react'

export default function How({ screen, scroll }) {
    const ref = useRef(null);
    const container = useRef(null);
    const innerContainer = useRef(null);
    const title = useRef(null);
    const blogs = useRef(null);
    useEffect(() => {
        let end = 0
        let counter = 0
        const boxes = ref.current.children
        for (let i = 0; boxes.length > i; i++) {
            let marginLeft = window.getComputedStyle(boxes[i]).getPropertyValue('margin-left');
            marginLeft = Number(marginLeft.slice(0, marginLeft.length - 2))
            counter += (boxes[i].offsetWidth + marginLeft)
        }

        container.current.style.height = `${counter + (window.innerHeight * 0.2)}px`
        //
    }, []);
    useEffect(() => {
        if (scroll >= container.current.offsetTop - (window.innerHeight * 0.2)) {

            const children = ref.current.children;

            if ((scroll) - (container.current.offsetTop - (window.innerHeight * 0.2)) <= container.current.clientHeight && (scroll) - (container.current.offsetTop) <= container.current.clientHeight - (window.innerHeight * 0.7)) {
                for (let i = 0; children.length > i; i++) {
                    children[i].style.transform = `translateX(calc(40vw - ${(scroll) - (container.current.offsetTop - (window.innerHeight * 0.2))}px))`
                }
            }
        }

    }, [scroll])

    const data = [1, 2, 3, 4,]
    return (
        <div ref={container} style={{
            marginTop: screen.mobile ? "-40vh" : "10%",
            marginBottom: "250px", position: "relative"
        }}>
            <div style={{
                display: "flex", flexDirection: "column",
                alignItems: "center", position: "sticky", top: "20%"
            }} ref={innerContainer}>
                <h1 ref={title} style={{ fontWeight: "500", paddingBottom: "100px", fontSize: "1.7rem" }}>How it works</h1>
                <div ref={blogs} style={{ width: "100%", display: "flex", flexWrap: "nowrap" }}>
                    <div ref={ref} style={{  height: "300px", flexWrap: "nowrap", display: "flex", overflow: "hidden", position: "relative", top: "50px" }}>
                        {data.map((e, i) => {
                            return <div key={i} style={{ marginLeft: i ? '50px' : 0, boxShadow: "0px 0px 15px 0px rgba(0,0,0,0.75", background: "#fff", boxShadow: "0 3px 30px 0 rgba(0,0,0,.02)", borderRadius: "40px", overflow: "hidden", display: "flex", justifyContent: "center", alignItems: "center", transition: "0.6s ease-out", transform: `translateX(calc(100vw / 2.5))`, height: screen.mobile ? "10em" : "6.5em", minWidth: screen.mobile ? "10em" : "calc(100vw / 5)", borderRadius: "40px" }} >
                                <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%" }}>
                                    <h4 style={{ width: "calc(100% - 90px)", fontSize: "0.7em", fontWeight: "500" }}>Send brief</h4>
                                    <p style={{ width: "calc(100% - 90px)", fontSize: screen.mobile ? "0.5em":"0.4em", marginTop: "15px", letterSpacing: ".15px", lineHeight: "1.64" }}>Send us a complete brief along with documents & requirements to estimate the project & get started</p>
                                </div>
                            </div>

                        })}
                    </div >
                </div >
            </div>
        </div >
    )
}
