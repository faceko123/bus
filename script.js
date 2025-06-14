document.addEventListener("DOMContentLoaded", () => {
    Plyr.setup('.player');
});

function navigateTo(partId) {
    document.querySelector(".main-menu").style.display = "none";
    document.getElementById(partId).classList.remove("hidden");
}

function goBack() {
    // Tạm dừng tất cả video
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ẩn tất cả phần video
    document.querySelectorAll(".video-page").forEach(page => {
        page.classList.add("hidden");
    });

    // Hiện menu chính
    document.querySelector(".main-menu").style.display = "flex";
}
