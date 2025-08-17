function jumpLogo(){
    const logo = document.getElementById("logo");
    if (!logo) return;
    logo.style.transition = "transform 0.5s";
    logo.style.transform = "translateY(-10px)";
    logo.addEventListener("mouseover", () => {
        logo.style.transform = "translateY(-10px)";
    });

    logo.addEventListener("mouseout", () =>{
        logo.style.transform = "translateY(0)";
    });

    setTimeout(() => {
        logo.style.transform = "translateY(0)";
    }, 500);
}

function jumpLink(){
    const link = document.getElementsByClassName("link");
        if (!link.length) return;
        Array.from(link).forEach(link => {
            const size = parseInt(window.getComputedStyle(link).fontSize, 10);
            link.style.transition = "font-size 0.5s ease";
            link.addEventListener("mouseover", () => {
                link.style.fontSize = (size + 3) + "px";
            });
            link.addEventListener("mouseout", () => {
                link.style.fontSize = size + "px";
            });
        });
}


document.addEventListener("DOMContentLoaded", function () {
    jumpLogo();
    jumpLink();
});
