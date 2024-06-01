

var typed = new Typed(".typing", {
    strings: ["", "Desenvolvedor Front-end", "Web Designer", "Digital Specialist"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});


const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length,
    allSection = document.querySelectorAll(".section"),
    totalSection = allSection.length;

for (let i = 0; i < totalNavList; i++) {
    navList[i].addEventListener("click", function (event) {
        event.preventDefault();
        const target = this.querySelector("a").getAttribute("href").split("#")[1];
        showSection(target);
        updateNav(target);
        removeBackSection();
        addBackSection(target);
        if (window.innerWidth < 1200) {
            asideSectionTogglerBtn();
        }
    });
}

function removeBackSection() {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("back-section");
    }
}

function addBackSection(num) {
    allSection[num].classList.add("back-section");
}

function showSection(sectionId) {
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.remove("active");
    }
    document.getElementById(sectionId).classList.add("active");
}

function updateNav(target) {
    for (let i = 0; i < totalNavList; i++) {
        navList[i].querySelector("a").classList.remove("active");
        const href = navList[i].querySelector("a").getAttribute("href").split("#")[1];
        if (target === href) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    showSection(sectionIndex);
    updateNav(sectionIndex);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");

navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSection; i++) {
        allSection[i].classList.toggle("open");
    }
}

var audioPlayer = document.getElementById("audio-player");
var audioPlayer2 = document.getElementById("audio-player2");


audioPlayer.addEventListener("ended", function () {
    audioPlayer2.play();
    audioPlayer.currentTime = 0;
});





document.querySelector(".home-info .btn").addEventListener("click", function () {
    document.getElementById("password-form").classList.remove("hidden");
});


document.getElementById("password-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const password = document.getElementById("password-input").value;

    if (password === "123456789") {

        const pdfUrl = "https://drive.google.com/file/d/1hCUFQLai9gCovEPJb2m8GREim-60b428/view?usp=drive_link";
        window.open(pdfUrl, "_blank");
    } else {
        alert("Senha incorreta. Tente novamente.");
    }
});
document.getElementById("close-btn").addEventListener("click", function () {
    document.getElementById("password-form").classList.add("hidden");
});
document.getElementById('sendEmailButton').addEventListener('click', function () {
    const name = document.getElementById('nameInput').value.trim();
    const email = document.getElementById('emailInput').value.trim();
    const objective = document.getElementById('objectiveInput').value.trim();
    const message = document.getElementById('messageInput').value.trim();


    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !objective || !message) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Por favor, insira um endereço de e-mail válido.');
        return;
    }

    window.location.href = "mailto:pattywebdesigner@gmail.com?subject=" + encodeURIComponent(objective) + "&body=" + encodeURIComponent(message);
});
