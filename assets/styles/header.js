const styles = {
    lines: { background: "black", height: "3px", marginLeft: "19px", marginRight: "5px", borderRadius: "50px", transition: "transform 0.5s, background 2s" },
    lines_btn: { width: "50px", height: "100%", flexDirection: "column", display: "flex", justifyContent: "center", cursor: "pointer", zIndex: 1002 },
    main_container: { zIndex: 1111, marginLeft: "3.6%", marginRight: "3.6%", display: "flex", justifyContent: "space-between", position: "fixed", top: "0", width: "calc(100% - (3.6% * 2))", overflow: "hidden" },
    nav_sides: { display: "flex" },
    links: { fontSize: "15px", fontWeight: "600", color: "#6e6e73", marginLeft: "50px" },

    quote: { width: "100px", height: "40px", background: "linear-gradient(to bottom right, transparent, #3398ff 80%)", borderRadius: "50px", color: "white", fontSize: "13px", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", transition: "0.5s" },
    quote_container: { display: "flex", alignItems: "center", height: "100%", width: "170px", justifyContent: "center", marginRight: "-10px", zIndex: 1002 },
    links_container: { display: "flex", alignItems: "center", transition: "0.5s", zIndex: 1002 },
    G_father_container: { height: "calc(100vh + 80px)", width: "100%", marginTop: "-80px", overflow: "hidden", position: "fixed", background: "transparent" },
    father_container: { background: "white", transition: "0.6s", float: "right", borderBottomLeftRadius: "100%" },
    container: { width: "50%", marginLeft: "50%", height: "calc(100vh + 80px)", marginTop: "80px", display: "flex", justifyContent: "center", alignItems: "center" },
    menu: { width: "50%", display: "flex", justifyContent: "center", gap: "100px" },
    left_side: { fontSize: "0.42rem", color: "#6e6e73", fontWeight: "600", lineHeight: "3", marginTop: "-20%" },
    right_side: { fontWeight: "500", color: "#6e6e73", lineHeight: "1.8", marginTop: "-20%" },
    menu_title: { fontSize: "0.38rem", fontWeight: "500" },
    mobile_button: { backgroundColor: "#3398ff", color: "white", borderRadius: "50px", fontSize: "20px", width: "80vw", height: "60px", display: "flex", alignItems: "center", justifyContent: "center", marginTop: "60px" },
    mobile_button_hover: (e) => { e.target.style.color = "black"; e.target.style.cursor = "pointer" },
    mobile_button_leave: (e) => e.target.style.color = "#6e6e73"
}

module.exports = { ...styles }
