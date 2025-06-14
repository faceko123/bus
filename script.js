function navigateTo(partId) {
  // Ẩn menu chính
  document.querySelector(".main-menu").style.display = "none";

  // Hiện phần được chọn
  document.querySelectorAll(".video-page").forEach(page => {
    page.classList.add("hidden");
  });
  document.getElementById(partId).classList.remove("hidden");
}

function goBack() {
  // Dừng và reset tất cả video
  document.querySelectorAll("video").forEach(video => {
    video.pause();
    video.currentTime = 0;
  });

  // Ẩn tất cả video-page
  document.querySelectorAll(".video-page").forEach(page => {
    page.classList.add("hidden");
  });

  // Hiện lại menu chính
  document.querySelector(".main-menu").style.display = "flex";
}
