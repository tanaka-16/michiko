// Tải dữ liệu từ file JSON
const songsData = {
    "Mrs. GREEN APPLE": [
        {
            "title": "ビターバカンス",
            "video": "https://www.youtube.com/embed/-6YeAmmRdoA",
            "lyrics": "歌詞 ビターバカンス の内容..."
        },
        {
            "title": "familie",
            "video": "https://www.youtube.com/embed/https://youtu.be/FYhxYcXfhYA",
            "lyrics": "歌詞 familie の内容..."
        },
        {
            "title": "ライラック",
            "video": "https://www.youtube.com/embed/https://youtu.be/QjrkrVmC-8M",
            "lyrics": "歌詞 ライラック の内容..."
        },
        {
            "title": "点描の唄",
            "video": "https://www.youtube.com/embed/https://youtu.be/9UQQwRcHHQY",
            "lyrics": "歌詞 点描の唄 の内容..."
        },
        {
            "title": "Dear",
            "video": "https://www.youtube.com/embed/https://youtu.be/cNP21cprtbk",
            "lyrics": "歌詞 Dear の内容..."
        },
        {
            "title": "コロンブス",
            "video": "https://www.youtube.com/embed/https://youtu.be/z6x_Xk0WFko",
            "lyrics": "歌詞 コロンブス の内容..."
        },
        {
            "title": "ナハトムジーク",
            "video": "https://www.youtube.com/embed/https://youtu.be/Dsylo684yWA",
            "lyrics": "歌詞 ナハトムジーク の内容..."
        },
        {
            "title": "Magic",
            "video": "https://www.youtube.com/embed/https://youtu.be/CN-Ja6jCweA",
            "lyrics": "歌詞 Magic の内容..."
        },
        {
            "title": "ケセラセラ",
            "video": "https://www.youtube.com/embed/https://youtu.be/Jy-QS27q7lA",
            "lyrics": "歌詞 ケセラセラ の内容..."
        },
        {
            "title": "Soranji",
            "video": "https://www.youtube.com/embed/https://youtu.be/44cICMd3jW4",
            "lyrics": "歌詞 Soranji の内容..."
        },


        {
            "title": "ダンスホール",
            "video": "https://www.youtube.com/embed/https://youtu.be/x2rvSf0STBM",
            "lyrics": "歌詞 ダンスホール の内容..."
        },
        {
            "title": "青と夏",
            "video": "https://www.youtube.com/embed/https://youtu.be/m34DPnRUfMU",
            "lyrics": "歌詞 青と夏 の内容..."
        },
        {
            "title": "ロマンチシズム",
            "video": "https://www.youtube.com/embed/https://youtu.be/RiDCIqF0-6Y",
            "lyrics": "歌詞 ロマンチシズム の内容..."
        },
        {
            "title": "僕のこと",
            "video": "https://www.youtube.com/embed/https://youtu.be/xefpHEg5UIA",
            "lyrics": "歌詞 僕のこと の内容..."
        },
    ],
    "こっちのけんと": [
        {
            "title": "はいよろこんで",
            "video": "https://www.youtube.com/embed/https://youtu.be/jzi6RNVEOtA",
            "lyrics": "歌詞 はいよろこんで の内容..."
        },
    ]
    "AKASAKI": [
        {
            "title": "バニーガール",
            "video": "https://www.youtube.com/embed/https://youtu.be/RCltAg_iK0E",
            "lyrics": "歌詞 バニーガール の内容..."
        },
    ]
    "Creepy Nuts": [
        {
            "title": "オトノケ",
            "video": "https://www.youtube.com/embed/https://youtu.be/tRwHpyOq4P4",
            "lyrics": "歌詞 オトノケ の内容..."
        }
    ]
};

renderSingers(songsData);
    })
    .catch((error) => console.error("Error loading songs.json:", error));

// Hàm render danh sách ca sĩ
function renderSingers(data) {
    const singersContainer = document.querySelector(".singers");
    Object.keys(data).forEach((singer) => {
        const singerItem = document.createElement("li");
        singerItem.textContent = singer;
        singerItem.addEventListener("click", () => toggleSongs(data, singer, singerItem));
        singersContainer.appendChild(singerItem);
    });
}

// Hiển thị hoặc ẩn danh sách bài hát
function toggleSongs(data, singer, singerItem) {
    const existingSongs = singerItem.nextElementSibling;
    if (existingSongs && existingSongs.classList.contains("song-list")) {
        existingSongs.remove();
    } else {
        const songList = document.createElement("ul");
        songList.classList.add("song-list");
        data[singer].forEach((song) => {
            const songItem = document.createElement("li");
            songItem.textContent = song.title;
            songItem.addEventListener("click", () => renderSong(song));
            songList.appendChild(songItem);
        });
        singerItem.insertAdjacentElement("afterend", songList);
    }
}

// Render video và lời bài hát
function renderSong(song) {
    document.getElementById("video").src = `${song.video}?autoplay=1&loop=1&playlist=${getVideoID(song.video)}`;
    const lyricsContainer = document.querySelector(".lyrics");
    lyricsContainer.textContent = song.lyrics;
}

// Trích xuất video ID để lặp lại video
function getVideoID(url) {
    const regex = /embed\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : "";
}
