let scale = "0";
let header = false
let project = false

export const mouseMove = (event) => {

    const { clientX, clientY } = event;
    const mainContainer = document.querySelector('.main-container');
    if (scrollY + (window.innerHeight * 2) >= mainContainer.scrollHeight) {
        const containerRef = document.querySelector('.footer-container');
        const innerRef = document.querySelector('.footer-inner');
        const innerInnerRef = document.querySelector('.footer-inner-inner');

        const { clientWidth, clientHeight } = containerRef;
        const scrollY = window.scrollY;
        const x = (clientX - clientWidth / 2) * 2.5 * 0.7;
        const containerTop = containerRef.offsetTop;
        const yRelativeToContainer = clientY - containerTop + scrollY;
        const y = (yRelativeToContainer - clientHeight / 2) * 2.5 * 0.7;
        innerInnerRef.style.transform = `scale(${scale})`;
        innerRef.style.transform = `translate3d(${x}px, ${y}px, 0)`
    } else if (project) {
        const projectButton = document.querySelector('.project-button');
        const projectContainer = document.querySelector('.project-container');
        const { left, top } = projectContainer.getBoundingClientRect();

        const minTranslateX = -projectContainer.clientWidth / 15;
        const maxTranslateX = projectContainer.clientWidth / 15;
        const minTranslateY = -projectContainer.clientHeight / 15;
        const maxTranslateY = projectContainer.clientHeight / 15;

        let translateX = (clientX - left) - projectContainer.clientWidth / 2;
        let translateY = (clientY - ((window.innerHeight * (window.scrollY / window.innerHeight).toFixed()) + top)) - projectContainer.clientHeight / 2;

        if (translateX < minTranslateX) {
            translateX = minTranslateX;
        } else if (translateX > maxTranslateX) {
            translateX = maxTranslateX;
        }

        if (translateY < minTranslateY) {
            translateY = minTranslateY;
        } else if (translateY > maxTranslateY) {
            translateY = maxTranslateY;
        }

        projectButton.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    } else if (header) {
        const headerButton = document.querySelector('.header-button');
        const headerContainer = document.querySelector('.header-container');
        const { left, top } = headerContainer.getBoundingClientRect();

        const minTranslateX = -headerContainer.clientWidth / 15;
        const maxTranslateX = headerContainer.clientWidth / 15;
        const minTranslateY = -headerContainer.clientHeight / 15;
        const maxTranslateY = headerContainer.clientHeight / 15;

        let translateX = (clientX - left) - headerContainer.clientWidth / 2;
        let translateY = (clientY - (top)) - headerContainer.clientHeight / 2;

        if (translateX < minTranslateX) {
            translateX = minTranslateX;
        } else if (translateX > maxTranslateX) {
            translateX = maxTranslateX;
        }

        if (translateY < minTranslateY) {
            translateY = minTranslateY;
        } else if (translateY > maxTranslateY) {
            translateY = maxTranslateY;
        }

        headerButton.style.transform = `translate3d(${translateX}px, ${translateY}px, 0)`;
    }
    const primaryCursor = document.querySelector('.primary-cursor');

    if (scale === "0") {
        primaryCursor.style.transform = `translate3d(${clientX -
            primaryCursor.clientWidth / 2}px, ${clientY -
            primaryCursor.clientHeight / 2}px, 0)`;
        primaryCursor.style.visibility = "visible"
    } else if (scale !== "0" && primaryCursor.style.visibility !== "hidden") {
        primaryCursor.style.visibility = "hidden"
    }

}


export const mouseEnter = (event) => {
    const innerContainerRef = document.querySelector('.footer-inner-container');
    event.stopPropagation()
    const children = innerContainerRef.children
    setTimeout(() => {
        for (let i = 0; children.length > i; i++) {
            children[i].style.color = "white"
        }
    }, 200);
    scale = "3"
}
export const mouseLeave = (event) => {
    const innerContainerRef = document.querySelector('.footer-inner-container');
    event.stopPropagation()
    const children = innerContainerRef.children
    setTimeout(() => {
        for (let i = 0; children.length > i; i++) {
            children[i].style.color = "black"
        }
    }, 200);
    scale = "0"
};



export const projectMouseEnter = (event) => {

    if (event.target.children[0]?.children[0] && event.target.children[0]?.children[1] && event.target.children[0]?.children[2]) {
        event.target.children[0].classList.add("project-button");

        event.target.children[0].children[0].style.top = "50%";
        event.target.children[0].children[0].style.borderRadius = "0";
        event.target.children[0].children[1].style.marginTop = "-40px",
            event.target.children[0].children[1].style.opacity = 0,
            event.target.children[0].children[1].style.color = "white"

        event.target.children[0].children[2].style.opacity = 1,
            event.target.children[0].children[2].style.marginTop = "0",
            event.target.children[0].children[2].style.color = "white"

        project = event.target.children[0].style.border;
        event.target.children[0].style.border = "1px solid black"

    }
}

export const projectMouseLeave = (event) => {
    if (event.target.children[0]?.children[0] && event.target.children[0]?.children[1] && event.target.children[0]?.children[2]) {
        event.target.children[0].classList.remove("project-button")

        event.target.children[0].children[0].style.top = "150%";
        event.target.children[0].children[0].style.borderRadius = "100%"

        event.target.children[0].children[1].style.marginTop = "0",
            event.target.children[0].children[1].style.opacity = 1,
            event.target.children[0].children[1].style.color = "black"

        event.target.children[0].children[2].style.opacity = 0,
            event.target.children[0].children[2].style.marginTop = "50px",
            event.target.children[0].children[2].style.color = "black"


        event.target.children[0].style.border = project

        project = false;


        event.target.children[0].style.transform = `translate3d(0, 0, 0)`;

    }
}

export const headerMouseEnter = (event) => {
    if (event.target?.children[0]) {
        event.target.children[0].classList.add("header-button");
        header = true
    }
}
export const headerMouseLeave = (event) => {
    if (event.target?.children[0]) {
        event.target.children[0].classList.remove("header-button")
        header = false
        event.target.children[0].style.transform = `translate3d(0, 0, 0)`;
    }
}


