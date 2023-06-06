import React, { useEffect, useRef, useState } from "react";
import styles from "./sections.module.css";
import bullet from "../../assets/bullet.svg";
import Image from "next/image";

const ThirdSection = () => {
  const [leftclicked, setclicked] = useState(true);
  const sectionRef = useRef(null);

  return (
    <div
      className={styles.thirdsec}
      style={{ position: "relative" }}
      ref={sectionRef}
    >
      <h2>
        We’ve built an agency that champions ideas not egos, a process that
        rewards brave clients, to create work that doesn’t conform to
        convention.
      </h2>

      <h2>
        We will challenge you, we will change you, and you just might change the
        world.
      </h2>
      <h2 style={{ background: "#fff", padding: 10 }}>
        We help startups create emotional brands that not only get their
        audience to buy—but <span>“buy-in”.</span>{" "}
      </h2>

      <div
        className={styles.boxchoice}
        style={
          leftclicked
            ? {
                transition: "all 1px ease",
                background: "linear-gradient(to left, #0000 50%, #000 50%)",
                color: "#fff",
                border: "1px solid #000",
              }
            : {
                transition: "all 1px ease",
                background: "linear-gradient(to right, #0000 50%, #000 50%)",
                color: "#fff",
                border: "1px solid #000",
              }
        }
      >
        <h1
          style={leftclicked ? { color: "#fff" } : { color: "#000" }}
          onClick={(e) => setclicked(true)}
        >
          What we DO
        </h1>
        <h1
          style={leftclicked ? { color: "#000" } : { color: "#fff" }}
          onClick={(e) => setclicked(false)}
        >
          What we DON'T
        </h1>
      </div>
      <div
        className={styles.whatwedo}
        style={
          leftclicked
            ? {
                visibility: "visible",
                transition: "visibility 0s linear 300ms",
              }
            : {
                visibility: "hidden",
                display: "none",
                transition: "visibility 0s linear 300ms",
              }
        }
      >
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Brand Strategy</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Brand identity</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Marketing</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Outsourcing services</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Logistics plateform</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Production management</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Rebranding</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Web Design</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Packaging Design</p>
        </div>
      </div>
      <div
        className={styles.whatwedo}
        style={
          !leftclicked
            ? {
                gap: "40px",
                visibility: "visible",
                opacity: 1,
                transition: "visibility 0s linear 300ms",
              }
            : {
                visibility: "hidden",
                opacity: 0,
                display: "none",
                transition: "visibility 0s linear 300ms",
              }
        }
      >
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>“good enough”</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Be “Realistic”</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Superficial</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Follow the rules</p>
        </div>

        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Settle</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Lose</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Play it “Safe”</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Dez Takhtef</p>
        </div>
        <div className={styles.choice}>
          <Image src={bullet} alt="+"></Image> <p>Sameness</p>
        </div>
      </div>
    </div>
  );
};
export default ThirdSection;
