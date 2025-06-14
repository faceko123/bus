function showSection(id) {
    // Ẩn tất cả các phần
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Hiện phần được chọn
    document.getElementById(id).classList.add('active');

    // Ẩn menu chính
    document.getElementById('mainMenu').style.display = 'none';
}

function goBack() {
    // Dừng tất cả video
    const videos = document.querySelectorAll("video");
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0; // Reset nếu muốn về đầu
    });

     // Ẩn tất cả các phần
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Hiện lại menu chính
    document.getElementById('mainMenu').style.display = 'flex';
}
