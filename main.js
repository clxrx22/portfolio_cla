window.onload = function () {
    console.log("bien vu l'aveugle");

    let aboutElmt = document.querySelector("#about");

    function handleScrollBody() {
        if (!document.body.classList.contains("scroll-lock") && window.scrollY >= aboutElmt.offsetTop && window.scrollY < aboutElmt.getBoundingClientRect().height + aboutElmt.offsetTop) {
            document.body.classList.add("scroll-lock");
            window.scrollTo({
                top: aboutElmt.offsetTop,
                left: 0,
                behavior: "instant"
            });
        }
        if (window.scrollY < aboutElmt.offsetTop) {
            document.body.classList.remove("scroll-lock");
        }
    }

    function events() {
        window.addEventListener("scroll", handleScrollBody);
    }

    events();
}
