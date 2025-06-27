function showSection(id) {
    // Dừng video
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ẩn tất cả section
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Hiện phần được chọn
    document.getElementById(id).classList.add('active');
}

function goBack() {
    // Dừng video
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });

    // Ẩn tất cả
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Hiện lại menu chính
    document.getElementById('mainMenu').style.display = 'flex';
}

function showAlbum(albumId) {
    // Ẩn tất cả album
    document.querySelectorAll('.album').forEach(album => {
        album.classList.remove('active');
    });

    // Ẩn phần ảnh bìa
    document.getElementById('part1Images').classList.remove('active');

    // Hiện album tương ứng
    document.getElementById(albumId).classList.add('active');
}
