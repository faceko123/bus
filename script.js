function showSection(id) {
    document.getElementById("mainMenu").style.display = "none";

    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}

function goBack() {
    // Dừng tất cả video
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0; // Reset nếu muốn về đầu
    });

    // Ẩn các phần
    const sections = document.querySelectorAll(".section");
    sections.forEach(sec => sec.classList.remove("active"));

    // Hiện menu chính
    document.getElementById("mainMenu").style.display = "flex";
}
