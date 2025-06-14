// Khởi tạo tất cả video với Plyr
document.addEventListener('DOMContentLoaded', () => {
    const players = Plyr.setup('.plyr');
});

function showSection(id) {
    document.getElementById("mainMenu").style.display = "none";

    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}

function goBack() {
    // Dừng tất cả video Plyr
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById("mainMenu").style.display = "flex";
}
