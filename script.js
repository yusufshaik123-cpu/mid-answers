// =========================
// QUESTION TOGGLE
// =========================

function toggle(card){

    card.classList.toggle("open");

}

// =========================
// SWITCH TABS
// =========================

function switchTab(id, btn = null){

    document.querySelectorAll(".tab-content")
    .forEach(tab => {
        tab.classList.remove("active");
    });

    document.getElementById(id)
    .classList.add("active");

    document.querySelectorAll(".tab-btn")
    .forEach(button => {
        button.classList.remove("active");
    });

    if(btn){
        btn.classList.add("active");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

}

// =========================
// EXPAND ALL
// =========================

function expandAll(sectionId){

    const section = document.getElementById(sectionId);

    section.querySelectorAll(".q-card")
    .forEach(card => {
        card.classList.add("open");
    });

}

// =========================
// COLLAPSE ALL
// =========================

function collapseAll(sectionId){

    const section = document.getElementById(sectionId);

    section.querySelectorAll(".q-card")
    .forEach(card => {
        card.classList.remove("open");
    });

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll("a[href^='#']")
.forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });

    });

});

// =========================
// SCROLL REVEAL
// =========================

const reveals = document.querySelectorAll(
".subject-card, .feature-box, .q-card"
);

window.addEventListener("scroll", revealElements);

function revealElements(){

    reveals.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){

            el.style.opacity = "1";
            el.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(el => {

    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease";

});

revealElements();
