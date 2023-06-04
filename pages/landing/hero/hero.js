import { useRef, useEffect, useState } from 'react'
import data from "@/data/landing/projects"
import words from "@/data/landing/hero"

export default function Hero({ scroll }) {
    const hero = useRef(null);
    const animatedWords = useRef(null);
    const veilNoise = useRef(null);
    let counter = 0
    let rebelot;


    useEffect(() => {
        if (hero.current.offsetTop + (hero.current.clientHeight * 0.4) >= scroll && document.querySelector('html').style.background !== "rgba(241, 223, 213, 0.5)") {

            document.querySelector('html').style.background = "rgba(241, 223, 213, 0.5)";
            veilNoise.current.style.opacity = 1
            document.getElementsByClassName("primary-cursor")[0].style.background = "linear-gradient(to bottom right, transparent, #3398ff 80%)"

        } else if (hero.current.offsetTop + (hero.current.clientHeight * 0.4) < scroll && hero.current.offsetTop + (hero.current.clientHeight * 0.5) >= scroll && document.querySelector('html').style.background !== data[0].background) {
            document.querySelector('html').style.background = data[0].background;

            veilNoise.current.style.opacity = 0
            document.getElementsByClassName("primary-cursor")[0].style.background = data[0].color
        }
    }, [scroll])
    return (
        <div ref={hero} style={{ width: "90vw", marginLeft: "5vw", height: "90vh", background: "transparent", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <div className='veilNoise' ref={veilNoise} style={{
                background: "url(https://uploads-ssl.webflow.com/62e3ee10882dc50bcae8d07a/631a5d4631d4c55a475f3e34_noise-50.png)",
                width: "100vw",
                height: "100vh",
                position: "fixed",
                top: "0",
                transition: "opacity 1s",
                pointerEvents: "none"
            }}
            />

            <div class="box">
                <span></span>
                <span></span>
                <span></span>
            </div>

            <div style={{ fontWeight: "600", fontSize: "2.5em", maxWidth: "900px", textAlign: "center", lineHeight: "1.2", marginTop: "20vh" }} >
                A branding agency with a twist
            </div>
            <div style={{
                fontSize: "0.6em",
                height: "4em",
                position: "relative",
                overflow: "hidden",
                maxWidth: "800px",

            }}>
                <div onAnimationIteration={(event) => {
                    if (counter === 0 && rebelot) {
                        event.target.children[0].textContent = words[0]
                        event.target.children[1].textContent = words[1]
                        rebelot = false
                    }
                    else if (counter + 1 >= words.length - 1) {
                        counter = 0
                        event.target.children[0].textContent = words[words.length - 1]
                        event.target.children[1].textContent = words[0]
                        rebelot = true

                    } else {
                        counter++
                        event.target.children[0].textContent = words[counter]
                        event.target.children[1].textContent = words[counter + 1]
                    };


                }} ref={animatedWords} style={{
                    position: "relative",
                    top: "25%",
                    textAlign: "center", height: "200%", animation: "translateYAnimation 5s infinite",

                }}>
                    <div style={{ height: "50%", fontWeight: "300" }}>{words[counter]}</div>
                    <div style={{ height: "50%", fontWeight: "300" }}>{words[counter + 1]}</div>
                </div>
            </div>
            <style>{`
            @keyframes translateYAnimation {
                0% {
                  transform: translateY(0);
                }
                50% {
                  transform: translateY(-50%);
                }
                100% {
                    transform: translateY(-50%);
                  }
              }


            .box{
               margin-top:-20%;
               position: absolute
            }
            
            .box span{
                display: block;
                width: 20px;
                height: 20px;
                border-bottom: 2px solid black;
                border-right: 2px solid black;
                transform: rotate(45deg);
                margin: -10px;
                animation: animate 20s infinite;
            }
            
            .box span:nth-child(2)
            {
                animation-delay: -0.2s;
            }
            
            .box span:nth-child(3)
            {
                animation-delay: -0.4s;
            }
            
            @keyframes animate{
                
                0%{
                    opacity: 0;
                    transform: rotate(45deg) translate(-20px, -20px);
                } 
                5%{
                    opacity: 0.2;
                }
                10%{
                    opacity: 0;
                    transform: rotate(45deg) translate(20px, 20px);
                }  
                100%{
                    opacity: 0;
                    transform: rotate(45deg) translate(20px, 20px);
                }
            }
            `}</style>
        </div>
    )
}

