import React, { useEffect, useRef, useState } from "react";
import style from "./sections.module.css";
import Image from "next/image";
import brain from "../../assets/brain.svg";
import paper from "../../assets/paper.svg";
import puzzle from "../../assets/puzzle.svg";
import eye from "../../assets/eye.png";
import box from "../../assets/box.svg";
import third from "../../assets/third.svg";
import sec from "../../assets/sec.svg";
import first from "../../assets/first.svg";
import e from "../../assets/e.png";

import banner from "../../assets/banner5i.png"
import marketing from "../../assets/marketing.png"
import { gsap } from 'gsap'
import img from "../../assets/web.png"
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
 const FourthSection = () => {
const [pack,setpack]=useState({first:true,sec:false,last:false})
const sectionRef = useRef(null);
const [scroll,setscroll]=useState(undefined)
const [click,setclick]=useState({first:false,sec:false,third:false,frth:false})
const packs = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth > 750) {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "end end",
          scrub: true,
        },
      });

      timeline
        .fromTo(
          ".psycho",
          {
            bottom: -500,
            scale: 1.6,
            duration: 0.05,
            opacity: 0,
            ease: "none",
          },
          {
            top: 250,
            scale: 1.6,
            duration: 0.05,
            opacity: 0.2,
            ease: "none",
            rotate: 18,
          },
          "-=.1"
        )
        .fromTo(
          `.first`,
          { x: 200, transition: "all ease 1s", delay: 1 },
          { x: 0 }
        )
        .fromTo(
          ".sec .textheader2",
          { paddingBottom: 100 },
          { paddingBottom: 0 }
        )
        .fromTo(
          `.third`,
          { x: -200, transition: "all ease 1s", delay: 1 },
          { x: 0 }
        )
        .fromTo(
          ".images",
          { y: -1000, opacity: 0 },
          { y: 0, paddingTop: "10px", opacity: 1, transition: "all ease 1s" }
        )
        .fromTo(
          ".textheader2",
          { fontSize: "40px", transition: "all ease .2s", textAlign: "center" },
          { fontSize: "20px" }
        );
    } else {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top -30%",
          end: "end end",
          scrub: true,
        },
      });
      timeline
        .fromTo(
          ".psycho",
          {
            bottom: -500,
            right: -100,
            scale: 1.6,
            duration: 0.05,
            opacity: 0,
            ease: "none",
          },
          { top: 250, scale: 1.6, duration: 0.05, opacity: 0.2, ease: "none" },
          "-=.1"
        )
        .fromTo(
          `.first`,
          { x: 2000, transition: "all ease 1s", delay: 2 },
          { x: 0, delay: 1, transition: "all ease 1s" }
        )
        .fromTo(
          `.third`,
          { x: -2000, transition: "all ease 1s", delay: 1 },
          { x: 0 }
        )
        .fromTo(
          ".sec",
          { y: 1000, opacity: 0 },
          { y: 0, paddingTop: "10px", opacity: 1, transition: "all ease 1s" }
        );
    }

    let mouse = {
      x: undefined,
      y: undefined,
    };
    let posX;
    let posY;
    let degX;
    let degY;
    let sensibility = 10;

    document.addEventListener("mousemove", function () {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      posX =
        ((mouse.x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
      posY =
        ((mouse.y - window.innerHeight / 2) / (window.innerHeight / 2)) * 100;

      degX = posX / sensibility;
      degY = posY / sensibility;

      packs.current.style &&
        (packs.current.style.transform =
          "rotateX(" +
          -degY +
          "deg) rotateY(" +
          degX +
          "deg) translateZ(-100px)");
    });

    return () => {
      timeline.kill();
      document.removeEventListener("mousemove");
    };
  }, []);
  return (
    <div className={style.fourth} ref={sectionRef}>
      <Image
        className="psycho"
        src={banner}
        alt="psycho"
        style={{
          position: "absolute",
          right: -650,
          opacity: 0.2,
          transition: "all 1s linear",
        }}
      ></Image>
      <div className={style.pack_container}>
        <div className={style.text_animated}>
          <h1 className="text">
            <span>PACKS WE PROVIDE</span>
            <span>*</span>
            <span>PACKS WE PROVIDE</span>
            <span>*</span>
            <span>PACKS WE PROVIDE</span>
            <span>*</span>
            <span>PACKS WE PROVIDE</span>
            <span>*</span>
            <span>PACKS WE PROVIDE</span>
            <span>*</span>
          </h1>
          <h1>
            <span>CHOOSE THE ONE THAT SUITS YOU</span>
            <span>*</span>
            <span>CHOOSE THE ONE THAT SUITS YOU</span>
            <span>*</span>
            <span>CHOOSE THE ONE THAT SUITS YOU</span>
            <span>*</span>
            <span>CHOOSE THE ONE THAT SUITS YOU</span>
            <span>*</span>
          </h1>
        </div>
        <p style={{ fontSize: "40px", width: "100%", textAlign: "center " }}>
          We elevate phenomenal solutions for growth by translating their future
          potential into a strategic brand narrative
        </p>
        <div className={style.pack} ref={packs}>
          <div className="first" style={{}}>
            <div className={style.border}>
              <div className={style.first}>
                <div
                  className="images"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image className={style.image} src={sec} alt="sec"></Image>
                  <Image className={style.invert} src={brain}></Image>
                </div>
                <p
                  style={{
                    color: "#fff",
                    padding: 0,
                    margin: 0,
                    fontSize: "25px",
                    marginTop: "10px",
                  }}
                  className="textheader2"
                >
                  KICKSTART YOUR BRAND
                </p>
                <button className={style.interested}>
                  <a href="/contact" style={{ textDecoration: "none" }}>
                    Book an appointment
                  </a>
                </button>
                <div className={style.texts}>
                  {"Etude de faisabilité.Développement de la marque (brand development).Etude de collection (fahsion teckpack).Etude de lancement .Prototypage.Production .Mise en place d’une plateforme logistique .Etablissement des canaux de distribution (E-commerce website, dépôt vente, point de vente).Marketing et communication.Shooting .Organisation d’événement de lancement"
                    .split(".")
                    .map((e) => (
                      <p style={{ padding: 15, paddingLeft: 20 }}>{e}</p>
                    ))}
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className="sec" style={{ zIndex: 10000 }}>
            <div className={`${style.border} ${style.acolor}`}>
              <div className={style.first}>
                <div
                  className="images"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    className={style.image}
                    src={third}
                    alt="third"
                  ></Image>
                  <Image
                    className={style.invert}
                    src={puzzle}
                    style={{ right: "25px" }}
                  ></Image>
                </div>

                <p
                  style={{
                    color: "#fff",
                    padding: 0,
                    margin: 0,
                    fontSize: "25px",
                    marginTop: "10px",
                  }}
                  className="textheader2"
                >
                  FOR EXISTING BRAND
                </p>
                <button className={style.interested}>
                  {" "}
                  <a href="/contact" style={{ textDecoration: "none" }}>
                    Book an appointment
                  </a>
                </button>
                <div className={style.texts}>
                  {"Rebranding .Accompagnement stratégique .Accompagnement technique .Fashion tech packs .Production management.Outsourcing services.Marketing .Shooting session.Packaging Design .Web Design .Event planning .Logistics plateform"
                    .split(".")
                    .map((e) => (
                      <p style={{ padding: 14, paddingLeft: 20 }}>{e}</p>
                    ))}
                  <p></p>
                </div>
              </div>
            </div>
          </div>
          <div className={`third ${style.third}`} style={{}}>
            <div className={`${style.border} ${style.bcolor}`}>
              <div className={style.first}>
                <div
                  className="images"
                  style={{ position: "relative", overflow: "hidden" }}
                >
                  <Image
                    className={style.image}
                    src={first}
                    alt="first"
                  ></Image>
                  <Image
                    className={style.invert}
                    style={{ right: "25px" }}
                    src={box}
                  ></Image>
                </div>
                <p
                  style={{
                    color: "#fff",
                    padding: 0,
                    margin: 0,
                    fontSize: "25px",
                    marginTop: "10px",
                  }}
                  className="textheader2"
                >
                  BUSINESS SOLUTIONS
                </p>
                <button className={style.interested}>
                  <a href="/contact" style={{ textDecoration: "none" }}>
                    Book an appointment
                  </a>
                </button>
                <div className={style.texts}>
                  <p style={{ padding: 14 }}>
                    If your business needs a customized product to meet your
                    requirements, we can offer you workwear that you need
                    (uniforms, safety gears, waistcoats, etc)
                  </p>
                  <p style={{ padding: 14 }}>
                    Wholesale sourcing : Habillement au service des revendeurs.
                    If you are a retailer having one or more stores, we can
                    provide custom products for your requirements
                  </p>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FourthSection
