function showSection(id) {
    document.getElementById("mainMenu").style.display = "none";

    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}

function goBack() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById("mainMenu").style.display = "flex";
}
