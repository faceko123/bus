function showSection(id) {
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    const section = document.getElementById(id);
    if (section) section.classList.add('active');
}

function goBack() {
    window.location.href = 'index.html'; // hoặc history.back();
}

function showAlbum(albumId) {
    document.querySelectorAll('.album').forEach(album => {
        album.classList.remove('active');
    });
    const el = document.getElementById(albumId);
    if (el) el.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Tự động bật phần ảnh đầu tiên khi trang mới được mở
    const defaultImageSection = document.querySelector('#part1Images, #specialImages, #part2Images, #part3Images, #part4Images');
    if (defaultImageSection) defaultImageSection.classList.add('active');

    // Cho phép xem ảnh full khi bấm vào trong album
    document.querySelectorAll('.album img').forEach(img => {
        img.addEventListener('click', () => {
            const full = window.open(img.src, '_blank');
            if (full) full.focus();
        });
    });
});
