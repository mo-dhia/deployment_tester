import React, { useEffect, useRef } from "react";
import style from "./sections.module.css";
import Image from "next/image";
import firsta from "../../assets/shape.svg";
import sec from "../../assets/3orsa.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const FirstSection = () => {
  const first = useRef(null);
  useEffect(() => {
    const timeline = gsap.timeline();
    timeline
      .from("." + style.firstleft + " h1", {
        duration: 0.5,
        delay: 0.3,
        scale: 0,
        stagger: {
          amount: 1.3,
        },
        ease: "Elastic.easeOut",
      })
      .from(
        "." + style.firstright + " h1",
        {
          duration: 0.5,
          delay: 0,
          scale: 0,
          stagger: {
            amount: 1.3,
          },
          ease: "Elastic.easeOut",
        },
        "-=.8"
      )
      .from("." + style.parag, { x: -1000 }, "-=1")
      .from("." + style.blurparent, { scale: 0 });
    gsap.registerPlugin(ScrollTrigger);

    const timelin1 = gsap.timeline({
      scrollTrigger: {
        trigger: first.current,
        start: "top top",
        end: () => innerHeight,
        scrub: true,
      },
    });

    timelin1.fromTo(
      "." + style.glass,
      { y: 0, transition: "all ease 1s", duration: 2 },
      { y: 200, transition: "all ease 1s", duration: 2 }
    );
  });
  return (
    <div className={style.FirstSection} ref={first}>
      <div className={style.firstleft}>
        <h1>Unleashing</h1>
        <h1>Creative</h1>
        <h1>Potential</h1>
      </div>
      <div className={style.firstright}>
        <div className={style.blurparent}>
          <div className={style.blur}></div>{" "}
        </div>
        <h1 style={{ zIndex: 2 }}>Building</h1>
        <h1 style={{ zIndex: 2 }}>Powerful</h1>
        <h1 style={{ zIndex: 2 }}>Brands</h1>
      </div>
      <div className={style.glass}></div>
      <div className={style.parag}>
        <Image
          className={style.oorssa}
          style={{
            width: "15%",
            height: "80%",
            objectFit: "contain",
            minHeight: "150px",
          }}
          src={sec}
        ></Image>
        <p>
          Delivering strategic branding and distinctive app development, we
          elevate businesses to their apex potential. With a meticulous emphasis
          on problem-solving, we foster growth and establish industry leadership
          for technology-forward organizations worldwide, including yours.
        </p>
      </div>
    </div>
  );
};

export default FirstSection;
