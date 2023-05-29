import { useRef, useEffect } from 'react'
import About from './about'
import Cards from './cards'
import Catalogue from './catalogue'
import MediaBand from './media-band'
import Services from './services'
import Wow from './wow'

export default function BlackSection({ screen, scroll, menuClicked }) {
    const container = useRef(null)
    useEffect(() => {
        const veil = document.getElementsByClassName('veil')[0]
        if (scroll >= container.current.offsetTop - innerHeight * 0.5 && veil.style.opacity == 0) {
            veil.style.opacity
            veil.style.opacity = 1

            document.getElementsByClassName('header_lines_btn')[0].style.background = "white"
            document.getElementsByClassName('header_lines_btn')[1].style.background = "white"
            document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(312deg,#73ffa2, transparent 80%)'
            document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855539631595521/logo_blanc_ver.png'
        } else if (scroll <= container.current.offsetTop - innerHeight * 0.5 && veil.style.opacity == 1) {
            veil.style.opacity = 0
            document.getElementsByClassName('header_lines_btn')[0].style.background = "black"
            document.getElementsByClassName('header_lines_btn')[1].style.background = "black"
            document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(to bottom right, transparent, #3398ff 80%)'
            document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png'
        }

    }, [scroll])


    useEffect(() => {
        const start = container.current.offsetTop - innerHeight
        const end = container.current.offsetTop + container.current.clientHeight - innerHeight
        const containerBg = container.current.style.background;
        const startIndex = containerBg.lastIndexOf(',') + 1;
        const endIndex = containerBg.lastIndexOf(')');
        const numberString = containerBg.substring(startIndex, endIndex);
        const number = parseFloat(numberString);

        if (scroll >= start && scroll <= end) {
            if (document.getElementsByClassName('header_lines_btn')[0].style.background === "white" && menuClicked) {
                document.getElementsByClassName('header_lines_btn')[0].style.background = "black"
                document.getElementsByClassName('header_lines_btn')[1].style.background = "black"
                document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(to bottom right, transparent, #3398ff 80%)'
                document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855540231381052/logo_noir_ver.png'

            } else if (containerBg === 'rgb(0, 0, 0)' || number >= 0.6) {

                setTimeout(() => {
                    document.getElementsByClassName('header_lines_btn')[1].style.background = "white"
                    document.getElementsByClassName('header_lines_btn')[0].style.background = "white"
                    document.getElementsByClassName('quote')[0].style.backgroundImage = 'linear-gradient(312deg,#73ffa2, transparent 80%)'
                    document.getElementsByClassName('logo')[0].src = 'https://cdn.discordapp.com/attachments/1073737355896299542/1110855539631595521/logo_blanc_ver.png'
                }, 500);
            }

        }
    }, [menuClicked])
    return (
        <div ref={container} style={{
            width: "100vw",
            background: "rgba(0, 0, 0, 1)",
            borderRadius: screen.mobile ? "50px":"150px", 
            zIndex: 50,
            paddingBottom: screen.mobile ? "50vh" : 0
        }}>
            <About screen={screen} scroll={scroll} container={container} />
            <Catalogue screen={screen} scroll={scroll} />
            <MediaBand screen={screen} scroll={scroll} />
            <Wow screen={screen} scroll={scroll} />
            <Services screen={screen} scroll={scroll} />
            <Cards screen={screen} containerRef={container.current} scroll={scroll} />
        </div>
    )
}










