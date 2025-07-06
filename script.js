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
    document.querySelectorAll("video").forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
}
function showAlbum(albumId) {
    document.querySelectorAll('.album').forEach(album => {
        album.classList.remove('active');
    });
    const el = document.getElementById(albumId);
    if (el) el.classList.add('active');
}
document.addEventListener('DOMContentLoaded', () => {
    const albumImages = document.querySelectorAll('.album img');
    albumImages.forEach(img => {
        img.addEventListener('click', () => {
            showLightbox(img.src);
        });
    });
});
