function showSection(id) {
    // Dừng video khi chuyển trang
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ẩn tất cả section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Hiện section được chọn
    document.getElementById(id).classList.add('active');

    // Ẩn menu chính nếu không trở lại
    if (!["part1Menu", "part2Menu", "part3Menu"].includes(id)) {
        document.getElementById('mainMenu').style.display = 'none';
    }
}

function goBack() {
    // Dừng video
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ẩn tất cả section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Hiện lại menu chính
    document.getElementById('mainMenu').style.display = 'flex';
}
