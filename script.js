// Dữ liệu ca sĩ và bài hát
const songsData = {
    "Mrs. GREEN APPLE": [
        {
            "title": "ビターバカンス",
            "video": "https://www.youtube.com/embed/-6YeAmmRdoA",
            "lyrics": "歌詞 ビターバカンス の内容..."
        },
        {
            "title": "青と夏",
            "video": "https://www.youtube.com/embed/Z9LrN6VY23E",
            "lyrics": "歌詞 青と夏 の内容..."
        }
    ],
    "Aimer": [
        {
            "title": "カタオモイ",
            "video": "https://www.youtube.com/embed/4TY2WfXQ2hI",
            "lyrics": "歌詞 カタオモイ の内容..."
        }
    ]
};

// Hàm để tạo danh sách ca sĩ
function createSingerList() {
    const artistList = document.getElementById('artist-list');
    for (const artist in songsData) {
        const artistItem = document.createElement('li');
        artistItem.textContent = artist;
        artistItem.onclick = function() {
            toggleSongList(artist, artistItem);
        };
        artistList.appendChild(artistItem);
    }
}

// Hàm để hiển thị danh sách bài hát của ca sĩ và thay đổi video và lời bài hát
function toggleSongList(artist, artistItem) {
    // Kiểm tra xem danh sách bài hát đã tồn tại chưa
    let songList = artistItem.nextElementSibling;

    // Nếu danh sách bài hát chưa tồn tại, tạo nó
    if (!songList || songList.nodeName !== 'UL') {
        songList = document.createElement('ul');
        songList.style.display = 'none';  // Đảm bảo nó được ẩn khi bắt đầu
        songsData[artist].forEach((song) => {
            const songItem = document.createElement('li');
            songItem.textContent = song.title;
            songItem.style.cursor = 'pointer'; // Chỉnh lại con trỏ chuột thành bàn tay khi hover
            songItem.onclick = function() {
                changeSong(song);
            };
            songList.appendChild(songItem);
        });
        artistItem.after(songList);
    } else {
        // Nếu danh sách bài hát đã tồn tại, ẩn hoặc hiển thị nó
        if (songList.style.display === 'none') {
            songList.style.display = 'block';
        } else {
            songList.style.display = 'none';
        }
    }
}

// Hàm để thay đổi video và lời bài hát
function changeSong(song) {
    const videoFrame = document.getElementById('video');
    const lyricsDiv = document.querySelector('.lyrics-content');
    
    // Kiểm tra nếu videoFrame không phải là null
    if (videoFrame) {
        videoFrame.src = song.video + '?autoplay=1'; // Thêm autoplay để video tự động phát
    }
    
    // Kiểm tra nếu lyricsDiv không phải là null
    if (lyricsDiv) {
        lyricsDiv.textContent = song.lyrics;
    }
}

// Gọi hàm để tạo danh sách ca sĩ khi trang web được tải
document.addEventListener('DOMContentLoaded', () => {
    createSingerList();
});
