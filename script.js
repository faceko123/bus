function navigateTo(partId) {
    // Ẩn menu chính
    document.querySelector(".main-menu").style.display = "none";

    // Hiện phần video được chọn
    document.querySelectorAll(".video-page").forEach(page => {
        page.classList.add("hidden");
    });
    document.getElementById(partId).classList.remove("hidden");
}

function goBack() {
    // Dừng tất cả video đang phát
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ẩn tất cả phần video
    document.querySelectorAll(".video-page").forEach(page => {
        page.classList.add("hidden");
    });

    // Hiện lại menu chính
    document.querySelector(".main-menu").style.display = "flex";
}
