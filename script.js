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
    // Không hiển thị gì ban đầu
    // Chỉ gán sự kiện click cho ảnh trong album
    document.querySelectorAll('.album img').forEach(img => {
        img.addEventListener('click', () => {
            const full = window.open(img.src, '_blank');
            if (full) full.focus();
        });
    });
});

document.querySelectorAll('.video-thumb video').forEach(video => {
    video.addEventListener('click', () => {
        // Nếu video đang tạm dừng thì phát, ngược lại thì tạm dừng
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Gán hành vi cho tất cả video trong mục đặc biệt
    document.querySelectorAll('.video-thumb video').forEach(video => {
        video.loop = true; // Cho phép tự động phát lặp lại
        video.controls = false; // Ẩn controls mặc định ban đầu

        // Khi nhấn vào sẽ phát hoặc dừng
        video.addEventListener('click', () => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        // Khi di chuột vào video thì hiện controls
        video.addEventListener('mouseenter', () => {
            video.controls = true;
        });

        // Khi rời chuột thì ẩn controls
        video.addEventListener('mouseleave', () => {
            video.controls = false;
        });
    });
});

