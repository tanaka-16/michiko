// Cấu trúc dữ liệu ca sĩ và các bài hát của họ
const songsData = {
    "Mrs. GREEN APPLE": [
        {
            "title": "ビターバカンス",
            "video": "https://www.youtube.com/embed/-6YeAmmRdoA",
            "lyrics": "歌詞 ビターバカンス の内容..."
        },
        {
            "title": "青と夏",
            "video": "https://www.youtube.com/embed/YHbQzON91ug",
            "lyrics": "歌詞 青と夏 の内容..."
        }
    ],
    "RADWIMPS": [
        {
            "title": "前前前世",
            "video": "https://www.youtube.com/embed/8wT-4NBqFhI",
            "lyrics": "歌詞 前前前世 の内容..."
        },
        {
            "title": "なんでもないや",
            "video": "https://www.youtube.com/embed/ogWv21rzAZk",
            "lyrics": "歌詞 なんでもないや の内容..."
        }
    ]
};

// Hàm hiển thị danh sách bài hát cho mỗi ca sĩ
function renderSongs(artist) {
    const songList = document.getElementById("song-list");
    songList.innerHTML = ''; // Xóa danh sách cũ trước khi hiển thị lại

    const songs = songsData[artist];
    songs.forEach((song) => {
        const songItem = document.createElement("li");
        songItem.textContent = song.title;
        songItem.classList.add("song");
        songItem.onclick = () => playSong(song); // Khi click vào bài hát, gọi hàm playSong
        songList.appendChild(songItem);
    });
}

// Hàm phát bài hát (thay đổi video và lời bài hát)
function playSong(song) {
    const videoElement = document.getElementById("video");
    videoElement.src = song.video + "?autoplay=1&loop=1&playlist=" + getVideoID(song.video); // Thêm autoplay và loop

    const lyricsContainer = document.querySelector(".lyrics");
    lyricsContainer.textContent = song.lyrics; // Hiển thị lời bài hát
}

// Hàm để lấy video ID từ URL YouTube
function getVideoID(url) {
    const regex = /embed\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
}

// Hàm để toggle (ẩn/hiện) danh sách ca khúc của ca sĩ
function toggleSongList(artist) {
    const songList = document.getElementById("song-list");
    if (songList.style.display === "none" || songList.style.display === "") {
        songList.style.display = "block"; // Hiển thị danh sách bài hát
        renderSongs(artist); // Hiển thị các bài hát của ca sĩ
    } else {
        songList.style.display = "none"; // Ẩn danh sách bài hát
    }
}

// Hàm để render danh sách ca sĩ
function renderArtists() {
    const artistList = document.getElementById("artist-list");
    for (const artist in songsData) {
        const artistItem = document.createElement("li");
        artistItem.textContent = artist;
        artistItem.classList.add("artist");
        artistItem.onclick = () => toggleSongList(artist); // Khi click vào tên ca sĩ, toggle danh sách bài hát
        artistList.appendChild(artistItem);
    }
}

// Hàm khởi tạo trang
function init() {
    renderArtists(); // Hiển thị danh sách ca sĩ khi trang được tải
}

// Chạy hàm init khi trang được tải
window.onload = init;
