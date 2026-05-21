// QUESTION TOGGLE

function toggle(card) {
    card.classList.toggle("open");
}

// SWITCH TABS

function switchTab(id, btn = null) {

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
}

// EXPAND ALL

function expandAll(sectionId){

    const section = document.getElementById(sectionId);

    section.querySelectorAll(".q-card")
        .forEach(card => {
            card.classList.add("open");
        });
}

// COLLAPSE ALL

function collapseAll(sectionId){

    const section = document.getElementById(sectionId);

    section.querySelectorAll(".q-card")
        .forEach(card => {
            card.classList.remove("open");
        });
}

// SMOOTH SCROLL ACTIVE LINK

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