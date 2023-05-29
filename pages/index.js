
import Layout from "./landing/layout/layout"
import Sections from "./landing/projects/projects";
import How from "./landing/how/how";
import BlackSection from "./landing/black-section/BlackSection"

import { useState, useCallback, useEffect, useLayoutEffect } from "react"
import { CustomCursor } from "@/sharedComponents/customCursor";
import { mouseMove, mouseEnter, mouseLeave } from "../functions/mouse";
import Hero from "./landing/hero";


export default function Home() {
  const [screen, setScreen] = useState("mobile");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [color, setBackground] = useState(0);
  const [activeMouse, setActiveMouse] = useState(true);
  const background = ["#fae1ee", "#e0f0ff", "#ffede0", "#d3d6f0", "#ffeae0", "#f5f5f7"];
  const [menuClicked, setMenuClicked] = useState(false);

  const handleScroll = useCallback(() => { setScrollPosition(window.scrollY) }, []);
  const handleResize = useCallback((setScreen) => { setScreen(window.innerWidth < 764 ? "mobile" : window.innerWidth < 1112 ? "tablet" : "desktop") }, []);

  const handleMouseMove = useCallback(mouseMove, [])
  const handleMouseEnter = useCallback(mouseEnter, [])
  const handleMouseLeave = useCallback(mouseLeave, [])

  useLayoutEffect(() => {
    const innerContainerRef = document.querySelector('.footer-inner-container');
    const mainContainer = document.querySelector('.main-container');

    mainContainer.addEventListener("mousemove", handleMouseMove);

    innerContainerRef.addEventListener("mouseenter", handleMouseEnter);
    innerContainerRef.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      mainContainer.removeEventListener("mousemove", handleMouseMove);

      innerContainerRef.removeEventListener("mouseenter", handleMouseEnter);
      innerContainerRef.removeEventListener("mouseleave", handleMouseLeave);


    };
  }, [handleMouseMove, handleMouseLeave, handleMouseEnter]);

  useLayoutEffect(() => {
    handleResize(setScreen);
    window.addEventListener('resize', () => { handleResize(setScreen) });
    window.addEventListener('scroll', () => { handleScroll(setScrollPosition) });

    return () => {
      window.removeEventListener('resize', () => { handleResize(setScreen) });
      window.removeEventListener('scroll', () => { handleScroll(setScrollPosition) });
    };
  }, [screen]);
  return (
    <Layout isClicked={menuClicked} setIsClicked={setMenuClicked} scroll={scrollPosition} setActiveMouse={setActiveMouse} screen={screen}>
      <Hero />
      <CustomCursor activeMouse={activeMouse} />
      <Sections screen={screen} scroll={scrollPosition} color={color} setBackground={setBackground} />
      <BlackSection screen={{ tablet: screen === "tablet", mobile: screen === "mobile" }} menuClicked={menuClicked} scroll={scrollPosition} />
      <How screen={{ tablet: screen === "tablet", mobile: screen === "mobile" }} scroll={scrollPosition} />
    </Layout>
  )
}
