document.addEventListener("DOMContentLoaded", () => {
    // Kích hoạt tất cả player sử dụng Plyr
    Plyr.setup('.player');
});

function navigateTo(partId) {
    // Ẩn menu chính
    document.querySelector(".main-menu").style.display = "none";

    // Hiện phần đã chọn
    document.querySelectorAll(".video-page").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(partId).classList.add("active");
}

function goBack() {
    // Dừng tất cả video khi quay lại
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ẩn các phần video
    document.querySelectorAll(".video-page").forEach(section => {
        section.classList.remove("active");
    });

    // Hiện lại menu chính
    document.querySelector(".main-menu").style.display = "flex";
}
