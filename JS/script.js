


const tabs = document.querySelectorAll(".tabs");
const contents = document.querySelectorAll(".content");
const colorSelectors = [
    document.getElementById("colorSelector"),
    document.getElementById("colorSelector2"),
    document.getElementById("colorSelector3"),
    document.getElementById("colorSelector4"),
    document.getElementById("colorSelector5"),
    document.getElementById("colorSelector6"),
    document.getElementById("colorSelector7"),
    document.getElementById("colorSelector8")
];
const jacket = document.getElementById("jacket");

const colors = [
    "#F2E7D5", "#BE6858", "#EC8E19", "#875b32", "#3D87C0", "#bb6323", "#854e0f", "#a63000",
    "#676263", "#9a3c06", "#691c1a", "#054012", "#840213", "#770d22", "#0e3426", "#320d38",
    "#232323", "#072c0a", "#561e1e", "#28142c", "#1d231e", "#0d264d", "#2a1606", "#1c1b2b",
    "#0c1733", "#151225", "#141313", "#38101d", "#d83e0d", "#a23e01", "#eca007", '#ffffff'
];

const colorSections = ['#bodyColor', '#sleeveColor', '#pocketColor', '#buttonColor', '#zipper', '#collorColor, #collartype2, #collartype3, collartype4', '#stripColor, #stripColors', '#innerColor'];

var svgDoc;

jacket.addEventListener('load', () => {
    svgDoc = jacket.contentDocument;

    colorSections.forEach((section, index) => {
        const parts = svgDoc.querySelectorAll(section);
        colorSelectors[index].addEventListener('click', (event) => {
            if (event.target.classList.contains('box')) {
                const color = event.target.getAttribute('data-color');
                parts.forEach(part => {
                    part.style.fill = color;
                });
            }
        });
    });
});

colors.forEach(color => {
    colorSelectors.forEach(selector => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.setProperty("--boxColor", color);
        box.setAttribute("data-color", color);
        selector.appendChild(box);
    });
});

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active-tab"));
        contents.forEach(c => c.classList.remove("active-content"));

        tab.classList.add("active-tab");
        contents[index].classList.add("active-content");
    });

});

tabs[0].click();

jacket.addEventListener('load', () => {

    document.getElementById("tab4").addEventListener("click", () => {
        const buttons = svgDoc.getElementById("buttons");
        buttons.style.display = "block";
        const zipper = svgDoc.getElementById("zipper");
        zipper.style.display = "none";
    });

    document.getElementById("tab5").addEventListener("click", () => {
        const zipper = svgDoc.getElementById("zipper");
        zipper.style.display = "block";
        const buttons = svgDoc.getElementById("buttons");
        buttons.style.display = "none";
    });
    

});

// collor
tabs[0].click();
jacket.addEventListener('load', () => {

    document.getElementById("tab8").addEventListener("click", () => {
        const stripColor = svgDoc.getElementById("stripColor");
        stripColor.style.display = "block";
        const stripColor1 = svgDoc.getElementById("stripColor1");
        stripColor1.style.display = "none";
        
    });

    document.getElementById("tab9").addEventListener("click", () => {
        const stripColor1 = svgDoc.getElementById("stripColor1");
        stripColor1.style.display = "block";
        const stripColor = svgDoc.getElementById("stripColor");
        stripColor.style.display = "none";
    });
});



    tabs[0].click();
    jacket.addEventListener('load', () => {

    const collartype1 = svgDoc.getElementById("collartype1");
        collartype1.style.display = "block";
        const collartype2 = svgDoc.getElementById("collartype2");
        collartype2.style.display = "none";
        const collartype4 = svgDoc.getElementById("collartype4");
        collartype4.style.display = "none";
        const collartype3 = svgDoc.getElementById("collartype3");
        collartype3.style.display = "none";
        
        
        document.getElementById("tab10").addEventListener("click", () => {
        const collartype1 = svgDoc.getElementById("collartype1");
        collartype1.style.display = "block";
        const collartype2 = svgDoc.getElementById("collartype2");
        collartype2.style.display = "none";
        const collartype4 = svgDoc.getElementById("collartype4");
        collartype4.style.display = "none";
        const collartype3 = svgDoc.getElementById("collartype3");
        collartype3.style.display = "none";
    });
    document.getElementById("tab13").addEventListener("click", () => {
        const collartype4 = svgDoc.getElementById("collartype4");
        collartype4.style.display = "block";
        const collartype2 = svgDoc.getElementById("collartype2");
        collartype2.style.display = "none";
        const collartype1 = svgDoc.getElementById("collartype1");
        collartype1.style.display = "none";
        const collartype3 = svgDoc.getElementById("collartype3");
        collartype3.style.display = "none";
        
    });
    document.getElementById("tab11").addEventListener("click", () => {
        const collartype2 = svgDoc.getElementById("collartype2");
        collartype2.style.display = "block";
        const collartype1 = svgDoc.getElementById("collartype1");
        collartype1.style.display = "none";
        const collartype4 = svgDoc.getElementById("collartype4");
        collartype4.style.display = "none";
        const collartype3 = svgDoc.getElementById("collartype3");
        collartype3.style.display = "none";
    });

    document.getElementById("tab12").addEventListener("click", () => {
        const collartype3 = svgDoc.getElementById("collartype3");
        collartype3.style.display = "block";
        const collartype1 = svgDoc.getElementById("collartype1");
        collartype1.style.display = "none";
        const collartype2 = svgDoc.getElementById("collartype2");
        collartype2.style.display = "none";
        const collartype4 = svgDoc.getElementById("collartype4");
        collartype4.style.display = "none";
    });
    

});

