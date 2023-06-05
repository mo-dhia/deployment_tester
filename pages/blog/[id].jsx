import React, { useEffect, useRef, useState } from "react";
import style from "../blogs/blogs.module.css";
import Header from "../landing/layout/header/header";
import wave from "../../assets/circ.png";
import { useRouter } from "next/router";
import axios from "axios";
import wave2 from "../../assets/circ2.png";
import Footer from "../landing/layout/footer/footer";
import main from "../../assets/1.png";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import Image from "next/image";
const index = ({ title, picUrl, description }) => {
  const ref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ref.current,
        start: "top top",
        end: "end end",
        scrub: true,
      },
    });

    timeline.fromTo("." + style.blogs, { y: 0 }, { y: -200 });

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

      refce.current?.style &&
        (refce.current.style.transform =
          "rotateX(" +
          -degY +
          "deg) rotateY(" +
          degX +
          "deg) translateZ(-100px)");
    });
    return () => {
      timeline.kill();
      document.removeEventListener("mousemove", function () {
        mouse.x = event.clientX;
        mouse.y = event.clientY;

        posX =
          ((mouse.x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
        posY =
          ((mouse.y - window.innerHeight / 2) / (window.innerHeight / 2)) * 100;

        degX = posX / sensibility;
        degY = posY / sensibility;

        refce.current.style &&
          (refce.current.style.transform =
            "rotateX(" +
            -degY +
            "deg) rotateY(" +
            degX +
            "deg) translateZ(-100px)");
      });
    };
  });
  useEffect(() => {
    fetchBlogs();
  }, []);
  const refce = useRef(null);
  const router = useRouter();
  const { query } = router;
  const [blog, setblog] = useState({});
  async function fetchBlogs() {
    try {
      const response = await axios.get("http://localhost:3000/api/blogs");
      response.data.forEach((blog) => {
        if (blog.id == id) {
          setblog(blog.data);
        }
      });
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    console.log(blog);
  }, [blog]);
  // Access the query parameters
  const { id } = query;
  return (
    <>
      <Header></Header>

      <div className={`${style.blogs} ${style.aaa}`} ref={ref}>
        <main
          className={style.main}
          style={{
            boxShadow:
              " 0px 1px 0px rgba(17,17,26,0.1), 0px 8px 24px rgba(17,17,26,0.1), 0px 16px 48px rgba(17,17,26,0.1)",
            background: "#fff",
            color: "#000",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          ref={refce}
        >
          <a href="/blogs">
            {" "}
            <p style={{ color: "#aaa8" }}>blogs/</p>
          </a>
          <h1> {blog.title}</h1>
        </main>

        <article
          className={style.mainimage}
          style={{
            width: "90vw",
            height: "80vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            marginTop: 80,
            position: "relative",
          }}
        >
          <img
            src={blog.image}
            style={{
              objectFit: "cover",
              width: "80%",
              borderRadius: "3rem",
              height: "auto",
            }}
          ></img>
          <Image
            className={style.wava}
            src={wave2}
            style={{ position: "absolute", bottom: 0, width: "80%" }}
          ></Image>
        </article>
        <p style={{ width: "85%", display: "flex", justifyContent: "end" }}>
          published : {blog.created_at && blog.created_at.slice(0, 10)}
        </p>

        <div
          className="details"
          style={{ marginTop: 80, display: "flex", justifyContent: "center" }}
        >
          <p style={{ width: "75%" }}>{blog.description}</p>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default index;
