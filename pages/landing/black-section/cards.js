import React, { useEffect, useRef, useState } from 'react'

export default function Cards({ screen, scroll, containerRef }) {
    const container = useRef(null);
    const timer = useRef(false)
    const clicked = useRef(-1)
    const [cardsDimension, setCardsDimension] = useState(0)
    const styles = {
        cards: {
            position: "sticky", top: "calc(50vh)", marginTop: "15em",
            height: "16em", width: `${cardsDimension}px`, height: `${cardsDimension}px`,
        }
    }
    const scrollTrigger = (ref, f, values, startCondition, endCondition, Start, End) => {
        const start = Start || ref.current.offsetTop - (innerHeight - (cardsDimension + (cardsDimension * 0.5)))
        let end = End || start + ref.current.clientHeight - innerHeight;
        if (screen.mobile) {
            end = start + ref.current.clientHeight
        }
        if ((scroll <= end && start <= scroll) || (scroll > end && endCondition) || (scroll < start && startCondition)) {
            let percentages = []
            for (let i = 0; values.length > i; i++) {
                if (!i) {
                }
                percentages.push((((scroll - start) / (end - start)) * ((values[i][1]) - (values[i][0]))) + (values[i][0]))
            }
            f(percentages, ref.current)
        }
    }
    const cardsMovements = [
        [[-7, -62], [-48, -33], [-60, -47]],
        [[-6, -41], [-47, -36], [-45, -34]],
        [[-4, -7], [-46, -35], [-30, -25]],
        [[-4, 17], [-47, -36], [-15, -14]],
        [[-7, 26], [-50, -44], [0, 9]]
    ]
    useEffect(() => { setCardsDimension(screen.mobile ? innerWidth * 0.4 : innerWidth * 0.28) }, [screen])
    useEffect(() => {

        cardsMovements.forEach((e, i) => {
            scrollTrigger(container, (v, ref) => {
                ref.children[i].style.zIndex = i + 1

                if (ref.children[i].children[0].style.transition && !timer.current) {
                    timer.current = true;
                    clicked.current = -1
                    setTimeout(() => {
                        if (clicked.current) {
                            timer.current = false
                            ref.children[i].children[0].style.transition = '';
                        }
                    }, 1000);
                };
                ref.children[i].children[0].style.transform = `translate3d(${v[0]}%, ${v[1]}%, 0px) rotateZ(${v[2]}deg)`
            }, e);
        });






        if (containerRef) {
            scrollTrigger(container, (v) => {
                containerRef.style.background = `rgba(0, 0, 0, ${v[0]})`
                if (v[0] < 0.6 && document.getElementsByClassName('header_lines_btn')[0].style.background === "white") {
                    document.getElementsByClassName('header_lines_btn')[0].style.background = "black"
                    document.getElementsByClassName('header_lines_btn')[1].style.background = "black"
                    document.getElementsByClassName('quote')[0].style.background = 'linear-gradient(to bottom right, transparent, #3398ff 80%)'
                    document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png'
                } else if (v[0] >= 0.6 && document.getElementsByClassName('header_lines_btn')[0].style.background === "black") {
                    document.getElementsByClassName('header_lines_btn')[0].style.background = "white"
                    document.getElementsByClassName('header_lines_btn')[1].style.background = "white"
                    document.getElementsByClassName('quote')[0].style.background = 'linear-gradient(312deg,#73ffa2, transparent 80%)'
                    document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855539631595521/logo_blanc_ver.png'
                }
            }, [[1, 0]], containerRef.style.background !== "rgb(0, 0, 0)", containerRef.style.background !== "rgba(0, 0, 0, 0)")
        }
        return () => {
            clearTimeout(timer);
        };
    }, [scroll])

    function handleClick(index) {
        for (let i = 0; i < 5; i++) {
            const transform = container.current.children[i].children[0].style.transform
            const left = transform.slice(transform.indexOf('(') + 1, transform.indexOf(',') - 1);
            const top = transform.slice(transform.indexOf(',') + 1, transform.indexOf(')') - 6);

            if (i === index && clicked.current === -1) {
                clicked.current = i + 1
                container.current.children[i].children[0].style.transition = "0.5s"
                container.current.children[i].children[0].style.transform = `translate3d(${left - 20}%,${top - 30}%, 0px)${' rotateZ(0.85deg)'}`;
                container.current.children[i].style.zIndex = 6
            } else if (i === index && i === clicked.current - 1) {
                scrollTrigger(container, (v, ref) => {
                    if (ref.children[i].children[0].style.transition && !timer.current) {
                        ref.children[i].style.zIndex = i
                        clicked.current = -1
                    }
                    ref.children[i].children[0].style.transform = `translate3d(${v[0]}%, ${v[1]}%, 0px) rotateZ(${v[2]}deg)`
                }, cardsMovements[i]);
            } else if (i === index && i !== clicked.current - 1 && clicked.current !== -1) {
                scrollTrigger(container, (v, ref) => {
                    if (ref.children[clicked.current - 1].children[0].style.transition && !timer.current) {
                        ref.children[clicked.current - 1].style.zIndex = clicked.current - 1
                    }
                    ref.children[clicked.current - 1].children[0].style.transform = `translate3d(${v[0]}%, ${v[1]}%, 0px) rotateZ(${v[2]}deg)`
                }, cardsMovements[clicked.current - 1]);

                // clicked.current = i + 1
                clicked.current = - 1
                // container.current.children[i].children[0].style.transition = "0.5s"
                // container.current.children[i].children[0].style.transform = `translate3d(${left - 20}%,${top - 30}%, 0px)${' rotateZ(0.85deg)'}`;
                // container.current.children[i].style.zIndex = 6
            }
        }
    }
    return (
        <div ref={container} style={{ width: "100%", height: screen.mobile ? '100vh' : '200vh', display: "flex", justifyContent: "center", position: "relative" }}>
            <div style={{ zIndex: 0, pointerEvents: "none", position: "absolute", height: "100%", transform: `translate(-50% , calc(-${cardsDimension}px * (0.12 * 1.5  )))`, left: `calc(50% + ((${cardsDimension}px * 0.49) - (${cardsDimension}px * 0.153) * 4.5))` }}>
                <img alt='#' onClick={() => {
                    handleClick(0)
                }} style={{
                    ...styles.cards, pointerEvents: "auto", objectFit: "cover", borderRadius: screen.mobile ? "1em" : "1.8em",
                    transform: "translate3d(-7%, -48%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-60deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d744379a3bfb50eb8f0_sc5-p-800.jpg" />
            </div>
            <div style={{ zIndex: 1, pointerEvents: "none", position: "absolute", height: "100%", transform: `translate(-50% , calc(-${cardsDimension}px * (0.12 * 1.5  )))`, left: `calc(50% + ((${cardsDimension}px * 0.49) - (${cardsDimension}px * 0.153) * 3.1))` }}>
                <img alt='#' onClick={() => {
                    handleClick(1)
                }} style={{
                    ...styles.cards, pointerEvents: "auto", objectFit: "cover", borderRadius: screen.mobile ? "1em" : "1.8em",
                    transform: "translate3d(-6%, -47%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-45deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d7c4481e4143bf2c422_sc6-p-800.jpg" />
            </div>
            <div style={{ zIndex: 2, pointerEvents: "none", position: "absolute", height: "100%", transform: `translate(-50% , calc(-${cardsDimension}px * (0.12 * 1.5  )))`, left: `calc(50% + ((${cardsDimension}px * 0.49) - (${cardsDimension}px * 0.153) * 2.08))` }}>
                <img alt='#' onClick={(e) => {
                    handleClick(2)
                }} style={{
                    ...styles.cards, pointerEvents: "auto", objectFit: "cover", borderRadius: screen.mobile ? "1em" : "1.8em",
                    transform: "translate3d(-4%, -46%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-30deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/642071c9b4f0d2f23c0d0fd3_stewart-maclean-Zs1WKNa4Oy0-unsplash.jpg" />
            </div>
            <div style={{ zIndex: 3, pointerEvents: "none", position: "absolute", height: "100%", transform: `translate(-50% , calc(-${cardsDimension}px * 0.12))`, left: `calc(50% + ((${cardsDimension}px * 0.49) - ${cardsDimension}px * 0.153))` }}>
                <img alt='#' onClick={() => {
                    handleClick(3)
                }} style={{
                    ...styles.cards, pointerEvents: "auto", objectFit: "cover", borderRadius: screen.mobile ? "1em" : "1.8em",
                    transform: "translate3d(-5%, -47%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(-15deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1db490971b1346e686fc_sc8-p-800.jpg" />
            </div>
            <div style={{ zIndex: 4, pointerEvents: "none", position: "absolute", height: "100%", transform: "translate(-50%)", left: `calc(50% + (${cardsDimension}px * 0.49))` }}>
                <img alt='#' onClick={() => {
                    handleClick(4)
                }} style={{
                    ...styles.cards, pointerEvents: "auto", objectFit: "cover", borderRadius: screen.mobile ? "1em" : "1.8em",
                    transform: "translate3d(-7%, -50%, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)"
                }} src="https://uploads-ssl.webflow.com/63ffb1d8365f630bd05a80b9/640b1d01ba675235f7da86e3_main.jpg" />
            </div>


        </div>
    )
}
