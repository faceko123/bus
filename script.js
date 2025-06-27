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

    // Hiện section được chọn
    document.getElementById(id).classList.add('active');
}

function goBack() {
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

    // Ẩn tất cả phần ảnh
    ['part1Images', 'part2Images', 'part3Images'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('active');
    });

    // Hiện album tương ứng
    document.getElementById(albumId).classList.add('active');
}
// Gán sự kiện click cho ảnh trong album để mở lightbox
document.addEventListener('DOMContentLoaded', () => {
    const albumImages = document.querySelectorAll('.album img');
    albumImages.forEach(img => {
        img.addEventListener('click', () => {
            showLightbox(img.src);
        });
    });
});

function showLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.getElementById('lightbox-img').src = '';
}

